import Head from "next/head";
import Header from "../components/header/Header";
import Banner from "../components/banner/Banner";

export default function Home() {
    return (
        <div>
            <Head>
                <title>Amazon 2.0</title>
            </Head>
            <Header/>
            <main className={"max-w-screen-2xl mx-aut"}>
                {/*BANNER*/}
                <Banner/>
                {/*PRODUCTS*/}
            </main>

        </div>
    );
}
