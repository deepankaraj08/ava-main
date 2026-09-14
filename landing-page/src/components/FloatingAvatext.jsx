import React from "react";

const FloatingAvatext = () => {
  return (
    <div className="absolute inset-0 z-10 pointer-events-none flex justify-center items-start pt-[8.5vh] sm:pt-[10vh] md:pt-0 md:items-center">
      <h1
        className="
          flex
          items-center
          justify-center
          whitespace-nowrap
          gap-[0.14em] sm:gap-[0.18em]
          translate-y-0 md:translate-y-[-200px]
          font-body
          text-[9vw] md:text-[5.5vw]
          font-black
          uppercase
          leading-none
          tracking-[0.05em] sm:tracking-[0.07em]
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
