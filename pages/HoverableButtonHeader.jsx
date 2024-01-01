import React, { useState } from "react";

const HoverableButtonHeader = ({ originalText, hoverText }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      className="cursor-pointer text-lg border-4 rounded-2xl px-6 py-1 border-[#ffffff] hover:bg-[rgba(24,163,75,0.7)] active:bg-[#ffffff]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered ? hoverText : originalText}
    </button>
  );
};

export default HoverableButtonHeader;
