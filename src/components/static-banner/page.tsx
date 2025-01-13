import banner from "@/assets/staticBanner.png";
import bannerTwo from "@/assets/bannerTwo.png";

const StaticBanner = () => {
    return (
        <div
            style={{ textAlign: "center", padding: "10px", paddingTop: "90px" }}
        >
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
        </div>
    );
};

export default StaticBanner;
