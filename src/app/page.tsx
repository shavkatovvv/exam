import Banner from "@/components/banner/page";
import StaticBanner from "@/components/static-banner/page";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import fetchWrapper from "@/config/fetchwrapper";

export interface BannerItemType {
    title?: string;
    description: string;
    image: string;
    id: number;
}

export interface BannerDataType {
    results?: BannerItemType[];
}

export default async function Home() {
    const data = await fetchWrapper<BannerDataType>("/banner");
    return (
        <div className="container py-[50px]">
            <div className="max-w-[1200px] mx-auto w-full flex justify-end">
                <Carousel
                    opts={{ loop: true }}
                    className="w-full  max-w-[900px]  "
                >
                    <CarouselContent className=" w-full">
                        {data?.results?.map((item) => (
                            <CarouselItem key={item.id}>
                                <Banner image={item.image} />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>
            <StaticBanner />
        </div>
    );
}
