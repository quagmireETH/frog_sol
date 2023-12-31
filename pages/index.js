import React, { useState } from "react";
import HoverableButton from "./HoverableButton";
import Header from "./Header";
import Page2 from "./page2";
import Page3 from "./Page3";

export default function Home() {
  const texts1 = ["Text 1", "Text 2", "Text 3"];

  return (
    <div>
      <Header />
      <div className="flex justify-center items-center mt-20 h-full relative -mb-6">
        <img
          className="absolute w-full h-screen -z-50"
          src="/frog_bg.jpg"
          alt=""
        />

        <div className="w-[600px] flex justify-center items-center flex-col">
          <div>
            <p className="bg-white rounded-md text-5xl px-3 py-1.5 text-center max-[585px]:text-4xl max-[465px]:text-3xl max-[400px]:px-1">
              THE <span className="text-green-500 font-bold">MEME COIN</span> OF
            </p>
            <p className="bg-white rounded-md mt-3 text-5xl flex items-center px-3 py-1.5 text-center max-[585px]:text-4xl max-[465px]:text-3xl max-[400px]:px-1">
              THE{" "}
              <span className="text-green-500 font-bold ml-2.5">
                SWAGGER CHAIN
              </span>
              <img className="w-8 mt-1 ml-2" src="/Solana_logo.png" alt="" />
            </p>
          </div>
          <div className="my-8 bg-white rounded-md py-1 px-2">
            <p className="text-xl">Get Some $Croak</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <HoverableButton
              originalText="Trader Joe"
              hoverText="Coming Soon..."
            />
            <HoverableButton
              originalText="Dextools"
              hoverText="Coming Soon..."
            />
            <HoverableButton
              originalText="Birdeye"
              hoverText="Coming Soon..."
            />
          </div>
          <div className="flex justify-evenly items-center mt-10">
            <div className="bg-purple-500 cursor-pointer mr-10 p-2 max-[700px]:w-14 max-[700px]:h-14 max-[415px]:w-12 max-[415px]:h-12 rounded-lg shadow-lg shadow-black hover:translate-y-2 hover:shadow-none duration-100">
              <img className="w-10" src="/solscan.png" alt="" />
            </div>

            <div className="bg-purple-500 cursor-pointer mr-10 p-3 max-[700px]:w-14 max-[700px]:h-14 max-[415px]:w-12 max-[415px]:h-12 rounded-lg shadow-lg shadow-black hover:translate-y-2 hover:shadow-none duration-100">
              <img className="w-10" src="/tgAsset_22.svg" alt="" />
            </div>

            <div className="bg-purple-500 cursor-pointer p-2 max-[700px]:w-14 max-[700px]:h-14 max-[415px]:w-12 max-[415px]:h-12 rounded-lg shadow-lg shadow-black hover:translate-y-2 hover:shadow-none duration-100">
              <img className="w-10" src="/twitter.svg" alt="" />
            </div>
          </div>
        </div>
      </div>

      <Page2 />
      <Page3 />
    </div>
  );
}
