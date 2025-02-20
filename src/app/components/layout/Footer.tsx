import React from "react";

interface Props {
  text: string;
}

function Footer({ text }: Props) {
  return (
    <div className="absolute w-[280px] h-[45px] md:w-[300px] md:h-[48px] lg:w-[320px] lg:h-[50px] xl:w-[345px] xl:h-[52px] bottom-[50px] left-8 md:bottom-[60px] md:left-10 lg:botton-[75px] lg:left-12 xl:bottom-[90px] xl:left-16">
      <p
        className="
  text-[14px] leading-[22px] tracking-[-0.15px]  /* Default for small screens */
  md:text-[15px] md:leading-[24px] md:tracking-[-0.2px] 
  xl:text-[16px] xl:leading-[25.6px] xl:tracking-[-0.25px]
 text-white"
      >
        {text}
      </p>
    </div>
  );
}

export default Footer;
