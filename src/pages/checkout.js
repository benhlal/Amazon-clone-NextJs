import React from 'react';
import Header from "../components/Header";
import Image from "next/image"
import {useSelector} from "react-redux";
import {selectItems, selectTotal} from "../slices/basketSlice";
import CheckoutProduct from "../components/CheckoutProduct.";
import Currency from "react-currency-formatter";
import {session, useSession} from "next-auth/client";

function Checkout(props) {

    const items = useSelector(selectItems);
    const total = useSelector(selectTotal);
    const [session] = useSession();
    return (
        <div className={'bg-gray-100'}>
            <Header/>

            <main className="lg:flex max-w-screen-2xl mx-auto">

                <div className="flex-grow m-5 shadow-sm">
                    <Image src={'https://links.papareact.com/ikj'}
                           width={1020}
                           height={250}
                           objectFit="contain"/>
                    <div className="flex flex-col p-5 space-y-10 bg-white">
                        <h1 className="text-3xl border-b  pb-4">
                            {items.length === 0 ?
                                'Your Amazon Basket is empty' : 'Your Shopping Basket'}
                        </h1>

                        {items.map((item, i) => <CheckoutProduct

                            key={item.i}
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            description={item.description}
                            category={item.category}
                            price={item.price}
                            ratting={item.ratting}
                            hasPrime={item.hasPrime}
                        />)}
                    </div>
                </div>

                {/*Right cart*/}
                <div className="flex flex-col bg-white p-10 shadow-md">
                    {items.length > 0 && (
                        <>
                            <h2 className="whitespace-nowrap">
                                Subtotal ({items.length} items) :
                                <span className="font-bold ml-1">
                                    <Currency quantity={total} currency={'EUR'}/>
                            </span>
                            </h2>

                            <button
                                disabled={!session}
                                className={`button mt-2 
                                ${!session && 'from-gray-300 to-gray-500  border-gray-200 text-gray-300 cursor-not-allowed'}`}>
                                {!session ? "Sign in to checkout" : "Proceed to checkout"}
                            </button>
                        </>
                    )}
                </div>
            </main>
        </div>
    );
}

export default Checkout;