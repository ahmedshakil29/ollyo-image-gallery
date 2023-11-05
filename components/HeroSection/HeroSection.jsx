//Module Name: Image Gallery
//developed by:Shakil Ahmed
//developed for:Ollyo
//All right reserved to Shakil Ahmed

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addSelectedImage,
  removeSelectedImage,
  deleteImage,
  sortImages,
} from "../../Store/Slice/imageSlice";
import ImageDraggable from "./ImageDrag/ImageDrag";
import { Button } from "../componentsIndex";
import Style from "./HeroSection.module.css";

const HeroSection = () => {
  const dispatch = useDispatch();
  const { ImagesArray, selectedImages, featuredImageId } = useSelector(
    (state) => state.images
  );
  const [selectedSortOption, setSelectedSortOption] = useState("");
  //check uncheck selected images
  const handleCheckboxChange = (id) => {
    if (selectedImages.includes(id)) {
      dispatch(removeSelectedImage(id));
    } else {
      dispatch(addSelectedImage(id));
    }
  };
  //deleted selected images
  const handleDeleteClick = () => {
    selectedImages.forEach((id) => {
      dispatch(deleteImage(id));
    });
  };
  //sorting selected images
  const handleSortChange = (option) => {
    setSelectedSortOption(option);
    if (option === "asc" || option === "desc") {
      dispatch(sortImages(option));
    }
  };

  const selectedCount = selectedImages.length;
  const message = selectedCount > 0 ? ` selected ${selectedCount} images.` : "";

  return (
    <div className={Style.heroSection}>
      <div className={Style.heroSection_header}>
        <div className={Style.heroSection_header_sortDropdown}>
          <select
            value={selectedSortOption}
            onChange={(e) => handleSortChange(e.target.value)}
          >
            <option value="">Select Sorting Option</option>
            <option value="asc">Sort Ascending</option>
            <option value="desc">Sort Descending</option>
          </select>
        </div>
        <div className={Style.heroSection_header_message}>{message}</div>
        {selectedCount > 0 && (
          <Button btnName={"Delete"} handleClick={handleDeleteClick} />
        )}
      </div>
      <div className={Style.heroSection_box}>
        <div className={Style.heroSection_box_item}>
          {ImagesArray.map((image, index) => (
            <div key={image.id} className={Style.heroSection_box_item_box}>
              <input
                type="checkbox"
                className={Style.heroSection_box_item_box_checkboxOverlay}
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
