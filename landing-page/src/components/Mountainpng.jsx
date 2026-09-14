import React from "react";

import mainScreenImg from "../assets-opt/ava_background3.webp";
import mainScreenImgSm from "../assets-opt/ava_background3-900.webp";

const Mountainpng = () => {
  return (
    <div className="absolute inset-0 z-0">
      <img
        src={mainScreenImg}
        srcSet={`${mainScreenImgSm} 900w, ${mainScreenImg} 1700w`}
        sizes="100vw"
        fetchPriority="high"
        alt="Avalanche mountain"
        className="
          absolute
          left-0
          top-0
          z-0
          w-full
          h-full
          object-cover
          object-bottom
          pointer-events-none
          select-none
        "
      />
    </div>
  );
};

export default Mountainpng;
