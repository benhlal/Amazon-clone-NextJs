console.info('inside backend mapping data and creating session')

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async (req, res) => {

    console.info('Stripe object ==============>', stripe)
    console.info('inside backend mapping data and creating session')
    //destructuring data from  request's bdy
    const {items, email} = req.body
    // () implicit return
    const mapItemsToStripe = items.map((item) =>
        ({
            description: item.description,
            quantity: 1,
            price_data: {
                currency: 'eur',
                unit_amount: item.price * 100,
                product_data: {
                    name: item.title,
                    images: [item.image]
                }
            }
        })
    )
    console.info('mapped to stripe format', mapItemsToStripe)


    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: mapItemsToStripe,
        mode: 'payment',
        shipping_rates: ['shr_1J52z7LYRGBEHFU2FlyJVZQT'],
        shipping_address_collection: {
            allowed_countries: ['FR', 'GB', 'US', 'CA']
        },
        success_url: `${process.env.HOST}/success`,
        cancel_url: `${process.env.HOST}/checkout`,
        metadata: {
            email,
            images: JSON.stringify(items.map(item => item.image))
        }
    })
    res.status(200).json({id: session.id});

}