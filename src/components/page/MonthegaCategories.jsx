import React from "react";
import PageCategories from "../sections/PageCategories";
import TittleCategories from "../title/TittleCategories";
import PageCountry from "../sections/PageCountry";

function MonthegaCategories() {
  return (
    <section
      className="bg-background flex flex-col items-center py-10 h-full min-h-screen sm:w-[425px] md:w-[768px] lg:w-[1440px]"
      id="categories"
    >
      <TittleCategories />
      <PageCountry />
      <PageCategories />
    </section>
  );
}

export default MonthegaCategories;
