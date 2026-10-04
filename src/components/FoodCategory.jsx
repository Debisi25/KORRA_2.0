import { useState } from "react";

function FoodCat({ categories, onCatChange, activeCat, className }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex flex-col gap-7">
      <div
        className={`flex gap-0.5 fixed right-4 top-1/2 -translate-y-1/2 z-50 rounded-md    bg-blue-500 hover:bg-ink opacity-40 hover:opacity-95 transition-all duration-200 ${isOpen ? "hidden" : ""} scale-75`}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`py-2 px-4 rounded-md font-body text-md text-black hover:text-terracotta font-extrabold hover:font-bold`}
        >
          MENU
        </button>
      </div>
      {isOpen && (
        <nav
          className={`${className} foodCat top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3 min-w-1/8 fixed right-2 bg-warm-white rounded-2xl px-2 mt-1 font-display font-bold text-2xl `}
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
