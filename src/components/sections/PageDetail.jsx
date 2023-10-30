import axios from "axios";
import React, { useEffect, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { useParams } from "react-router-dom";

function PageDetail() {
  const { id } = useParams();
  const getId = parseInt(id);
  const [getDetail, setDetail] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const ingredients = [];

  async function fetchDetailMeals() {
    const response = await axios.get(
      `${import.meta.env.VITE_BASE_URL}lookup.php?i=${getId}`
    );
    setDetail(response.data.meals);
    setIsLoading(false);
  }

  useEffect(() => {
    fetchDetailMeals();
  }, [id]);

  function readMore(strInstructions) {
    const maxLength = 520;
    if (strInstructions.length > maxLength) {
      return (
        <div>
          {strInstructions.slice(0, maxLength)}...
          <a
            href="#"
            className="text-yellows"
            onClick={() => setFullInstructions(strInstructions)}
          >
            Read More
          </a>
        </div>
      );
    }
    return strInstructions;
  }

  const [fullInstructions, setFullInstructions] = useState(false);

  if (!isLoading) {
    for (let i = 1; i <= 20; i++) {
      const ingredientsKey = `strIngredient${i}`;
      const measureKey = `strMeasure${i}`;
      if (getDetail[0][ingredientsKey] && getDetail[0][measureKey]) {
        ingredients.push(
          `${getDetail[0][ingredientsKey]} ${getDetail[0][measureKey]}`
        );
      } else if (getDetail[0][ingredientsKey]) {
        ingredients.push(getDetail[0][ingredientsKey]);
      }
    }
  }

  if (isLoading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <ThreeDots
          height="80"
          width="80"
          radius="9"
          color="#FFD369"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />{" "}
      </div>
    );
  }
  console.log(ingredients);

  return (
    <div>
      {getDetail.map((detail) => (
        <div key={detail.idMeal} className="flex p-10 gap-10">
          <div className="w-1/2 flex flex-col gap-3 items-center">
            <img
              className="object-cover w-[42rem] h-[35rem]"
              src={detail.strMealThumb}
              alt={detail.strMeal}
            />
            <div className="flex">
              <h2 className="text-white font-semibold text-sm text-center p-1">
                {detail.strTags
                  ? detail.strTags
                      .split(",")
                      .map((tag) => `#${tag.trim()}`)
                      .join(", ")
                  : "No tags available"}
              </h2>
            </div>
            <a
              className="text-white bg-browns p-2 rounded-lg "
              href={detail.strSource}
              target="_blank"
            >
              Source : {detail.strSource ? detail.strSource : "No Source"}
            </a>
          </div>
          <div className="w-1/2">
            <h2 className="font-semibold text-2xl text-whites mb-5">
              {detail.strMeal} |{" "}
              <span className="text-yellows">{detail.strArea} | </span>
              <span className="text-darkYellows">{detail.strCategory} | </span>
            </h2>
            <h2 className="font-semibold text-2xl text-whites mb-5">
              Ingredients
            </h2>
            <ul className="list-disc ms-3 mb-5">
              {ingredients.map((ingredients, index) => (
                <li className="text-white text-base" key={index}>
                  {ingredients}
                </li>
              ))}
            </ul>
            <h2 className="font-semibold text-2xl text-whites mb-5">
              Cooking tutorial
            </h2>
            <pre className="text-white whitespace-pre-wrap mt-5 text-base leading-normal">
              {fullInstructions
                ? detail.strInstructions
                : readMore(detail.strInstructions)}
            </pre>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PageDetail;
