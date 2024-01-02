import React, { useState } from "react";
import Link from "next/link";

function Page3() {
  const texts1 = [
    "Bybit",
    "KuCoin",
    "HTX",
    "Bitget",
    "Bitrue",
    "BitMart",
    "CoinEx",
  ];

  // State to hold which text is currently hovered
  const [hoveredText1, setHoveredText1] = useState(null);

  return (
    <div>
      <div className="flex flex-col justify-center items-center py-10">
        <p className="font-bold text-2xl mb-4">CEX/DEX INTEGRATIONS</p>
        <div className="flex text-center">
          <div className="w-28">
            <p className="font-bold mb-2 text-lg underline">CEX</p>
            {texts1.map((text, index) => (
              <p
                key={index}
                onMouseEnter={() => setHoveredText1(index)}
                onMouseLeave={() => setHoveredText1(null)}
                className="hoverEffect"
              >
                {hoveredText1 === index ? "Coming Soon..." : text}
              </p>
            ))}
          </div>
          <div className="ml-28 mr-2 text-center">
            <div className="w-28">
              <p className="font-bold mb-2 text-lg underline">DEX</p>
              <Link href="https://birdeye.so/token/36idekgAhUyKHfDmWvt8SxLKcfjBfeUNs7ToADdBPKVV?chain=solana">
                <p className="hover:underline">Birdeye</p>
              </Link>
              <Link href="https://raydium.io/swap/">
                <p className="hover:underline">Raydium</p>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-green-500 flex justify-center items-center px-20 py-12 max-[1100px]:py-20">
        <div className="border-2 rounded-xl py-6 px-16 max-[1100px]:pl-16 max-[850px]:pl-4 max-[850px]:pr-4">
          <p className="text-center text-white text-lg max-[530px]:text-base">
            <span className="font-bold text-3xl">DISCLAIMERS</span> <br />
            <br />
            $CROAK is a meme coin crafted purely for entertainment, devoid of
            any intrinsic value or financial expectations. It thrives on the
            collaborative efforts of a passionate group of friends associated
            with BAYC/MAYC & AZUKI, dedicated to creating a lighthearted and
            amusing experience with no formal roadmap. Join us in the world of
            fun and laughter, where the value lies in the enjoyment of the
            community and the entertaining spirit of the coin.
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center py-8">
        <div className="border-4 border-green-500 flex justify-center items-center rounded-lg py-1 px-4">
          <img className="w-10 mr-3" src="/Solana_logo.png" alt="" />
          <p className="text-center">
            Powered by <br />
            Solana
          </p>
        </div>
      </div>
    </div>
  );
}

export default Page3;
