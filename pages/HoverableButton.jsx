import React, { useState } from 'react';

const HoverableButton = ({ originalText, hoverText }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      className="cursor-pointer text-lg border-4 rounded-2xl px-24 py-1.5 mb-4 border-[#ffffff] bg-[#22C55E] hover:bg-[rgba(24,163,75,0.99)] active:bg-[#ffffff]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered ? hoverText : originalText}
    </button>
  );
};

export default HoverableButton;
