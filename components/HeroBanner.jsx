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
        <div className="track_01">
          <h2>Welcome to</h2>
          {/* <p className="beats-solo">{smallText}</p> */}
          <h3>{midText}</h3>
          <h1>{largeText1}</h1>
          <br />
          <h1>{largeText2}</h1>
        </div>{" "}
        <div>
          {" "}
          <img
            src={urlFor(image)}
            alt="banner"
            className="hero-banner-image track_02"
          />
        </div>
      </div>

      <div>
        <div className="desc">
          {/* <h5>Description</h5> */}
          <p>{desc}</p>{" "}
          <Link href={`/footwear`}>
            <button type="button">{buttonText}</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
