import React, { useState } from "react";

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

  const texts2 = ["Trader Joe", "Dexalot", "Pharoah", "Birdeye"];

  // State to hold which text is currently hovered
  const [hoveredText1, setHoveredText1] = useState(null);
  const [hoveredText2, setHoveredText2] = useState(null);

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
                onMouseEnter={() => setHoveredText1(index)} // Set the hovered text for list 1
                onMouseLeave={() => setHoveredText1(null)} // Reset on mouse leave for list 1
                className="hoverEffect"
              >
                {hoveredText1 === index ? "Coming Soon..." : text}
              </p>
            ))}
          </div>
          <div className="ml-28 mr-2 text-center">
            <div className="w-28">
              <p className="font-bold mb-2 text-lg underline">DEX</p>
              {texts2.map((text, index) => (
                <p
                  key={index}
                  onMouseEnter={() => setHoveredText2(index)} // Set the hovered text for list 2
                  onMouseLeave={() => setHoveredText2(null)} // Reset on mouse leave for list 2
                  className="hoverEffect"
                >
                  {hoveredText2 === index ? "Coming Soon..." : text}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-green-500 flex justify-center items-center py-12 max-[1100px]:py-20">
        <img
          className="relative w-80 -left-10 rotate-12 max-[1200px]:-left-20 max-[1100px]:hidden"
          src="/frog2.png"
          alt=""
        />
        <div className="border-2 rounded-xl py-6 pr-16 pl-[12%] -ml-64 max-[1100px]:ml-0 max-[1100px]:pl-16 max-[850px]:pl-4 max-[850px]:pr-4">
          <p className="text-center text-white text-lg">
            <span className="font-bold text-3xl">DISCLAIMERS</span> <br />
            <br />
            $Croack is a meme coin with no intrinsic value or expectation of
            financial return. There is <br /> no formal team or roadmap. The
            coin is for entertainment purposes only.
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
