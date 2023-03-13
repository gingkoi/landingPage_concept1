import React from "react";
import svg from "../assets/hero.svg";
import svg2 from "../assets/hero2.png";
import svg3 from "../assets/hero3.png";
import Footer from "./Footer";

export default function Hero() {
  return (
    <div className="container mx-auto staitc">
      <div className="xl:flex justify-between h-auto py-20 xl:py-0">
        <div className="grow py-10 px-3">
          <div className="font-poppin">
            <h1 className="font-bold text-center xl:text-left text-5xl xl:text-7xl">
              Collaborate <br /> across the world
            </h1>
            <h2 className="text-center xl:text-left text-lg xl:text-2xl my-5">
              A selective platform to connect great talents <br /> around the
              globe, build yours now
            </h2>
            <div className="xl:space-x-8 space-y-2 xl:space-y-0 my-10 flex flex-col xl:flex-row px-5 xl:px-0">
              <button className="border-2 font-medium border-black py-2 px-10 rounded-lg bg-white custom_shadow text-2xl hover:bg-[#cbea2d] transition hover:ease-in-out">
                Get started today
              </button>
              <button className="border-2 font-medium border-black py-2 px-10 rounded-lg bg-[#cbea2d] custom_shadow text-2xl hover:bg-black hover:text-white transition hover:ease-in-out">
                Our plans
              </button>
            </div>
          </div>
        </div>
        <div className="grow flex justify-center">
          <img src={svg} alt="Collaboration" className="w-[600px]" />
        </div>
      </div>
      <div className="xl:flex-col justify-between xl:absolute z-3 bottom-[2%] w-full container p-3 xl:p-0">
        <div className="flex flex-col xl:flex-row xl:space-x-5 space-y-5 xl:space-y-0 ">
          <div className="bg-[#f9d7c2] xl:w-[50%] rounded-lg custom_shadow border-2 border-black flex flex-col items-center xl:flex-row xl:p-10 p-5 xl:space-x-10">
            <div>
              <img src={svg3} alt="Live-support" />
            </div>
            <div className="flex flex-col justify-center space-y-3 text-center xl:text-left">
              <h3 className="text-3xl font-bold">Community insights</h3>
              <h4 className="text-2xl font-light">
                All communications done through our <br /> platform is highly
                encrypted and fully <br /> secure, we care about privacy!
              </h4>
              <a
                href="/"
                className="font-bold text-2xl underline hover:opacity-80"
              >
                Check the community
              </a>
            </div>
          </div>
          <div className="bg-[#fded2c] xl:w-[50%] rounded-lg custom_shadow border-2 border-black flex flex-col items-center xl:flex-row xl:p-10 p-5 xl:space-x-10">
            <div>
              <img src={svg2} alt="Live-support" />
            </div>
            <div className="flex flex-col justify-center space-y-3 text-center xl:text-left">
              <h3 className="text-3xl font-bold">Live support</h3>
              <h4 className="text-2xl font-light">
                We're always here whenever you need <br />
                us, our free live support will answer all your questions
                immediately
              </h4>
              <a
                href="/"
                className="font-bold text-2xl underline hover:opacity-80"
              >
                Compare plans
              </a>
            </div>
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
