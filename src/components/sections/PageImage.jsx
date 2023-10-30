import axios from "axios";
import React, { useEffect, useState, useRef } from "react";

function PageImage() {
  const [getImage, setImage] = useState([]);
  const [visibleData, setVisibleData] = useState(6);
  const itemsPerPage = 3;
  const loader = useRef(null);

  async function getListImage() {
    try {
      const res = await axios.get(
        "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="
      );
      setImage(res.data.drinks);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  }

  useEffect(() => {
    getListImage();
  }, []);

  useEffect(() => {
    const loadMoreData = () => {
      if (
        loader.current &&
        loader.current.getBoundingClientRect().bottom <= window.innerHeight
      ) {
        setVisibleData((prevVisibleData) => prevVisibleData + itemsPerPage);
      }
    };

    window.addEventListener("scroll", loadMoreData);
    return () => {
      window.removeEventListener("scroll", loadMoreData);
    };
  }, []);

  const displayData = getImage.slice(18, visibleData);

  return (
    <div className="flex justify-center w-full">
      {displayData.map((image) => (
        <div className="h-[14rem]" key={image.idDrink}>
          <img
            className="object-cover h-full w-full"
            src={image.strDrinkThumb}
            alt={image.strDrink}
          />
        </div>
      ))}
      <div ref={loader}></div>
    </div>
  );
}

export default PageImage;
