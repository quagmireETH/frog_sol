import React from "react";
import Link from "next/link";

function Header() {
  return (
    <div className="bg-green-500 py-6">
      <div>
        <img
          className="absolute w-32 rounded-full  ml-20 max-[950px]:ml-5 max-[800px]:ml-8 max-[800px]:w-20 max-[800px]:-mt-5"
          src="/token.png"
          alt=""
        />
      </div>
      <div className="flex justify-end mr-10">
        <Link href="https://raydium.io/swap/">
          <button className="cursor-pointer text-lg border-4 rounded-2xl px-6 py-1 border-[#ffffff] hover:bg-[rgba(24,163,75,0.7)] active:bg-[#ffffff]">
            Buy Now
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Header;
