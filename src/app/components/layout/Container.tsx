import Image from "next/image";
import React, { ReactNode } from "react";
import motion from "../../../../public/assets/background/motion.svg";
import logo from "../../../../public/assets/images/logo.svg";

interface Props {
  children: ReactNode;
}

function Container({ children }: Props) {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src={motion}
          alt="Decorative background"
          className="object-cover"
          fill
          priority
        />
      </div>

      <div className="absolute top-[50px] left-8 md:top-[60px] md:left-10 lg:top-[75px] lg:left-12 xl:top-[90px] xl:left-16">
        <Image
          className="w-[180px] sm:w-[200px] md:w-[230px] lg:w-[260px] xl:w-[301px"
          src={logo}
          alt="Company logo"
          priority
        />
      </div>

      <main>{children}</main>
    </div>
  );
}

export default Container;
