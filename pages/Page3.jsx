import React from "react";

function Page3() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center py-14">
        <p className="font-bold text-xl mb-4">CEX/DEX INTEGRATIONS</p>
        <div className="flex text-center">
          <div>
            <p className="font-bold mb-2 text-lg">CEX</p>
            <p>
              Bybit <br />
              KuCoin <br />
              HTX <br />
              Bitget <br />
              Bitrue <br />
              BitMart <br />
              CoinEx
            </p>
          </div>
          <div className="ml-20 -mr-4 text-center">
            <p className="font-bold mb-2 text-lg">DEX</p>
            <p>
              Trader Joe <br />
              Dexalot <br />
              Pharoah <br />
            </p>
          </div>
        </div>
      </div>

      <div className="bg-green-500 flex justify-center items-center py-28">
        <img className="absolute w-80 left-32 rotate-12" src="/frog2.png" alt="" />
        <div className="border-2 rounded-xl py-6 pr-16 pl-44 -ml-24">
          <p className="text-center text-white text-lg">
            <span className="font-bold text-2xl">DISCLAIMERS</span> <br />
            <br />
            $COQ is a meme coin with no intrinsic value or expectation of
            financial return. There is <br /> no formal team or roadmap. The
            coin is for entertainment purposes only.
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center py-8">
        <div className="border-2 border-green-500 flex justify-center items-center rounded-lg py-1 px-4">
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
