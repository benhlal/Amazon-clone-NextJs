import Image from "next/image";
import {useState} from "react";
import {StarIcon} from "@heroicons/react/solid";
import Currency from 'react-currency-formatter';
import {useDispatch, useSelector} from "react-redux";
import {addToBasket} from "../slices/basketSlice";

function Product({id, title, description, category, image, price}) {
    const [rating] = useState(Math.floor(Math.random() * (5 - 1 + 1) + 1));
    const [hasPrime] = useState(Math.random() < 0.7);
    const publishToStore = useDispatch();

    const addItemToBasket = () => {
        const product = {id, title, description, category, image, price, hasPrime}
        //dispatch action with payload to Redux store in the basket slice
        publishToStore(addToBasket(product))

    }
    return (
        <div className="relative flex flex-col m-5 bg-white z-30 p-10 ">
            <p className="absolute top-2 right-2 text-xs italic text-gray-400">
                {category}
            </p>

            <Image cla src={image} width={200} height={200} objectFit={'contain'}/>

            <h4 className="my-3">{title}</h4>

            <div className="flex">
                {Array(rating).fill().map((_, i) => (
                    <StarIcon className="h-5 text-yellow-500"/>)
                )}
            </div>
            <p className="text-xs my-2 line-clamp-2">{description}</p>
            <div className="mb-5">
                <Currency quantity={price} currency={'EUR'}/>
            </div>

            {hasPrime &&
            (<div className={'flex items-center space-x-5 -mt-5'}>
                <img className="object-contain w-12 " src={'https://links.papareact.com/fdw'} alt={''}/>
                <p className="text-xs text-gray-500">FREE NEXT-day Delivery</p>
            </div>)
            }
            <button className="mt-auto button" onClick={addItemToBasket}>Add to basket</button>

        </div>
    );
}

export default Product;