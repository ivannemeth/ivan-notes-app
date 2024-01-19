import React from "react";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import styles from "../styles/Home.module.css";

function IsFavouriteButton() {
  const [isFavourite, setIsFavourite] = useState(false);

  const handleClick = () => {
    setIsFavourite(!isFavourite);
  };

  return (
    <button onClick={handleClick} className={styles.IsFavouriteButton}>
      {isFavourite ? <FaStar /> : <FaRegStar />}
    </button>
  );
}

export default IsFavouriteButton;
