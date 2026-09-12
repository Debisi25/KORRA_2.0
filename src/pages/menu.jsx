import React from "react";
import { useState } from "react";
import FoodCat from "../components/FoodCategory";
import FoodCard from "../components/FoodCard";
import duckMeat from "../assets/duck.jpeg";

function Menu() {
  const [activeCat, setActiveCat] = useState("Starters");
  const [categories, setCategories] = useState([
    "Starters",
    "Mains",
    "Sides",
    "Desserts",
    "Drinks",
  ]);
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

  return (
    <main className="mt-5 px-4 md:px-8 max-w-360 mx-auto">
      <FoodCat
        className="sticky top-0 z-60 bg-warm-white"
        categories={categories}
        activeCat={activeCat}
        onCatChange={setActiveCat}
      />
      <div className=" grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-[clamp(1rem,2vw,2rem)]">
        {menuItems.map((item) => (
          <FoodCard
            key={item.id}
            foodName={item.name}
            foodDescription={item.description}
            foodPrice={item.price}
            imgUrl={item.image}
            category={item.category}
          />
        ))}
      </div>
    </main>
  );
}

export default Menu;
