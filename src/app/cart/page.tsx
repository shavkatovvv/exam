"use client";

import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/store/store";
import { toggleAmount, deleteProduct } from "@/slice/slice";

const Cart = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { product_list, totalPrice } = useSelector(
        (state: RootState) => state.product
    );

    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) return null;

    const handleIncrease = (id: number) => {
        dispatch(toggleAmount({ id, type: "increment" }));
    };

    const handleDecrease = (id: number) => {
        dispatch(toggleAmount({ id, type: "decrement" }));
    };

    const handleDelete = (id: number) => {
        dispatch(deleteProduct({ id }));
    };

    return (
        <div className="max-w-3xl mx-auto p-6">
            <div className="mt-6">
                <h2 className="text-xl font-bold mb-4">
                    Add <span className="text-red-500">$46.71</span> to cart and
                    get free shipping!
                </h2>
                <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                        className="bg-red-500 h-2 rounded-full"
                        style={{ width: "30%" }}
                    ></div>
                </div>
            </div>
            {product_list.length > 0 ? (
                <>
                    <div className="border-t border-gray-300">
                        {product_list.map((product) => (
                            <div
                                key={product.id}
                                className="flex items-center justify-between border-b py-4"
                            >
                                <img
                                    src={product.image}
                                    alt={product.title || "Product"}
                                    className="w-20 h-20 object-cover"
                                />
                                <div className="flex-1 px-4">
                                    <h2 className="text-lg font-semibold">
                                        {product.title || "Untitled"}
                                    </h2>
                                    <p className="text-sm text-gray-600">
                                        Price: ${product.price?.toFixed(2)}
                                    </p>
                                    <p className="text-sm text-gray-600">
                                        Subtotal: $
                                        {(product.product_price || 0).toFixed(
                                            2
                                        )}
                                    </p>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <button
                                        className="px-3 py-1 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
                                        onClick={() =>
                                            handleDecrease(product.id)
                                        }
                                    >
                                        -
                                    </button>
                                    <span className="text-sm font-medium">
                                        {product.product_count}
                                    </span>
                                    <button
                                        className="px-3 py-1 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
                                        onClick={() =>
                                            handleIncrease(product.id)
                                        }
                                    >
                                        +
                                    </button>
                                </div>
                                <button
                                    className="ml-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                                    onClick={() => handleDelete(product.id)}
                                >
                                    Remove
                                </button>
                            </div>
                        ))}
                    </div>

                    <div className="mt-6 flex justify-between items-center">
                        <h2 className="text-xl font-bold">
                            Total Price: ${totalPrice?.toFixed(2) || "0.00"}
                        </h2>
                        <button className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                            Checkout
                        </button>
                    </div>
                </>
            ) : (
                <p className="text-gray-600">cart is empty.</p>
            )}
        </div>
    );
};

export default Cart;
