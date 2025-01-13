import React from "react";

const Banner = ({ image }: { image: string }) => {
    return (
        <div>
            <img src={image} alt="" />
        </div>
    );
};

export default Banner;
