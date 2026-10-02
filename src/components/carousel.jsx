import React from "react";

function Homecarousel() {
  return (
    <>
      <div className="homeCarouselContainer">
        <div className="homeCarouselCards flex flex-nowrap gap-1 mx-auto px-2 overflow-x-auto my-5  ">
          <div className="card1 card bg-amber-700"></div>
          <div className="card2 card bg-blue-500"></div>
          <div className="card3 card bg-red-500"></div>
          <div className="card4 card bg-green-500"></div>
          <div className="card5 card bg-orange"></div>
          <div className="card6 card"></div>
        </div>
      </div>
    </>
  );
}

export default Homecarousel;
