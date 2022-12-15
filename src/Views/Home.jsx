import React from 'react';

import LoaderBestSellers from '../Components/LoaderBestSellers';
import ProductCard from '../Components/ProductCard';
import useAxiosGet from '../Hooks/HttpRequest';

function Home() {
    const url = `https://5e9623dc5b19f10016b5e31f.mockapi.io/api/v1/products?page=1&limit=10`;
    let content = null;
    let products = useAxiosGet(url);

    if (products.error) {
        content = <p className="mt-5 text-xl font-bold text-red-500 text-center">Product not found</p>;
    }
    if (products.loading) {
        content = <LoaderBestSellers />;
    }
    if (products.data) {
        content = products.data.map((product, key) => (
            <div key={product.id}>
                <ProductCard product={product} />
            </div>
        ));
    }

    return (
        <div>
            <h1 className="font-bold text-2xl mb-3">My Best Sellers</h1>
            {content}
        </div>
    );
}

export default Home;
