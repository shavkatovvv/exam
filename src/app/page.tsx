import Banner from "@/components/banner/page";
import Card from "@/components/card/page";
import StaticBanner from "@/components/static-banner/page";
import hBanner from "@/assets/healthBanner.png";
import product from "@/assets/product8.png";
import lbanner1 from "@/assets/lbanner1.png";
import lbanner2 from "@/assets/lbanner2.png";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import fetchWrapper from "@/config/fetchwrapper";

import Hproduct from "@/components/hotProducts/page";

import Lbanner from "@/components/Lbanner/page";

export interface BannerItemType {
    title?: string;
    description: string;
    image: string;
    id: number;
}

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

export interface Lbannertype {
    image: string | undefined;
    title?: string | undefined;
    id?: string | undefined;
    isLarge: boolean;
}

export interface LbannerDatatype {
    results?: Lbannertype[];
}

export interface BannerDataType {
    results?: BannerItemType[];
}

export default async function Home() {
    const data = await fetchWrapper<BannerDataType>("/banner");
    const cardData = await fetchWrapper<CardDataType>("/product");
    const LbannerData = await fetchWrapper<LbannerDatatype>("/category");

    return (
        <div className="container py-[50px]">
            <div className="max-w-[1200px] mx-auto w-full flex justify-end">
                <Carousel
                    opts={{ loop: true }}
                    className="w-full max-w-[900px]"
                >
                    <CarouselContent className="w-full">
                        {data?.results?.map((item) => (
                            <CarouselItem key={item.id}>
                                <Banner image={item.image} />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>

            <div className="mt-[50px]">
                <div className="flex justify-between items-start">
                    <StaticBanner />

                    <div className="flex flex-col w-full ml-[30px] mt-[25px]">
                        <div className="mb-[20px]">
                            <h2 className="text-[20px] font-semibold leading-[120%] uppercase text-[#202435] mb-[5px]">
                                Best Sellers
                            </h2>
                            <p className="text-[12px] text-[#9b9bb4] leading-[150%] font-normal">
                                Do not miss the current offers until the end of
                                March.
                            </p>
                        </div>

                        <div className="flex justify-between items-center">
                            <Carousel
                                opts={{ align: "start", loop: true }}
                                className="w-full max-w-[890px] m-0  gap-0 p-0 border"
                            >
                                <CarouselContent>
                                    {cardData?.results?.map((item) => (
                                        <CarouselItem
                                            key={item.id}
                                            className="basis-1/4 m-0  gap-0 p-0"
                                        >
                                            <Card
                                                key={item.id}
                                                image={item.image}
                                                title={item.title}
                                                price={item.price}
                                                id={item.id}
                                            />
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                                <CarouselPrevious />
                                <CarouselNext />
                            </Carousel>
                        </div>
                        <div className="mt-[50px]">
                            <img src={hBanner.src} alt="" />
                        </div>

                        <div className="container mx-auto py-8">
                            <Hproduct
                                title="Chobani Complete Vanilla Greek Yogurt"
                                image={product}
                                price={4.49}
                                originalPrice={5.49}
                                discount={19}
                                weight="1 kg"
                                inStock={true}
                                offerEndsIn={360000}
                            />
                        </div>
                        <div className="mt-[30px]">
                            <h2 className="font-semibold text-[20px] leading-[120%] text-[#202435] uppercase mb-[5px]">
                                NEW PRODUCTS
                            </h2>
                            <p className="font-normal text-[12px] leading-[150%] text-[#9b9bb4] mb-[30px]">
                                New products with updated stocks.
                            </p>
                            <div className="grid grid-cols-4 ">
                                {cardData?.results?.map((item) => (
                                    <Card key={item.id} {...item} />
                                ))}
                            </div>
                        </div>

                        <div className="flex items-center gap-[30px] mt-[30px]">
                            <img src={lbanner1.src} alt="lbanner1" />
                            <img src={lbanner2.src} alt="lbanner2" />
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-7  mt-[25px]">
                    {LbannerData?.results?.map((item, index) => {
                        const isLarge = index === 0;
                        return (
                            <Lbanner
                                key={item.id}
                                isLarge={isLarge}
                                image={item.image}
                                title={item.title}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
