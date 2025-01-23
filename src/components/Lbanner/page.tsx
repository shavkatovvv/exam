import { Lbannertype } from "@/app/page";
import React from "react";

const Lbanner = ({ image, title, isLarge }: Lbannertype) => {
    return (
        <div
            className={`border  p-4 shadow-sm hover:shadow-md transition-shadow ${
                isLarge
                    ? "col-span-3 row-span-2 flex flex-col items-center justify-center"
                    : "flex flex-col items-center justify-center"
            }`}
        >
            <img
                src={image}
                alt={title}
                className={`mb-2 object-contain ${
                    isLarge ? "w-48 h-48" : "w-24 h-24"
                }`}
            />
            <h3
                className={`text-center text-gray-800 ${
                    isLarge ? "text-xl font-bold" : "text-sm font-semibold"
                }`}
            >
                {title}
            </h3>
        </div>
    );
};

export default Lbanner;
