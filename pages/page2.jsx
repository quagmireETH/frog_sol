import React from "react";

function page2() {
  return (
    <div className="mt-28">
      <div className="bg-green-500 flex justify-center items-center py-16">
        <p className="text-center text-white font-bold text-lg px-4">
          Born from collective frenship, deeply rooted in memetics and humor,
          CROAK is not your average <br /> meme coin - it is a way of life.
        </p>
      </div>
      <div className="flex justify-center items-center py-14 max-[850px]:flex-col">
        <div className="flex flex-col justify-center items-start mr-28 max-[850px]:mr-0 max-[850px]:mb-10">
          <p className="text-center font-bold text-3xl mb-10 underline">
            TOKENOMICS
          </p>
          <li className="text-lg mb-1">69.420T $CROAK</li>
          <li className="text-lg mb-1">10% Team </li>
          <li className="text-lg mb-1">5% Marketing </li>
          <li className="text-lg mb-1">No Presale</li>
          <li className="text-lg mb-1">No Taxes</li>
          <li className="text-lg mb-1">No BS</li>
        </div>
        <div className="-mr-14">
          <img className="w-[450px] max-[525px]:w-72" src="/IMG_5040.png" alt="" />
        </div>
      </div>
      <div className="bg-green-500 flex justify-center items-center py-16">
        <p className="text-center text-white font-bold text-lg px-4">
          Embarking on a Web3 journey feels truly enriched with a touch of CROAK
          Inu.
        </p>
      </div>
    </div>
  );
}

export default page2;
