import React from "react";

function Header() {
  return (
    <div className="bg-green-500 py-6">
      <div>
        <img className="absolute w-44 -mt-4 ml-20" src="/token.png" alt="" />
      </div>
      <div className="flex justify-end mr-10">
        <button className="button-50">
          Buy Now
        </button>
      </div>
    </div>
  );
}

export default Header;
