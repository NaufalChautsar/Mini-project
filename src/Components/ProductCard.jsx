import React from 'react';
import { Link } from 'react-router-dom';

function ProductCard(props) {
    return (
        <div className="border my-5 rounded overflow-hidden">
            <div className="p-3 flex justify-between items-center">
                <h3 className="font-bold">
                    <Link to={`/products/${props.product.id}`}>{props.product.name}</Link>
                </h3>
                <Link
                    to={`/products/${props.product.id}`}
                    className="bg-blue-500 text-white px-4 py-2 flex justify-center rounded-lg">
                    View
                </Link>
            </div>
        </div>
    );
}

export default ProductCard;
