import Banner from "@/components/banner/page";
import Card from "@/components/card/page";
import StaticBanner from "@/components/static-banner/page";
import hBanner from "@/assets/healthBanner.png";
import product from "@/assets/product8.png";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import fetchWrapper from "@/config/fetchwrapper";
import Hproducts from "@/components/hotProducts/page";
import Hproduct from "@/components/hotProducts/page";

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
}

export interface CardDataType {
    results?: CardType[];
}

export interface BannerDataType {
    results?: BannerItemType[];
}

export default async function Home() {
    const data = await fetchWrapper<BannerDataType>("/banner");
    const cardData = await fetchWrapper<CardDataType>("/product");

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
                                            <Card key={item.id} {...item} />
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
                    </div>
                </div>
            </div>
        </div>
    );
}
