import React from "react";
import brand1 from "../../Images/1.jpg";
import brand2 from "../../Images/2.png";
import brand3 from "../../Images/3.png";
import brand4 from "../../Images/4.png";
import brand5 from "../../Images/5.png";
import brand6 from "../../Images/6.jpg";
import brand7 from "../../Images/7.png";
import brand8 from "../../Images/8.jpg";
import brand9 from "../../Images/9.png";
import brand10 from "../../Images/10.png";
import brand11 from "../../Images/11.png";
import brand12 from "../../Images/12.jpg";
const Brands = () => {
  return (
    <div>
      <div class="carousel w-full">
        <div id="1" class="carousel-item w-full">
          <img src={brand} class="w-full" alt="brands" />
        </div>
        <div id="2" class="carousel-item w-full">
          <img src={brand} class="w-full" alt="brands" />
        </div>
        <div id="3" class="carousel-item w-full">
          <img src={brand} class="w-full" alt="brands" />
        </div>
        <div id="4" class="carousel-item w-full">
          <img src={brand} class="w-full" alt="brands" />
        </div>
        <div id="5" class="carousel-item w-full">
          <img src={brand} class="w-full" alt="brands" />
        </div>
        <div id="6" class="carousel-item w-full">
          <img src={brand6} class="w-full" alt="brands" />
        </div>
        <div id="7" class="carousel-item w-full">
          <img src={bran7} class="w-full" alt="brands" />
        </div>
        <div id="8" class="carousel-item w-full">
          <img src={brand8} class="w-full" alt="brands" />
        </div>
        <div id="9" class="carousel-item w-full">
          <img src={brand9} class="w-full" alt="brands" />
        </div>
        <div id="10" class="carousel-item w-full">
          <img src={brand10} class="w-full" alt="brands" />
        </div>
        <div id="11" class="carousel-item w-full">
          <img src={brand11} class="w-full" alt="brands" />
        </div>
        <div id="12" class="carousel-item w-full">
          <img src={brand12} class="w-full" alt="brands" />
        </div>
      </div>
      <div class="flex justify-center w-full py-2 gap-2">
        <a href="#1" class="btn btn-xs">
          1
        </a>
        <a href="#2" class="btn btn-xs">
          2
        </a>
        <a href="#3" class="btn btn-xs">
          3
        </a>
        <a href="#4" class="btn btn-xs">
          4
        </a>
        <a href="#5" class="btn btn-xs">
          4
        </a>
        <a href="#6" class="btn btn-xs">
          4
        </a>
        <a href="#7" class="btn btn-xs">
          4
        </a>
        <a href="#8" class="btn btn-xs">
          4
        </a>
        <a href="#9" class="btn btn-xs">
          4
        </a>
        <a href="#10" class="btn btn-xs">
          4
        </a>
        <a href="#11" class="btn btn-xs">
          4
        </a>
        <a href="#12" class="btn btn-xs">
          4
        </a>
      </div>
    </div>
  );
};

export default Brands;
