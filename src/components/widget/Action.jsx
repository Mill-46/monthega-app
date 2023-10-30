import React from "react";
import { faBell, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Action() {
  const handleClick = () => {
    window.location.href = "/search";
  };

  return (
    <div className="flex gap-8 justify-end">
      <div className="flex items-center gap-3">
        <FontAwesomeIcon
          className="text-yellows text-lg"
          icon={faMagnifyingGlass}
          onClick={handleClick}
        />
      </div>
      <div className="flex items-center gap-2">
        <FontAwesomeIcon size="lg" color="white" icon={faBell} shake />
        <h2 className="text-yellows text-base">0</h2>
      </div>
      <button className="py-0.5 px-3 bg-transparent text-white border border-yellows rounded-md text-base">
        Sign in
      </button>
    </div>
  );
}

export default Action;
