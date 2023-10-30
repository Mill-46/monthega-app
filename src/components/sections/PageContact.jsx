import {
  faCircle,
  faFaceAngry,
  faFaceGrinBeamSweat,
  faFaceGrinStars,
  faFaceLaughSquint,
  faLocationDot,
  faPhone,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function PageContact() {
  return (
    <div className="flex flex-col gap-10 items-center justify-center">
      <div className="flex gap-10 text-white">
        <div className="flex flex-col w-64 gap-2">
          <div className="flex items-center gap-2 text-sm">
            <FontAwesomeIcon icon={faCircle} className="text-yellows" />
            <p>Open Now, Closes at 23:30</p>
          </div>
          <p>Operating Hours: Monday - Sunday 14:00 PM - 23:30 PM</p>
        </div>
        <div className="flex flex-col w-64 gap-2">
          <div className="flex items-center gap-2 text-sm">
            <FontAwesomeIcon icon={faLocationDot} className="text-yellows" />
            <p>Monthega location</p>
          </div>
          <p>32 Avenue Montaigne 75008 Paris, France</p>
        </div>
        <div className="flex flex-col w-64 gap-2">
          <div className="flex items-center gap-2 text-sm">
            <FontAwesomeIcon icon={faStar} className="text-yellows" />
            <p>Highlight</p>
          </div>
          <p>Combine refinement, Simplicity, and Elegance.</p>
        </div>
        <div className="flex flex-col w-64 gap-2">
          <div className="flex items-center gap-2 text-sm">
            <FontAwesomeIcon icon={faPhone} className="text-yellows" />
            <p>Contact us</p>
          </div>
          <p>Company Phone Number : +33140735363</p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="flex gap-2">
          <div className="h-10 w-10 bg-transparent border-lightGrey border rounded-[0.1rem] flex items-center justify-center">
            <FontAwesomeIcon
              icon={faFaceGrinBeamSweat}
              color="white"
              size="lg"
            />
          </div>
          <div className="h-10 w-10 bg-transparent border-lightGrey border rounded-[0.1rem] flex items-center justify-center">
            <FontAwesomeIcon icon={faFaceAngry} color="white" size="lg" />
          </div>
          <div className="h-10 w-10 bg-transparent border-lightGrey border rounded-[0.1rem] flex items-center justify-center">
            <FontAwesomeIcon icon={faFaceGrinStars} color="white" size="lg" />
          </div>
          <div className="h-10 w-10 bg-transparent border-lightGrey border rounded-[0.1rem] flex items-center justify-center">
            <FontAwesomeIcon icon={faFaceLaughSquint} color="white" size="lg" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageContact;
