import React, { useState } from "react";
import HoverableButton from "./HoverableButton";
import Header from "./Header";
import Page2 from "./page2";
import Page3 from "./Page3";
import Link from "next/link";

export default function Home() {
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
            <Link href="https://birdeye.so/token/36idekgAhUyKHfDmWvt8SxLKcfjBfeUNs7ToADdBPKVV?chain=solana">
              <button className="cursor-pointer text-lg border-4 rounded-2xl px-24 py-1.5 mt-4 mb-8 border-[#ffffff] bg-[#22C55E] hover:bg-[rgba(24,163,75,0.7)] active:bg-[#ffffff]">
                Birdeye
              </button>
            </Link>
            <Link href="https://raydium.io/swap/">
              <button className="cursor-pointer text-lg border-4 rounded-2xl px-24 py-1.5 mb-4 border-[#ffffff] bg-[#22C55E] hover:bg-[rgba(24,163,75,0.7)] active:bg-[#ffffff]">
                Raydium
              </button>
            </Link>
            <Link href="">
              <button className="cursor-pointer text-lg border-4 rounded-2xl px-24 py-1.5 mb-4 border-[#ffffff] bg-[#22C55E] hover:bg-[rgba(24,163,75,0.7)] active:bg-[#ffffff]">
                Dexlabs
              </button>
            </Link>
          </div>
          <div className="flex justify-evenly items-center mt-10">
            <Link href="https://solscan.io/token/36idekgAhUyKHfDmWvt8SxLKcfjBfeUNs7ToADdBPKVV">
              <div className="bg-purple-500 cursor-pointer mr-10 p-2 max-[700px]:w-14 max-[700px]:h-14 max-[415px]:w-12 max-[415px]:h-12 rounded-lg shadow-lg shadow-black hover:translate-y-2 hover:shadow-none duration-100">
                <img className="w-10" src="/solscan.png" alt="" />
              </div>
            </Link>

            <Link href="https://t.me/croakportal">
              <div className="bg-purple-500 cursor-pointer mr-10 p-3 max-[700px]:w-14 max-[700px]:h-14 max-[415px]:w-12 max-[415px]:h-12 rounded-lg shadow-lg shadow-black hover:translate-y-2 hover:shadow-none duration-100">
                <img className="w-10" src="/tgAsset_22.svg" alt="" />
              </div>
            </Link>

            <Link href="https://x.com/croakinu">
              <div className="bg-purple-500 cursor-pointer p-2 max-[700px]:w-14 max-[700px]:h-14 max-[415px]:w-12 max-[415px]:h-12 rounded-lg shadow-lg shadow-black hover:translate-y-2 hover:shadow-none duration-100">
                <img className="w-10" src="/twitter.svg" alt="" />
              </div>
            </Link>
          </div>
        </div>
      </div>

      <Page2 />
      <Page3 />
    </div>
  );
}
