import { useState } from "react";
import FoodCat from "../components/FoodCategory";
import FoodCard from "../components/FoodCard";
import duckMeat from "../assets/duck.jpeg";

const menuItems = [
  {
    id: 1,
    category: "Starters",
    name: "Akara, pepper sauce",
    description: "...",
    price: 4500,
    image: duckMeat,
  },
  {
    id: 2,
    category: "Starters",
    name: "Akara, pepper sauce",
    description: "...",
    price: 4500,
    image: duckMeat,
  },
  {
    id: 3,
    category: "Starters",
    name: "Akara, pepper sauce",
    description: "...",
    price: 4500,
    image: duckMeat,
  },
  {
    id: 4,
    category: "Starters",
    name: "Akara, pepper sauce",
    description: "...",
    price: 4500,
    image: duckMeat,
  },

  {
    id: 5,
    category: "Mains",
    name: "Jollof rice, grilled chicken",
    description: "...",
    price: 9500,
    image: duckMeat,
  },
  {
    id: 6,
    category: "Mains",
    name: "Braised oxtail, ata din-din",
    description: "...",
    price: 14000,
    image: duckMeat,
  },
  {
    id: 7,
    category: "Mains",
    name: "Suya-spiced stew, soft egg",
    description: "...",
    price: 11000,
    image: duckMeat,
  },
  {
    id: 8,
    category: "Mains",
    name: "Whole grilled tilapia",
    description: "...",
    price: 16500,
    image: duckMeat,
  },
  {
    id: 9,
    category: "Mains",
    name: "Chargrilled lamb, dodo & jollof rice",
    description: "...",
    price: 18000,
    image: duckMeat,
  },

  {
    id: 10,
    category: "Sides",
    name: "Dodo (fried plantain)",
    description: "...",
    price: 3000,
    image: duckMeat,
  },
  {
    id: 11,
    category: "Sides",
    name: "Dodo (fried plantain)",
    description: "...",
    price: 3000,
    image: duckMeat,
  },
  {
    id: 12,
    category: "Sides",
    name: "Dodo (fried plantain)",
    description: "...",
    price: 3000,
    image: duckMeat,
  },

  {
    id: 13,
    category: "Desserts",
    name: "Coconut cream slice",
    description: "...",
    price: 4500,
    image: duckMeat,
  },
  {
    id: 14,
    category: "Desserts",
    name: "Dark chocolate & tigernut cake",
    description: "...",
    price: 5000,
    image: duckMeat,
  },
  {
    id: 15,
    category: "Desserts",
    name: "Coconut cream slice",
    description: "...",
    price: 4500,
    image: duckMeat,
  },

  {
    id: 16,
    category: "Drinks",
    name: "House zobo",
    description: "...",
    price: 3500,
    image: duckMeat,
  },
  {
    id: 17,
    category: "Drinks",
    name: "House zobo",
    description: "...",
    price: 3500,
    image: duckMeat,
  },
  {
    id: 18,
    category: "Drinks",
    name: "House zobo",
    description: "...",
    price: 3500,
    image: duckMeat,
  },
  {
    id: 19,
    category: "Drinks",
    name: "House zobo",
    description: "...",
    price: 3500,
    image: duckMeat,
  },
  {
    id: 20,
    category: "Drinks",
    name: "House zobo",
    description: "...",
    price: 3500,
    image: duckMeat,
  },
];
const categories = ["Starters", "Mains", "Sides", "Desserts", "Drinks"];

function Menu() {
  const [activeCat, setActiveCat] = useState("Starters");
  const [searchTerm, setSearchTerm] = useState("");

  function goToItem(itemId) {
    const itemElement = document.getElementById(itemId);
    if (itemElement) {
      itemElement.scrollIntoView({ behavior: "smooth" });
    }
  }
  const q = searchTerm.trim().toLowerCase();
  const matches = q
    ? menuItems.filter((item) => item.name.toLowerCase().includes(q))
    : [];

  return (
    <main className="mt-3 px-4 md:px-8 max-w-360 mx-auto">
      {/* Search Bar */}
      <div
        className={`flex flex-col gap-2 transition-all duration-300 sticky top-16 right-2 z-500 bg-white ${q ? "w-full" : "w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5"} items-center`}
      >
        <div className="flex justify-between w-full gap-2">
          <input
            className={`w-full px-2 py-1 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-1.5 focus:ring-blue-500 focus:border-blue-500`}
            type="text"
            name=""
            id=""
            placeholder="Search for a dish..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          />
          <button
            onClick={() => {
              setSearchTerm("");
            }}
            className={`bg-terracotta text-white px-2 py-1 rounded-md hover:bg-red-600 transition-all duration-200 ${q ? "" : "hidden"}`}
          >
            X
          </button>
        </div>

        <div
          className={`flex flex-col gap-2 ${matches.length === 0 ? "hidden" : ""}`}
        >
          <h1 className={`text-2xl font-bold`}>search results:</h1>
          {matches.map((item) => (
            <button
              key={item.id}
              onClick={() => goToItem(item.id)}
              className="flex w-full justify-between gap-2 bg-blue-50 px-2 py-1 rounded-md hover:bg-blue-100 transition-all duration-200"
            >
              <h3>{item.name}</h3>
              <p>₦{item.price}</p>
            </button>
          ))}
        </div>
      </div>

      <FoodCat
        className="pt-4"
        categories={categories}
        activeCat={activeCat}
        onCatChange={setActiveCat}
      />
      <div className="mb-20">
        {categories.map((cat) => (
          <section
            key={cat}
            className={`${cat} text-2xl mt-10 scroll-mt-16 sm:scroll-mt-22`}
          >
            <h1 className="text-terracotta mb-5 py-2 pl-2 font-display bg-blue-50">
              {cat}
            </h1>
            <div className=" grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-[clamp(1rem,2vw,2rem)]">
              {menuItems
                .filter((item) => item.category === cat)
                .map((item) => (
                  <div
                    key={item.id}
                    id={item.id}
                    className="scroll-mt-16 sm:scroll-mt-22"
                  >
                    <FoodCard
                      key={item.id}
                      foodName={item.name}
                      foodDescription={item.description}
                      foodPrice={item.price}
                      imgUrl={item.image}
                      category={item.category}
                    />
                  </div>
                ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}

export default Menu;
