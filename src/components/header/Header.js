import Image from "next/image";
import {
    MenuIcon,
    SearchIcon,
    ShoppingCartIcon
} from "@heroicons/react/outline"

function Header() {
    return (
        <header>
            <div className={'flex items-center bg-amazon_blue pt-1 flex-grow py-2'}>
                <div className={'mt-2 flex items-center flex-grow sm:flex-grow-0'}>
                    <Image
                        src={'https://links.papareact.com/f90'}
                        width={150}
                        height={35}
                        objectFit={"contain"}
                        className={'cursor-pointer'}/>
                </div>

                <div
                    className={'hidden sm:flex items-center h-10 rounded-md cursor-pointer bg-yellow-400  flex-grow hover:bg-yellow-500'}>
                    <input
                        className='p-2 h-full justify-items-center w-6 flex-grow flex-shrink rounded-l-md focus:outline-none '
                        type={'text'}
                        placeholder={'search'}/>
                    <SearchIcon className={'h-12 p-4'}/>
                </div>

                <div className={'text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap'}>
                    <div className={'link'}>
                        <p>Hello Youness</p>
                        <p className={'font-extrabold md:text-sm'}>Account & Lists</p>
                    </div>
                    <div className={'link'}>
                        <p>Returns</p>
                        <p className={'font-extrabold md:text-sm'}> & Orders</p>
                    </div>
                    <div className={'relative link flex items-center'}>
                        <span
                            className={'absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center cursor-pointer rounded-full text-black font-bold'}>0</span>
                        <ShoppingCartIcon className={'h-10'}/>
                        <p className={' hidden md:inline font-extrabold md:text-sm mt-2'}>Basket</p>
                    </div>
                </div>
            </div>

            <div className={'flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white'}>
                <p className={'link flex items-center'}>
                    <MenuIcon className={'h-6 mr-1'}/>
                    All
                </p>
                <p className={'link'}>Prime Video</p>
                <p className={'link'}>Amazon Business</p>
                <p className={'link'}>Today's Deals</p>
                <p className={'hidden lg:inline link'}>Electronics</p>
                <p className={'hidden lg:inline link'}>Food & Grocery</p>
                <p className={'hidden lg:inline link'}>Prime Now</p>
                <p className={'hidden lg:inline link'}>Buy Again</p>
                <p className={'hidden lg:inline link'}>Health</p>
                <p className={'hidden lg:inline link'}>Gaming</p>
            </div>

        </header>
    );
}

export default Header;