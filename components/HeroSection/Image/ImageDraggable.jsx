import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import Image from "next/image";
import styles from "./ImageDraggable.module.css";
import { reorderImages } from "../../../Store/Slice/imageSlice";

const ImageDraggable = ({ el, i }) => {
  const dispatch = useDispatch();
  const imageRef = useRef(null);

  const handleDragStart = (e) => {
    e.dataTransfer.setData("index", i);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const draggedIndex = e.dataTransfer.getData("index");
    if (draggedIndex !== i) {
      dispatch(
        reorderImages({ draggedIndex: parseInt(draggedIndex), droppedIndex: i })
      );
    }
  };

  return (
    <div
      className={styles.draggableContainer}
      draggable
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      {i == 0 ? (
        <Image
          ref={imageRef}
          src={el.img}
          alt="Draggable"
          width={400}
          height={400}
          className={styles.draggableImage}
        />
      ) : (
        <Image
          ref={imageRef}
          src={el.img}
          alt="Draggable"
          width={200}
          height={200}
          className={styles.draggableImage}
        />
      )}
    </div>
  );
};

export default ImageDraggable;
