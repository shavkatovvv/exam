import * as React from "react";

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

export function SelectDemo() {
    return (
        <Select>
            <SelectTrigger className="rounded-[50px] py-[20px] px-[48px] bg-[#2bbef9]">
                <SelectValue
                    className="font-semibold text-[15px] text-[#fff] leading-[150%]"
                    placeholder="ALL CATEGORIES"
                />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectItem value="Fruits & Vegetables">
                        Fruits & Vegetables
                    </SelectItem>
                    <SelectItem value=" Meats & Seafood">
                        Meats & Seafood
                    </SelectItem>
                    <SelectItem value=" Breakfast & Dairy">
                        Breakfast & Dairy
                    </SelectItem>
                    <SelectItem value=" Beverages"> Beverages</SelectItem>
                    <SelectItem value=" Frozen Foods"> Frozen Foods</SelectItem>
                    <SelectItem value=" Biscuits & Snacks">
                        {" "}
                        Biscuits & Snacks
                    </SelectItem>
                    <SelectItem value=" Grocery & Staples">
                        {" "}
                        Grocery & Staples
                    </SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    );
}
