import React from "react";
import { useState } from "react";
import { MdFavorite } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";

function IsFavouriteButton() {
  const [isFavourite, setIsFavourite] = useState(false);

  const handleClick = () => {
    setIsFavourite(!isFavourite);
  };

  return (
    <button onClick={handleClick}>
      {isFavourite ? (
        <MdFavorite size="25px"></MdFavorite>
      ) : (
        <MdFavoriteBorder size="25px"></MdFavoriteBorder>
      )}
    </button>
  );
}

export default IsFavouriteButton;
