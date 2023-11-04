// imageSlice.js
import { createSlice } from "@reduxjs/toolkit";

import images from "../../public/images";

const imageSlice = createSlice({
  name: "images",
  initialState: {
    ImagesArray: [
      { id: 1, img: images.image1 },
      { id: 2, img: images.image2 },
      { id: 3, img: images.image3 },
      { id: 4, img: images.image4 },
      { id: 5, img: images.image5 },
      { id: 6, img: images.image6 },
      { id: 7, img: images.image7 },
      { id: 8, img: images.image8 },
      { id: 9, img: images.image9 },
      { id: 10, img: images.image10 },
      { id: 11, img: images.image11 },
    ],
    selectedImages: [],
  },
  reducers: {
    addSelectedImage: (state, action) => {
      state.selectedImages.push(action.payload);
    },
    removeSelectedImage: (state, action) => {
      state.selectedImages = state.selectedImages.filter(
        (id) => id !== action.payload
      );
    },
    deleteImage: (state, action) => {
      state.ImagesArray = state.ImagesArray.filter(
        (image) => image.id !== action.payload
      );
      state.selectedImages = state.selectedImages.filter(
        (id) => id !== action.payload
      );
    },
    sortImages: (state, action) => {
      if (action.payload === "asc") {
        state.ImagesArray.sort((a, b) => a.id - b.id);
      } else {
        state.ImagesArray.sort((a, b) => b.id - a.id);
      }
    },
    reorderImages: (state, action) => {
      const { draggedIndex, droppedIndex } = action.payload;
      const draggedImage = state.ImagesArray[draggedIndex];
      state.ImagesArray.splice(draggedIndex, 1);
      state.ImagesArray.splice(droppedIndex, 0, draggedImage);
    },
  },
});

export const {
  addSelectedImage,
  removeSelectedImage,
  deleteImage,
  sortImages,
  reorderImages,
} = imageSlice.actions;

export default imageSlice.reducer;
