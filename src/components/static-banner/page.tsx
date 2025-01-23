import banner from "@/assets/staticBanner.png";
import bannerTwo from "@/assets/bannerTwo.png";
import fetchWrapper from "@/config/fetchwrapper";
import { TrendingCard } from "../trending/page";
import Uploadicon from "@/assets/icons/uploadicon";
import Newsicon from "@/assets/icons/newsicon";
import Timeicon from "@/assets/icons/timeicon";
import customer from "@/assets/customer.png";

export interface CardType {
    title?: string | undefined;
    image: string | undefined;
    id: number | string;
    key?: number | string;
    price?: number | string;
}

export interface CardDataType {
    results?: CardType[];
}

const StaticBanner = async () => {
    const cardData = await fetchWrapper<CardDataType>("/product");
    return (
        <div style={{ padding: "10px", paddingTop: "90px" }}>
            <img
                src={banner.src}
                alt="Static Banner"
                style={{ maxWidth: "100%", height: "auto" }}
            />

            <img
                style={{ maxWidth: "100%", height: "auto", paddingTop: "50px" }}
                src={bannerTwo.src}
                alt="bannerTwo"
            />

            <div className=" flex flex-col w-[270px]">
                <ul className="border-[1px] border-[#e4e5ee] rounded-[7px] mt-[50px]">
                    <li className="border-b-[1px] border-[#e4e5ee] pt-[23px] pr-[20px] pb-[23px] pl-[20px] items-center  flex gap-[20px]">
                        <Uploadicon />
                        <p className="font-[400px] text-[12px] leading-[150%] text-[#202435]">
                            Download the Bacola App to your Phone.
                        </p>
                    </li>
                    <li className="border-b-[1px] border-[#e4e5ee] pt-[23px] pr-[20px] pb-[23px] pl-[20px] items-center  flex gap-[20px]">
                        <Newsicon />
                        <p className="font-[400px] text-[12px] leading-[150%] text-[#202435]">
                            Order now so you dont miss the opportunities.
                        </p>
                    </li>
                    <li className="border-b-[1px] border-[#e4e5ee] pt-[23px] pr-[20px] pb-[23px] pl-[20px] items-center  flex gap-[20px]">
                        <Timeicon />
                        <p className="font-[400px] text-[12px] leading-[150%] text-[#202435]">
                            Your order will arrive at your door in 15 minutes.
                        </p>
                    </li>
                </ul>
                <h2 className="mt-[50px] mb-[20px] font-[600px] text-[15px] leading-[120%] text-[#202435] uppercase">
                    Trending Products
                </h2>
                <ul className="mb-[50px] border-[1px] border-[#e4e5ee] rounded-[7px] p-[15px]">
                    {cardData?.results?.slice(0, 5).map((item) => (
                        <li className="mb-[30px]" key={item.id}>
                            <TrendingCard {...item} />
                        </li>
                    ))}
                </ul>
                <div>
                    <h2 className="font-[600px] text-[15px] leading-[120%] text-[#202435] mb-[20px] uppercase">
                        Customer Comment
                    </h2>
                    <div className="bg-[#fffbec] p-[26px] rounded-[7px]">
                        <h3 className="font-[600px] text-[14px] leading-[120%] text-[#202435] mb-[9px]">
                            The Best Marketplace
                        </h3>
                        <p className="font-[400px] text-[13px] leading-[150%] text-[#71778e] mb-[38px]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut.
                        </p>
                        <div className="flex items-center gap-[15px]">
                            <img src={customer.src} alt="#" />
                            <div>
                                <p className="font-[600px] text-[14px] leading-[120%] text-[#202435]">
                                    Tina Mcdonnell
                                </p>
                                <p className="font-[400px] text-[12px] leading-[150%] text-[#71778e]">
                                    Sales Manager
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StaticBanner;
