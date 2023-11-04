import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addSelectedImage,
  removeSelectedImage,
  deleteImage,
  sortImages,
} from "../../Store/Slice/imageSlice";
import ImageDraggable from "./Image/ImageDraggable";
import { Button } from "../componentsIndex";
import Style from "./HeroSection.module.css";

const HeroSection = () => {
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  // const { ImagesArray, selectedImages } = useSelector((state) => state.images);
  const { ImagesArray, selectedImages, featuredImageId } = useSelector(
    (state) => state.images
  );
  const [selectedSortOption, setSelectedSortOption] = useState("");
  const handleCheckboxChange = (id) => {
    if (selectedImages.includes(id)) {
      dispatch(removeSelectedImage(id));
    } else {
      dispatch(addSelectedImage(id));
    }
  };

  const handleDeleteClick = () => {
    selectedImages.forEach((id) => {
      dispatch(deleteImage(id));
    });
  };
  const handleSortChange = (option) => {
    setSelectedSortOption(option);
    if (option === "asc" || option === "desc") {
      dispatch(sortImages(option));
    }
  };
  return (
    <div className={Style.heroSection}>
      <div className={Style.heroSection_box}>
        <div className={Style.heroSection_box_left}>
          <div className={Style.sortDropdown}>
            <select
              value={selectedSortOption}
              onChange={(e) => handleSortChange(e.target.value)}
            >
              <option value="">Select Sorting Option</option>
              <option value="asc">Sort Ascending</option>
              <option value="desc">Sort Descending</option>
            </select>
          </div>
          <Button btnName={"Delete"} handleClick={handleDeleteClick} />
          {ImagesArray.map((image, index) => (
            <div
              key={image.id}
              className={`gallery-image ${
                image.id === featuredImageId ? Style.featuredImage : ""
              }`}
            >
              <input
                type="checkbox"
                checked={selectedImages.includes(image.id)}
                onChange={() => handleCheckboxChange(image.id)}
              />
              <ImageDraggable
                key={image.id}
                el={image}
                i={index}
                setSelectedIndex={handleCheckboxChange}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
