import React from "react";
import TittleReservation from "../title/TittleReservation";
import PageReservation from "../sections/PageReservation";

function MonthegaReservation() {
  return (
    <section className="py-20 bg-background sm:w-[425px] md:w-[768px] lg:w-[1440px]" id="reservation">
      <TittleReservation />
      <PageReservation />
    </section>
  );
}

export default MonthegaReservation;
