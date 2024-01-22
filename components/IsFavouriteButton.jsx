import React from "react";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import styles from "../styles/Home.module.css";

function IsFavouriteButton() {
  const [isFavourite, setIsFavourite] = useState(false);

  const toggleFavourite = () => {
    setIsFavourite(!isFavourite);
  };

  return (
    <button onClick={toggleFavourite} className={styles.isFavouriteButton}>
      {isFavourite ? <FaStar /> : <FaRegStar />}
    </button>
  );
}

export default IsFavouriteButton;
