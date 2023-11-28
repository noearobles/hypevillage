import React, { useState } from "react";
import Link from "next/link";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"; // Import arrows from react-icons
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
  const [currentIndex, setCurrentIndex] = useState(0);

  const galleryImages = [
    "footwear.jpg",
    "hvTee.jpg",
    "dunks.jpg",
    "hvJerseys.jpg",
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="hero-banner-container">
      <div className="marquee">
        {" "}
        <div className="track_02">
          <img src={urlFor(image)} alt="banner" className="hero-banner-image" />
        </div>
        <div className="track_01">
          <div className="desc">
            <h2>Welcome to</h2>
            <h3>{midText}</h3>
            <h1>
              {largeText1}
              {largeText2}
            </h1>
            <p>{desc}</p>{" "}
            <Link href={`/footwear`}>
              <button type="button">{buttonText}</button>
            </Link>
          </div>
        </div>{" "}
        <div className="track_03">
          <div className="gallery">
            {" "}
            <button type="button" onClick={handlePrev}>
              <FiChevronLeft />
            </button>
            <img
              className="galleryImage"
              src={galleryImages[currentIndex]}
              alt={`Gallery Image ${currentIndex + 1}`}
            />{" "}
            <button type="button" onClick={handleNext}>
              <FiChevronRight />
            </button>
          </div>
          {/* <div className="navigation-arrows">
        
        
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
