import React from "react";
import Portfolio from "../Portfolio/Portfolio";
import Brands from "../Brands/Brands";

const Home = () => {
  return (
    <div>
      <div class="carousel w-full">
        <div id="slide1" class="carousel-item relative w-full">
          <img
            src="https://api.lorem.space/image/car?w=800&h=200&hash=8B7BCDC2"
            a
            class="w-full"
          />{" "}
          /
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" class="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" class="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" class="carousel-item relative w-full">
          <img
            src="https://api.lorem.space/image/car?w=800&h=200&hash=500B67FB"
            a
            class="w-full"
          />{" "}
          /
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" class="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" class="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" class="carousel-item relative w-full">
          <img
            src="https://api.lorem.space/image/car?w=800&h=200&hash=A89D0DE6"
            a
            class="w-full"
          />{" "}
          /
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" class="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" class="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" class="carousel-item relative w-full">
          <img
            src="https://api.lorem.space/image/car?w=800&h=200&hash=225E6693"
            class="w-full"
          />{" "}
          /
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" class="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" class="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
      <Portfolio></Portfolio>
      <Brands></Brands>
    </div>
  );
};

export default Home;
