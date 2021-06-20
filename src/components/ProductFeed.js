import Product from "./Product";

function ProductFeed({products}) {


    return (
        <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-row-4 md:-mt-52 ">

            {products.slice(0, 4).map((p) => (
                <Product
                    key={p.id}
                    id={p.id}
                    title={p.title}
                    image={p.image}
                    description={p.description}
                    category={p.category}
                    price={p.price}
                />
            ))}
            <img className="md:col-span-full"
                 src={'https://links.papareact.com/dyz'}
                 alt={''}/>

            <div className="md:col-span-2">
                {products.slice(4, 5).map((p) => (
                    <Product
                        key={p.id}
                        id={p.id}
                        title={p.title}
                        image={p.image}
                        description={p.description}
                        category={p.category}
                        price={p.price}
                    />
                ))}
            </div>


            {products.slice(5, products.length).map((p) => (
                <Product
                    key={p.id}
                    id={p.id}
                    title={p.title}
                    image={p.image}
                    description={p.description}
                    category={p.category}
                    price={p.price}
                />
            ))}


        </div>
    );
}

export default ProductFeed;