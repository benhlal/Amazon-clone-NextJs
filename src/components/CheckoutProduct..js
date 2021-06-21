import Image from 'next/image'
import {StarIcon} from "@heroicons/react/solid";
import Currency from "react-currency-formatter";
import {addToBasket, removeFromBasket} from "../slices/basketSlice";
import {useDispatch} from "react-redux";
import addItemToBasket from './Product'

function CheckoutProduct({id, title, description, category, image, price, ratting, hasPrime}) {


    const publishToStore = useDispatch();
    const removeItemsFromBasket = () => {
        publishToStore(removeFromBasket({id}))
        console.info("We are going to remove element ", id)
    }

    const addMoreItemsFromBasket = () => {
        const product = {id, title, description, category, image, price, hasPrime}
        //dispatch action with payload to Redux store in the basket slice
        publishToStore(addToBasket(product))
    }

    return (
        <div className="grid grid-cols-5">
            <Image src={image} width={200} height={200} objectFit="contain"/>

            <div className="col-span-3 mx-5">
                <p>{title}</p>
                <div className="flex">
                    {Array(ratting).fill()
                        .map((_, i) => (<StarIcon key={i} className="h-5 text-yellow-500"/>
                        ))}
                </div>
                <p className="text-xs mt-2 mb-2 line-clamp-3">{description}</p>
                <p className="font-bold"><Currency quantity={price} currency="EUR"/></p>
                {hasPrime && (
                    <div className="flex items-center space-x-2 object-contain">
                        <img src="https://links.papareact.com/fdw"
                             loading="lazy"
                             className="w-12"
                             alt=""/>
                        <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
                    </div>
                )}
            </div>

            <div className="flex flex-col space-y-2 my-auto justify-self-end">
                <button className="mt-auto button" onClick={addMoreItemsFromBasket}>Add to basket</button>
                <button className="mt-auto button" onClick={removeItemsFromBasket}>Remove from basket</button>
            </div>
        </div>
    );
}

export default CheckoutProduct;