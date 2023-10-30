import axios from "axios";
import React, { useEffect, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { Link, useParams } from "react-router-dom";

function ListCountry() {
  const { flag } = useParams();
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getList() {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/filter.php?a=${flag}`
      );
      setList(res.data.meals);
      setLoading(false);
      console.log(res.data.meals);
      window.scrollTo(0, 0);
    } catch (error) {
      console.error("Error fetching meal data:", error);
      setLoading(false);
    }
  }

  useEffect(() => {
    getList();
  }, [flag]);

  function truncate(str) {
    return str.length > 20 ? str.substring(0, 20) + "..." : str;
  }

  return (
    <div className="h-full min-h-screen bg-blacks sm:w-[425px] md:w-[768px] lg:w-[1440px]">
      <div className="flex flex-col py-10 items-center">
        <h2 className="text-2xl font-bold bg-darkYellows w-72 text-center p-2 rounded-lg text-white uppercase">
          {location.pathname.split("/country/")}
        </h2>
      </div>
      {loading ? (
        <div className="flex justify-center h-screen items-center mt-5">
          <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="#FFD369"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />
        </div>
      ) : (
        <div className="flex gap-10 justify-center flex-wrap">
          {list.map((meal) => (
            <Link to={`/detail/${meal.idMeal}`} key={meal.idMeal}>
              <div
                key={meal.idMeal}
                className="relative h-[18rem] w-[22rem] overflow-hidden cursor-pointer bg-greys"
              >
                <img
                  className="object-cover h-full w-full p-1 brightness-50"
                  src={meal.strMealThumb}
                  alt={meal.strMeal}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-100 hover:opacity-0 transition duration-500">
                  <p className="text-yellows opacity-100 text-2xl font-semibold">
                    {truncate(meal.strMeal)}
                  </p>
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-yellows/80 backdrop-blur-0 opacity-0 hover:opacity-100 transition duration-500">
                  <p className="text-white opacity-100 text-2xl font-semibold">
                    {truncate(meal.strMeal)}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default ListCountry;
