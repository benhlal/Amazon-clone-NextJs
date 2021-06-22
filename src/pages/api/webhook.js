import {buffer} from 'micro'
import * as admin from 'firebase-admin'

const serviceAccount = require('../../../fb_permissions.json');
const app = !admin.apps.length ? admin.initializeApp({credential: admin.credential.cert(serviceAccount)}) : admin.app();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

//endpoint secret
const endpointSecret = process.env.STRIPE_SIGNING_SECRET

const fulfillOrder = async (session) => {
    console.log('fulfill order', session)
    return app
        .firestore()
        .collection('users')
        .doc(session.metadata.email)
        .collection('orders')
        .doc(session.id).set({
            amount: session.amount_total / 100,
            amount_shipping: session.total_details.amount_shipping / 100,
            images: JSON.parse(session.metadata.images),
            timestamp: admin.firestore.FieldValue.serverTimestamp(),
        }).then(() => console.log(`SUCCESS : order ${session.id}  transaction saved in DB`))
}
export default async (req, res) => {
    if (req.method === 'POST') {

        const requestBuffer = await buffer(req);
        const payload = requestBuffer.toString();
        const signature = req.headers["stripe-signature"]

        let event;

        //check if the event posted from stripe
        try {
            event = stripe.webhooks.constructEvent(payload, signature, endpointSecret);
        } catch (err) {
            console.log("ERROR CHECKING STRIPE EVENT", err.message);
            return res.status(400).send(`Webhook error ${err.message}`)
        }

        //
        if (event.type == 'checkout.session.completed') {
            const session = event.data.object;
            // order fulfilment
            return fulfillOrder(session)
                .then(res.status(200))
                .catch((err) => res.status(400).send(`webhook Error :${err.message}`));
        }
    }
}

// change how next handles endpoint
export const config = {
    api: {
        bodyParser: false, // prevent parsing request/response body
        externalResolver: true  // give hand to stripe
    }
}