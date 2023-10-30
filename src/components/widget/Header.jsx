import { faJedi } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Header() {
  return (
    <h2 className="font-semibold text-yellows flex gap-1">
      <FontAwesomeIcon className="text-3xl" icon={faJedi} />
      <span className="text-white text-2xl">Monthega</span>
    </h2>
  );
}

export default Header;
