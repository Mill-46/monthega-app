import React, { useState, useEffect } from "react";
import MonthegaHeader from "../components/page/MonthegaHeader";
import MonthegaHome from "../components/page/MonthegaHome";
import MonthegaCategories from "../components/page/MonthegaCategories";
import MonthegaMenu from "../components/page/MonthegaMenu";
import Footer from "../components/widget/Footer";
import { ThreeDots } from "react-loader-spinner";
import MonthegaAbout from "../components/page/MonthegaAbout";
import MonthegaReservation from "../components/page/MonthegaReservation";
import MonthegaContact from "../components/page/MonthegaContact";
import MonthegaImage from "../components/page/MonthegaImage";

const HomePage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {loading ? (
        <div className="h-screen bg-blacks flex justify-center items-center">
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
        <>
          <MonthegaHeader />
          <MonthegaHome />
          <MonthegaAbout />
          <MonthegaCategories />
          <MonthegaMenu />
          <MonthegaReservation />
          <MonthegaImage />
          <MonthegaContact />
          <Footer />
        </>
      )}
    </>
  );
};

export default HomePage;
