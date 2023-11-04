// import React, { useRef, useState } from "react";
// import { useDispatch } from "react-redux";
// import styles from "./ImageDraggable.module.css";
// import Image from "next/image";
// import { reorderImages } from "../../../Store/Slice/imageSlice";
// const ImageDraggable = ({ el, i, setSelectedIndex }) => {
//   const dispatch = useDispatch();
//   const imageRef = useRef(null);
//   const [isDragging, setIsDragging] = useState(false);
//   const handleDragStart = (e) => {
//     setIsDragging(true);
//   };

//   const handleDragEnd = (e) => {
//     setIsDragging(false);
//   };

//   const handleDragOver = (e) => {
//     e.preventDefault();
//   };

//   const handleDrop = (e, index) => {
//     e.preventDefault();
//     dispatch(reorderImages({ draggedIndex: i, droppedIndex: index }));
//   };

//   return (
//     <div
//       className={styles.draggableContainer}
//       draggable
//       onDragStart={handleDragStart}
//       onDragEnd={handleDragEnd}
//       onDragOver={handleDragOver}
//       onDrop={(e) => handleDrop(e, i)}
//     >
//       {el.id == 1 ? (
//         <Image
//           width={400}
//           height={400}
//           ref={imageRef}
//           src={el.img}
//           alt="Draggable"
//           className={`${styles.draggableImage} ${
//             isDragging ? styles.dragging : ""
//           }`}
//         />
//       ) : (
//         <Image
//           width={200}
//           height={200}
//           ref={imageRef}
//           src={el.img}
//           alt="Draggable"
//           className={`${styles.draggableImage} ${
//             isDragging ? styles.dragging : ""
//           }`}
//         />
//       )}
//     </div>
//   );
// };

// export default ImageDraggable;
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
          width={400} // specify the width and height as per your requirements
          height={400}
          className={styles.draggableImage}
        />
      ) : (
        <Image
          ref={imageRef}
          src={el.img}
          alt="Draggable"
          width={200} // specify the width and height as per your requirements
          height={200}
          className={styles.draggableImage}
        />
      )}
    </div>
  );
};

export default ImageDraggable;
