import React from "react";

function Header() {
  return (
    <div className="bg-green-500 py-6">
      <div>
        <img className="absolute w-44 -mt-4 ml-20" src="/token.png" alt="" />
      </div>
      <div className="flex justify-end mr-10">
        <button className="cursor-pointer text-lg border-4 rounded-2xl px-6 py-1 border-[#ffffff] hover:bg-[rgba(24,163,75,0.7)] active:bg-[#ffffff]">
          Buy Now
        </button>
      </div>
    </div>
  );
}

export default Header;
