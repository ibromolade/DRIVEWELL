import Image from "next/image";
import React from "react";
import checked from "../../../../public/assets/images/checked.svg";
import Button from "../ui/Button";

function ConfirmationContent() {
  return (
    <div className="absolute top-[20px] right-[20px] bg-[#141821] flex justify-center items-center rounded-[30px] w-[60%] h-[745px]">
      <div className="w-[420px] h-[292px] flex flex-col justify-between items-center">
        <div className="">
          <Image src={checked} alt="Check sign" />
        </div>
        <p className="  sm:text-[20px] sm:leading-[30px] sm:tracking-[-0.2px] md:text-[22px] md:leading-[32px] md:tracking-[-0.22px]lg:text-[23px] lg:leading-[34px] lg:tracking-[-0.23px] xl:text-[24px] xl:leading-[36px] xl:tracking-[-0.25px] font-bold text-center text-white">
          Profile Created!
        </p>
        <p
          className="text-[14px] leading-[22px] tracking-[-0.15px]  /* Default for small screens */
  md:text-[15px] md:leading-[24px] md:tracking-[-0.2px]  xl:text-[16px] xl:leading-[25.6px] xl:tracking-[-0.25px] font-normal text-center text-white"
        >
          Welcome to Drivewell support team
        </p>
        <Button href="" text="Continue to Dashboard" />
      </div>
    </div>
  );
}

export default ConfirmationContent;
