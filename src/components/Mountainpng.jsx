import React from "react";

import mainScreenImg from "../assets-opt/ava_background3.webp";
import mainScreenImgSm from "../assets-opt/ava_background3-900.webp";

const Mountainpng = () => {
  return (
    <div className="absolute inset-0 z-[10]">
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
    z-[10]
    w-full
    h-auto
    translate-y-[130px]

    pointer-events-none
    select-none
  "
/>

    </div>
  );
};

export default Mountainpng;
