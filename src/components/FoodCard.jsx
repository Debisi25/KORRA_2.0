import React from "react";
import { useState } from "react";

function FoodCard({ imgUrl, foodName, foodDescription, foodPrice, category }) {
  return (
    <div
      className={`${category} foodCard w-full h-auto flex flex-col px-0.5 bg-soft-cream `}
    >
      <div className="w-full aspect-square md:aspect-4/5 overflow-hidden mt-4">
        <img
          src={imgUrl}
          alt={foodName}
          className="w-full h-full object-cover m-auto"
        />
      </div>
      <h3 className="foodName mt-2 text-md">{foodName}</h3>
      <p className="description text-sm">{foodDescription}</p>
      <p className="price text-sm self-end ">${foodPrice}</p>
    </div>
  );
}
export default FoodCard;
