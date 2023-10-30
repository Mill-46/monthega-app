import React, { useEffect } from "react";
import Header from "../widget/Header";
import Navigation from "../widget/Navigation";
import Action from "../widget/Action";

function MonthegaHeader() {
  const scrollHeader = () => {
    window.addEventListener("scroll", function () {
      const header = document.querySelector("header");
      if (header) {
        header.classList.toggle("sticky", window.scrollY > 0);
      }
    });
  };

  useEffect(() => {
    scrollHeader();
  }, []);

  return (
    <header className="flex justify-between px-20 py-5 items-center fixed z-10 sm:w-96 md:w-2/3 lg:w-full">
      <Header />
      <Navigation />
      <Action />
    </header>
  );
}

export default MonthegaHeader;
