import { Button } from "@/components/ui/button";
import fetchWrapper from "@/config/fetchwrapper";
import { CardType } from "@/app/page";
import Deliveryicon from "@/assets/icons/deliveryicon";
import Dollaricon from "@/assets/icons/dollaricon";
import Likeicon from "@/assets/icons/likeicon";
import Cityicon from "@/assets/icons/cityicon";

async function ProductData(id: string): Promise<CardType> {
    const detail = await fetchWrapper<CardType>(`/product/${id}`, {
        next: { tags: ["products"] },
    });
    return detail;
}

const Detail = async ({ params }: { params: { id: string } }) => {
    const productDetails = await ProductData(params.id);

    return (
        <div className="bg-[#F7F8FD] py-[50px]">
            <div className="container">
                <div className="bg-[#fff] rounded-sm py-[40px] px-[40px]">
                    <h1 className="text-[24px] font-bold mb-[20px]">
                        {productDetails.title}
                    </h1>
                    <div className="flex justify-between items-start">
                        <div>
                            <img
                                width={436}
                                height={392}
                                src={productDetails.image}
                                alt={productDetails.title}
                                className="mb-[20px] object-cover"
                            />
                        </div>
                        <div className="w-[308px]">
                            <p className="text-[26px] font-semibold text-[#D51243] mb-[20px]">
                                ${productDetails.price}
                            </p>
                            <p className="mb-[20px]">
                                Vivamus adipiscing nisl ut dolor dignissim
                                semper. Nulla luctus malesuada tincidunt. Class
                                aptent taciti sociosqu ad litora torquent
                            </p>
                            <div className="mb-[30px]">
                                <div className="flex items-center gap-4">
                                    <div className="flex items-center">
                                        <Button className="w-[44px] h-[44px] bg-[#EDEEF5] rounded-[100%] text-lg font-semibold text-[#202435] hover:bg-[#FFCD01]">
                                            −
                                        </Button>
                                        <span className="px-4 py-1 text-lg">
                                            1
                                        </span>
                                        <Button className="w-[44px] h-[44px] bg-[#EDEEF5] rounded-[100%] text-lg font-semibold text-[#202435] hover:bg-[#FFCD01]">
                                            +
                                        </Button>
                                    </div>
                                </div>
                            </div>
                            <Button
                                className="text-[#71778E] rounded-[30px]"
                                variant={"outline"}
                            >
                                {" "}
                                <Likeicon /> ADD TO WISHLIST
                            </Button>
                        </div>
                        <div className="w-[260px] p-[30px] rounded bg-[#F7F8FD]">
                            <div className="flex items-center gap-4 mb-[30px]">
                                <Deliveryicon />
                                <p className="text-[12px]">
                                    Free Shipping apply to all orders over $100
                                </p>
                            </div>
                            <div className="flex items-center gap-4 mb-[30px]">
                                <Dollaricon />
                                <p className="text-[12px]">
                                    1 Day Returns if you change your mind
                                </p>
                            </div>
                            <div className="flex items-center gap-4 ">
                                <Cityicon />
                                <p className="text-[12px]">
                                    Guranteed 100% Organic from natural farmas
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Detail;
