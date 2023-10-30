import React from "react";
import { Link } from "react-router-dom";
import { faJedi } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header() {
  return (
    <Link to={"/"}>
      <h2 className="font-semibold text-yellows flex gap-1">
        <FontAwesomeIcon className="text-3xl" icon={faJedi} />
        <span className="text-white text-2xl">Monthega</span>
      </h2>
    </Link>
  );
}

export default Header;
