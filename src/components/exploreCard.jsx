import react from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function ExploreCard({
  children,
  description,
  imageUrl,
  hhhExtraClass,
  imgExtraClass,
  link,
}) {
  return (
    <Link to={link}>
      <div
        className={`exploreCard relative w-full h-full rounded-md overflow-hidden shadow-lg transition-transform duration-300 text-amber-500 aspect-4/4 `}
      >
        <img
          src={imageUrl}
          alt="Explore"
          className={`w-full h-full object-cover transition-all duration-300 ${imgExtraClass}`}
        />
        <div
          className={` absolute inset-0 flex flex-col justify-center items-center text-white p-4 transition-opacity duration-300 opacity-80`}
        ></div>
        <h3
          className={` absolute bottom-0 w-full ${hhhExtraClass}  text-white p-4 isolate transition-all duration-200 `}
        >
          {description}
        </h3>
      </div>
    </Link>
  );
}
export default ExploreCard;
