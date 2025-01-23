"use client";

import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "@/slice/slice";
import { Button } from "../ui/button";
import Link from "next/link";

export interface BestSellerTypes {
    title?: string | undefined;
    image: string | undefined;
    id: number | string;
    key?: number | string;
    price?: number | string;
}

const Card = ({ title, image, price, id }: BestSellerTypes) => {
    const [ratingValue, setRatingValue] = useState(0);
    const dispatch = useDispatch();

    useEffect(() => {
        const randomRating = Math.random() * 4 + 1;
        setRatingValue(Math.round(randomRating));
    }, []);

    const handleAddToCart = () => {
        dispatch(
            addCart({
                id: Number(id),
                price: Number(price),
                image: image,
                title: title,
            })
        );
    };

    return (
        <div className="w-full border m-0  p-0 border-l border-r pl-[8px]">
            <div className="text-center flex justify-center">
                <Link href={`/detail/${id}`}>
                    <img
                        style={{ textAlign: "center" }}
                        width={177}
                        height={158}
                        src={image}
                        alt={title || "Product image"}
                    />
                </Link>
            </div>
            <div className=" h-[196px] px-[20px] pb-[20px]  flex flex-col justify-between">
                <div className="others">
                    <h1 className="font-[500] w-[177px] text-[14px] leading-[140%] text-[#202435] mb-[8px]">
                        {title}
                    </h1>
                    <h3 className="rounded-[30px] font-[600] text-[11px] leading-[150%] uppercase text-[#00b853] mb-[10px]">
                        In Stock
                    </h3>
                    <div>
                        {[...Array(5)].map((_, index) => (
                            <span
                                key={index}
                                style={{
                                    color:
                                        index < Math.round(ratingValue)
                                            ? "gold"
                                            : "gray",
                                }}
                            >
                                ★
                            </span>
                        ))}
                        <h2 className="font-[600] text-[18px] leading-[150%] text-[#d51243] mb-[15px]">
                            ${price}
                        </h2>
                    </div>
                </div>
                <div className="btn">
                    <Button
                        onClick={handleAddToCart}
                        className="font-[500] text-[12px] leading-[150%] text-[#2bbef9] py-[8px] px-[55px] rounded-[30px] border-[#2bbef9] border bg-white "
                    >
                        Add to Cart
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Card;
