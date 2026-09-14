import React from "react";

const FloatingAvatext = () => {
  return (
    <div className="absolute inset-0 ">
      <h1
        className="
          absolute
          inset-0
          z-[1]
          flex
          h-full
          w-full
          items-center
          justify-center

          whitespace-nowrap

          gap-[0.18em]
          translate-y-[-200px]

          font-body
          text-[11vw]
          font-black
          uppercase
          leading-none
          tracking-[0.07em]

          pointer-events-none
        "
      >
        {"AVALANCHE".split("").map((letter, index) => (
          <span
            key={index}
            className="avalanche-letter"
            style={{
              animationDelay: `${index * 0.08}s`,
            }}
          >
            {letter}
          </span>
        ))}
      </h1>
    </div>
  );
};

export default FloatingAvatext;
