import { useState } from "react";
import { Link } from "react-router-dom";

function FoodCat({ categories, onCatChange, activeCat, className }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex flex-col gap-7">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed right-4 top-1/2 -translate-y-1/2 z-50 px-4 py-2 rounded-md font-body text-md text-black hover:text-terracotta font-extrabold hover:font-bold bg-blue-500 hover:bg-ink opacity-40 hover:opacity-95 transition-all duration-200 ${isOpen ? "hidden" : ""}`}
      >
        MENU
      </button>
      {isOpen && (
        <nav
          className={`${className} foodCat top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3 min-w-1/6 fixed right-2 bg-warm-white rounded-2xl px-1 mt-1`}
        >
          <span
            className={` hidden sm:inline absolute top-0 right-1 font-bolder text-3xl opacity-60 scale-75`}
            onClick={() => setIsOpen(!isOpen)}
          >
            X
          </span>
          {categories.map((category) => {
            return (
              <button
                key={category}
                onClick={() => {
                  onCatChange(category);
                  setIsOpen(false);
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
      )}
    </div>
  );
}
export default FoodCat;
