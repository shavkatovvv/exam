import React from "react";
import { CardType } from "@/app/page";
import Link from "next/link";

export const TrendingCard = ({ title, image, price, id }: CardType) => {
    return (
        <Link href={`/detail/${id}`}>
            <div className="flex items-center">
                <img className="w-[70px]" src={image} alt="#" />
                <div>
                    <h1 className="font-[500px] text-[13px] leading-[140%] text-[#202435]">
                        {title}
                    </h1>
                    <h2 className="mt-[13px] font-[600px] text-[16px] leading-[150%] text-[#d51243]">
                        ${price}
                    </h2>
                </div>
            </div>
        </Link>
    );
};
