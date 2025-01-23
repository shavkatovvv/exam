import React from "react";
import SecureIcon from "../secureIcon/sicon";
import { Input } from "../ui/input";
import { SelectDemo } from "../select/page";
import Link from "next/link";

const Header = () => {
    return (
        <header>
            <div className="py-[9px] bg-[#233A95] text-center">
                <h2 className="text-[12px] text-white leading-[150%] font-normal">
                    Due to the <span className="font-bold">COVID 19</span>{" "}
                    epidemic, orders may be processed with a slight delay
                </h2>
            </div>
            <div className="py-[10px]  border border-b-[1px solid #e3e4e6]">
                <div className="container flex justify-between items-center">
                    <div>
                        <ul className="flex items-center gap-[15px]">
                            <li>
                                <p className="font-normal text-[12px] text-[#3e445a] leading-[150%]">
                                    About Us
                                </p>
                            </li>
                            <li>
                                <p className="font-normal text-[12px] text-[#3e445a] leading-[150%]">
                                    My account
                                </p>
                            </li>
                            <li>
                                <p className="font-normal text-[12px] text-[#3e445a] leading-[150%]">
                                    Wishlist
                                </p>
                            </li>
                            <li>
                                <p className="font-normal text-[12px] text-[#3e445a] leading-[150%]">
                                    Order Tracking
                                </p>
                            </li>
                        </ul>
                    </div>

                    <div className="flex items-center gap-[20px]">
                        <div className="flex items-center gap-[5px]">
                            <SecureIcon />
                            <p className="text-[12px] font-normal leading-[150%] text-[#3e445a] ">
                                100% Secure delivery without contacting the
                                courier
                            </p>
                        </div>
                        <div>
                            <p className="text-[12px] font-normal leading-[150%] text-[#3e445a]">
                                Need help? Call Us:
                                <span className="font-bold text-[#2bbef9]">
                                    + 0020 500
                                </span>
                            </p>
                        </div>

                        <div className="flex items-center gap-[18px]">
                            <select>
                                <option value="eng">English</option>
                                <option value="ru">RU</option>
                            </select>
                            <select>
                                <option value="usd">USD</option>
                                <option value="rub">Rub</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-[30px]  border border-b-[1px solid #e3e4e6]">
                <div className="container flex items-center justify-between">
                    <div>
                        <img
                            className="w-[163px] h-[43px]"
                            src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/bacola-logo.png"
                            alt="logo"
                        />
                        <p className="text-[11px] leading-[150%] font-normal text-[#3e445a] mt-[5px]">
                            Online Grocery Shopping Center
                        </p>
                    </div>
                    <div className="border border-[1px solid #d9d9e9] rounded-[7px] shadow-[0_2px_4px_0_rgba(0,0,0,0.05)] py-[11px] pr-[54px] pl-[19px]">
                        <p className="text-[10px] font-normal leading-[150%] text-[#3e445a] mb-[5px]">
                            Your Location
                        </p>

                        <p className="text-[13px] font-semibold leading-[150%] text-[#233a95]">
                            Select a Location
                        </p>
                    </div>
                    <div>
                        <Input
                            placeholder="Search for products..."
                            type="search"
                        />
                    </div>
                    <div className="flex items-center gap-[15px]">
                        <div className="border border-[1px solid #e2e4ec] rounded-[50px] w-[42px] h-[42px] flex items-center justify-center">
                            <img
                                className="w-[18px] h-[18px]"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNzXYh-X4wxX1jfbPywa8HWoNGDnx1Tlo0-g&s"
                                alt="user"
                            />
                        </div>

                        <Link href={"/cart"}>
                            <div className="border border-[1px solid #e2e4ec] rounded-[50px] w-[42px] h-[42px] flex items-center justify-center bg-[#fff1ee]">
                                <img
                                    className="w-[18px] h-[18px]"
                                    src="https://i.pinimg.com/474x/a0/52/10/a052107cf5d895e6193ed51c3efa11aa.jpg"
                                    alt="bag"
                                />
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="container flex items-center justify-between mt-[20px]">
                    <div>
                        <SelectDemo />
                    </div>

                    <div>
                        <ul className="flex items-center gap-[40px]">
                            <li>
                                <p className="text-[15px] font-semibold leading-[100%] text-[#2bbef9] uppercase">
                                    Home
                                </p>
                            </li>
                            <li>
                                <p className="text-[15px] font-semibold leading-[100%] text-[#3e445a] uppercase">
                                    Shop
                                </p>
                            </li>
                            <li>
                                <p className="text-[15px] font-semibold leading-[100%] text-[#3e445a] uppercase">
                                    {" "}
                                    Meats & Seafood
                                </p>
                            </li>
                            <li>
                                <p className="text-[15px] font-semibold leading-[100%] text-[#3e445a] uppercase">
                                    {" "}
                                    Bakery
                                </p>
                            </li>
                            <li>
                                <p className="text-[15px] font-semibold leading-[100%] text-[#3e445a] uppercase">
                                    {" "}
                                    Beverages
                                </p>
                            </li>
                            <li>
                                <p className="text-[15px] font-semibold leading-[100%] text-[#3e445a] uppercase">
                                    Blog
                                </p>
                            </li>
                            <li>
                                <p className="text-[15px] font-semibold leading-[100%] text-[#3e445a] uppercase">
                                    Contact
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
