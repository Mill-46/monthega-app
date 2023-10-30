import React from "react";
import PageMenu from "../sections/PageMenu";
import TittleMenu from "../title/TittleMenu";

function MonthegaMenu() {
  return (
    <section
      className="bg-menu flex flex-col bg-blacks items-center py-10 h-full min-h-screen sm:w-[425px] md:w-[768px] lg:w-[1440px]"
      id="menu"
    >
      <TittleMenu />
      <PageMenu />
    </section>
  );
}

export default MonthegaMenu;
