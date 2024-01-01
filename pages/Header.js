import React from "react";
import HoverableButtonHeader from "./HoverableButtonHeader";

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
        <HoverableButtonHeader originalText="Buy Now" hoverText="Coming Soon..." />
      </div>
    </div>
  );
}

export default Header;
