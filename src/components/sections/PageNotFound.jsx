import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function PageNotFound() {
  return (
    <div className="flex flex-col gap-2 items-center justify-center min-h-screen">
      <FontAwesomeIcon size="2xl" color="white" icon={faEyeSlash} />
      <h2 className="text-white font-semibold text-3xl">Page Not Found</h2>
    </div>
  );
}

export default PageNotFound;
