import axios from "axios";
import { Link } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";

function PageMenu() {
  const [mealsData, setMealsData] = useState([]);
  const [showMore, setShowMore] = useState(false);
  const [loading, setLoading] = useState(true);

  async function fetchListOfMeals() {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/search.php?s=`
      );
      setMealsData(response.data.meals);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching meals:", error);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchListOfMeals();
  }, []);

  function truncate(str) {
    return str.length > 90 ? str.substring(0, 90) + "..." : str;
  }

  const displayData = showMore ? mealsData : mealsData.slice(0, 4);

  return (
    <>
      {loading ? (
        <div className="h-[30rem] flex justify-center items-center">
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
      ) : (
        <>
          <div className="flex gap-5 mt-10 justify-center flex-wrap">
            {displayData.map((meals) => (
              <div
                className="flex flex-row bg-darkGreys h-[14rem] w-[39rem]"
                key={meals.idMeal}
              >
                <div className="relative overflow-hidden">
                  <img
                    className="h-full w-[15rem] object-cover"
                    src={meals.strMealThumb}
                    alt={meals.strMeal}
                  />
                  <Link to={`/detail/${meals.idMeal}`}>
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-blacks/80 backdrop-blur-0 opacity-0 hover:opacity-100 transition duration-500">
                      <FontAwesomeIcon
                        className="bg-yellows rounded-full flex items-center justify-center h-6 w-6 text-sm p-2"
                        size="sm"
                        color="white"
                        icon={faPlus}
                      />
                    </div>
                  </Link>
                </div>
                <div className="flex gap-3 w-[24rem] flex-col">
                  <p className="bg-browns text-white py-1 px-2 self-end font-semibold">
                    {meals.strArea}
                  </p>
                  <p className="text-darkYellows ms-5 font-semibold text-2xl">
                    {meals.strMeal}
                  </p>
                  <p className="text-lightGrey ms-5 pr-4 text-base text-ellipsis">
                    {truncate(meals.strInstructions)}
                  </p>
                </div>
              </div>
            ))}
          </div>
          {showMore ? (
            <a
              className="bg-browns hover:bg-yellows text-white font-semibold py-2 px-4 mt-10 transition duration-300"
              href="#menu"
              onClick={() => setShowMore(false)}
            >
              Show Less
            </a>
          ) : (
            <button
              className="bg-browns hover:bg-yellows text-white font-semibold py-2 px-4 mt-10 transition duration-300"
              onClick={() => setShowMore(!showMore)}
            >
              Show More
            </button>
          )}
        </>
      )}
    </>
  );
}

export default PageMenu;
