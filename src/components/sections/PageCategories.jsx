import axios from "axios";
import React, { useEffect, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { Link } from "react-router-dom";

function PageCategories() {
  const [getCategory, setCategory] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getListCategory() {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/categories.php`
      );
      setCategory(res.data.categories);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching categories:", error);
      setLoading(false);
    }
  }

  useEffect(() => {
    getListCategory();
  }, []);

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
        <div className="flex gap-10 mt-10 justify-center flex-wrap">
          {getCategory.map((i) => (
            <Link to={`/category/${i.strCategory}`} key={i.idCategory}>
              <div className="relative h-[14rem] w-[18rem] overflow-hidden cursor-pointer bg-greys">
                <img
                  className="object-cover h-full w-full p-1 brightness-50"
                  src={i.strCategoryThumb}
                  alt={i.strCategory}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-100 hover:opacity-0 transition duration-500">
                  <p className="text-yellows opacity-100 text-2xl font-semibold">
                    {i.strCategory}
                  </p>
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-yellows/80 backdrop-blur-0 opacity-0 hover:opacity-100 transition duration-500">
                  <p className="text-white opacity-100 text-2xl font-semibold">
                    {i.strCategory}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </>
  );
}

export default PageCategories;
