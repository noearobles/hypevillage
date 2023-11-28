import React from "react";
import Link from "next/link";

import { urlFor } from "../lib/client";

const HeroBanner = ({
  heroBanner: {
    discount,
    largeText1,
    largeText2,
    saleTime,
    smallText,
    midText,
    desc,
    product,
    buttonText,
    image,
  },
}) => {
  return (
    <div className="hero-banner-container">
      <div className="marquee">
        {" "}
        <div className="track_02">
          {" "}
          <img src={urlFor(image)} alt="banner" className="hero-banner-image" />
        </div>
        <div className="track_01">
          <div className="desc">
            <h2>Welcome to</h2>
            {/* <p className="beats-solo">{smallText}</p> */}
            <h3>{midText}</h3>
            <h1>
              {largeText1}
              {largeText2}
            </h1>
            {/* <h5>Description</h5> */}
            <p>{desc}</p>{" "}
            <Link href={`/footwear`}>
              <button type="button">{buttonText}</button>
            </Link>
          </div>
        </div>{" "}
      </div>
    </div>
  );
};

export default HeroBanner;
