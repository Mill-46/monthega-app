import React from "react";

function PageAbout() {
  return (
    <div className="lg:flex lg:flex-row lg:p-10 lg:gap-10 lg:mt-0 md:flex md:flex-col md:mt-10  sm:flex sm:flex-col sm:mt-10">
      <div className="lg:w-1/2 lg:flex lg:justify-center md:flex md:justify-center  sm:flex sm:justify-center">
        <img className="img-about object-cover lg:w-[32rem] lg:h-[35rem] md:w-[42rem] md:h-[28rem] sm:w-[22rem] sm:h-[28rem]" />
      </div>
      <div className="lg:w-1/2 lg:flex lg:flex-col lg:gap-5 lg:mt-0 md:flex md:flex-col md:gap-5 md:mt-5 md:items-center md:justify-center sm:flex sm:flex-col sm:gap-5 sm:mt-5 sm:items-center sm:justify-center">
        <pre className="text-white whitespace-pre-wrap text-base leading-normal text-justify lg:w-[37rem] md:w-[42rem] sm:w-[30rem]">
          Monthega Restaurant, established in 1984, stands as a culinary
          sanctuary offering the epitome of gastronomic delight. Nestled in the
          heart of its origins, this iconic dining haven has been revered as a
          beacon of exceptional cuisine. Monthega Restaurant has painstakingly
          curated a menu that showcases the best of world-class culinary
          creations.
        </pre>
        <pre className="text-white whitespace-pre-wrap text-base leading-normal text-justify lg:w-[37rem] md:w-[42rem]">
          From delectable appetizers to sumptuous main courses and heavenly
          desserts, each dish is a masterpiece in itself. With a passion for
          blending diverse flavors and incorporating the freshest ingredients,
          Monthega Restaurant ensures that every meal is an unforgettable
          experience, leaving guests eager to return for more.
        </pre>
        <pre className="text-white whitespace-pre-wrap text-base leading-normal text-justify lg:w-[37rem] md:w-[42rem]">
          The ambience exudes elegance, providing the perfect setting for
          patrons to savor the harmonious fusion of flavors meticulously crafted
          by the talented chefs at Monthega. With its rich history and
          unwavering commitment to excellence, Monthega Restaurant continues to
          captivate the hearts and palates of discerning food enthusiasts
          worldwide.
        </pre>
        <pre className="text-white whitespace-pre-wrap text-base leading-normal text-justify lg:w-[37rem] md:w-[42rem]">
          Join us at Monthega and indulge in a culinary adventure that
          transcends boundaries, leaving you with cherished memories and a
          longing to return for more. Bon appétit!
        </pre>
      </div>
    </div>
  );
}

export default PageAbout;
