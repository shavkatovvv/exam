"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

export interface ProductCardProps {
    title: string;
    image: string | any;
    price: number;
    originalPrice: number;
    discount: number;
    weight: string;
    inStock: boolean;
    offerEndsIn: number;
}

const Hproduct = ({
    title,
    image,
    price,
    originalPrice,
    discount,
    weight,
    inStock,
    offerEndsIn,
}: ProductCardProps) => {
    const [timeLeft, setTimeLeft] = useState(offerEndsIn);

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const formatTime = (seconds: number) => {
        const days = Math.floor(seconds / (24 * 3600));
        const hours = Math.floor((seconds % (24 * 3600)) / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;

        return `${days.toString().padStart(2, "0")}:${hours
            .toString()
            .padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${secs
            .toString()
            .padStart(2, "0")}`;
    };

    return (
        <>
            <div className="mt-[30px] mb-[30px]">
                <h2 className="text-[20px] font-semibold leading-[120%] uppercase text-[#202435]">
                    HOT PRODUCT FOR{" "}
                    <span className="text-[#ed174a]">THIS WEEK</span>
                </h2>
                <p className="text-[12px] font-normal leading-[150%] text-[#9b9bb4]">
                    Dont miss this opportunity at a special discount just for
                    this week.
                </p>
            </div>
            <div className="border border-[#d51243] rounded-lg p-10 flex items-center gap-6 max-w-[870px] relative">
                <div className="flex-shrink-0 bg-[#d51243] text-white font-bold text-sm p-2 rounded-full absolute top-[13%]">
                    {discount}%
                </div>

                <div className="flex-shrink-0">
                    <Image
                        src={image}
                        alt={title}
                        width={120}
                        height={120}
                        className="object-cover"
                    />
                </div>

                <div className="flex-1">
                    <div>
                        <div className="flex gap-[10px] items-center mb-[10px]">
                            <p className="text-[#d51243] font-bold text-xl">
                                ${price.toFixed(2)}
                            </p>
                            <p className="text-sm text-gray-400 line-through">
                                ${originalPrice.toFixed(2)}
                            </p>
                        </div>
                        <h2 className="text-lg font-semibold text-[#202435] ">
                            {title}
                        </h2>
                    </div>

                    <p className="text-sm text-gray-500 mt-[7px]">
                        {weight}{" "}
                        {inStock ? (
                            <span className="text-[#00b853]">In Stock</span>
                        ) : (
                            "Out of Stock"
                        )}
                    </p>

                    <div className="mt-4">
                        <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                                className="bg-gradient-to-r from-red-500 to-yellow-400 h-2 rounded-full"
                                style={{ width: `${discount}%` }}
                            ></div>
                        </div>
                    </div>

                    <div className="mt-4 text-sm text-gray-500 flex  items-center gap-[10px]">
                        <p className="font-semibold">{formatTime(timeLeft)}</p>
                        <p>Remains until the end of the offer</p>
                    </div>
                </div>
            </div>

            <div className="mt-[30px] rounded-[7px] bg-[#ffeef2] flex items-center justify-between w-[870px] py-[25px] px-[120px]">
                <h2 className="text-[16px] font-normal leading-[150%] text-[#ed174a]">
                    Super discount for your{" "}
                    <span className="font-semibold underline">
                        first purchase.
                    </span>
                </h2>

                <div className="border-dashed border-[1px] border-[#ff6048] rounded-[30px] py-[5px] px-[20px]">
                    <p className="font-semibold text-[16px] uppercase leading-[150%] text-[#ed174a]">
                        FREE25BAC
                    </p>
                </div>

                <p className="font-normal text-[12px] leading-[150%] text-[#9b9bb4]">
                    Use discount code in checkout!
                </p>
            </div>
        </>
    );
};

export default Hproduct;
