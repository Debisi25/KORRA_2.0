import { useState } from "react";
import { Link } from "react-router-dom";

function FoodCat({ categories, onCatChange, activeCat, className }) {
  return (
    <nav
      className={`${className} w-full flex flex-wrap justify-around border border-amber-500 foodCat`}
    >
      {categories.map((category) => {
        return (
          <button
            key={category}
            onClick={() => {
              onCatChange(category);
              document
                .querySelector(`.${category}`)
                .scrollIntoView({ behavior: "smooth" });
            }}
            className={activeCat === category ? "active" : ""}
          >
            {category}
          </button>
        );
      })}
    </nav>
  );
}
export default FoodCat;
