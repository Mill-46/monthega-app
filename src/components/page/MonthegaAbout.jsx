import React from "react";
import PageAbout from "../sections/PageAbout";
import TittleAbout from "../title/TittleAbout";

function MonthegaAbout() {
  return (
    <section
      className="py-10 bg-blacks lg:h-[815px] sm:w-[425px] md:w-[768px] lg:w-[1440px]"
      id="about"
    >
      <TittleAbout />
      <PageAbout />
    </section>
  );
}

export default MonthegaAbout;
