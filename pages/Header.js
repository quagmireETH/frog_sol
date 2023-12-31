import React from "react";

function Header() {
  return (
    <div className="bg-green-500 py-10">
      <div>
        <img className="absolute w-44 -mt-4 ml-20" src="/token.png" alt="" />
      </div>
      <div className="flex justify-end mr-10">
        <button class="relative overflow-hidden text-black px-6 py-2 font-bold uppercase transition-transform duration-300 ease-in-out">
          Buy Now
        </button>
      </div>
    </div>
  );
}

export default Header;
