import React from "react";

function Reservation() {
  return (
    <div className="h-[30rem] w-[40rem]">
      <form className="flex flex-col gap-8">
        <input
          type="text"
          placeholder="Name"
          className="border-2 rounded-lg px-3 py-2 w-full bg-transparent border-yellows placeholder-lightGrey text-white"
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="border-2 rounded-lg px-3 py-2 w-full bg-transparent border-yellows placeholder-lightGrey text-white"
          required
        />
        <input
          type="number"
          placeholder="Phone"
          className="border-2 rounded-lg px-3 py-2 w-full bg-transparent border-yellows placeholder-lightGrey text-white"
          required
        />
        <input
          type="date"
          placeholder="Date"
          className="border-2 rounded-lg px-3 py-2 w-full bg-white border-white"
          required
        />
        <button
          type="submit"
          className="bg-darkYellows text-white font-bold w-full py-3 px-4 rounded hover:bg-browns transition duration-300"
        >
          Reserve
        </button>
      </form>
    </div>
  );
}

export default Reservation;
