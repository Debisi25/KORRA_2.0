import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./button";

function Hero() {
  return (
    <>
      <section className="min-h-screen bg-cover bg-center Hero flex flex-col justify-center items-center text-center">
        <h1 className="font-display text-5xl text-white">
          FOOD ROOTED IN LAGOS
        </h1>

        <Button
          link="/reservations"
          className="mt-6 border border-white text-white px-6 py-3 font-body text-sm"
        >
          BOOK A TABLE
        </Button>
      </section>
    </>
  );
}

export default Hero;
