"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";

export interface BestSellerTypes {
    title?: string | undefined;
    image: string | undefined | any;
    id: number | string;
    key?: number | string;
    price?: number | string;
}

const Card = ({ title, image, price }: BestSellerTypes) => {
    // const [priceValue, setPriceValue] = useState(0);
    const [ratingValue, setRatingValue] = useState(0);

    useEffect(() => {
        const randomRating = Math.random() * 4 + 1;
        setRatingValue(Math.round(randomRating));
        // const randomPrice = Math.random() * 50 + 1;
        // setPriceValue(Math.round(randomPrice));
    }, []);
    return (
        <>
            <div className="w-full m-0  p-0 border-l border-r pl-[8px] ">
                <div className="text-center flex justify-center">
                    <img
                        style={{ textAlign: "center" }}
                        width={177}
                        height={158}
                        src={image}
                        alt={title || "Product image"}
                    />
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
                                {price}
                            </h2>
                        </div>
                    </div>
                    <div className="btn">
                        <Button className="font-[500] text-[12px] leading-[150%] text-[#2bbef9] py-[8px] px-[55px] rounded-[30px] border-[#2bbef9] border bg-white ">
                            Add to cart
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;
