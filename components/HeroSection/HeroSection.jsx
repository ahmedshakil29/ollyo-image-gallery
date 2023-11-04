import React from "react";
import Image from "next/image";

//INTERNAL IMPORT
import Style from "./HeroSection.module.css";
import { Button } from "../componentsIndex";
import images from "../../public/images";

const HeroSection = () => {
  const ImagesArray = [
    images.image1,
    images.image2,
    images.image3,
    images.image4,
    images.image5,
    images.image6,
    images.image7,
    images.image8,
    images.image9,
    images.image10,
    images.image11,
  ];
  return (
    <div className={Style.heroSection}>
      <div className={Style.heroSection_box}>
        <div className={Style.heroSection_box_left}>
          {ImagesArray.map((imageUrl, index) => (
            <Image
              key={index}
              src={imageUrl}
              alt={`Image ${index}`}
              className="gallery-image"
              width={300}
              height={200}
            />
          ))}

          {/* {ImagesArray.map((image, index) => (
            <Image
              key={index}
              src={`/images/${image}`}
              alt={`Image ${index}`}
              width={300}
              height={200}
            />
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
