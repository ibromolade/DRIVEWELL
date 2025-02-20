import Link from "next/link";
import React from "react";

interface Props {
  text: string;
  href: string;
}

function Button({ text, href }: Props) {
  return (
    <Link
      href={href}
      className="
    w-full max-w-[420px]
    h-[48px] sm:h-[50px] md:h-[54px] lg:h-[58px] 
    rounded-[14px] bg-[#403BE2] 
    flex items-center justify-center text-[#F5F5F5] text-[14px] sm:text-[15px] md:text-[16px] 
    font-bold leading-[22px] sm:leading-[24px] md:leading-[24.8px] 
    tracking-[-0.15px] sm:tracking-[-0.2px] md:tracking-[-0.25px] 
    text-center font-satoshi 
  "
    >
      {text}
    </Link>
  );
}

export default Button;
