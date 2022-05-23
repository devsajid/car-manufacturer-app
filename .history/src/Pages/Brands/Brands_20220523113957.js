import React from "react";
import "../Brands/Brand.css";
import brand1 from "../../Images/1.jpg";
import brand2 from "../../Images/2.png";
import brand3 from "../../Images/3.png";
import brand4 from "../../Images/4.png";
import brand5 from "../../Images/5.png";
import brand6 from "../../Images/6.jpg";
import brand7 from "../../Images/7.png";
import brand8 from "../../Images/8.jpg";
// import brand9 from "../../Images/9.png";
// import brand10 from "../../Images/10.png";
// import brand11 from "../../Images/11.png";
// import brand12 from "../../Images/12.jpg";
const Brands = () => {
  return (
    <div>
      <div className="wrapper bg-prmary">
        <div className="sliders">
          <div className="sliding">
            <img src={brand1} class="w-24" alt="brands" />
            <img src={brand2} class="w-24" alt="brands" />
            <img src={brand3} class="w-24" alt="brands" />
            <img src={brand4} class="w-24" alt="brands" />
            <img src={brand5} class="w-24" alt="brands" />
            <img src={brand6} class="w-24" alt="brands" />
            <img src={brand7} class="w-24" alt="brands" />
            <img src={brand8} class="w-24" alt="brands" />
            {/* <img src={brand9} class="w-24" alt="brands" />
          <img src={brand10} class="w-24" alt="brands" />
          <img src={brand11} class="w-24" alt="brands" />
          <img src={brand12} class="w-24" alt="brands" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brands;
