import Button from "@/components/Button";
import { banner1, bannerpart, bannerPart } from "@/public";
import Image from "next/image";
import "./banner.css";
import React from "react";

function Hero() {
  return (
    <div className="banner-1 mx-auto rounded-[3.5rem] max-sm:bg-right-bottom  font-poppins padding max-container padding-y-2xl border flex-col flex">
      <h2 className="text-[5.4rem] max-sm:text-7xl max-sm:leading-snug font-black leading-tight padding-x">
        <p className="relative z-10">
          LET`S
          <Image
            className="absolute -top-3 -left-6 -z-10"
            src={bannerPart}
            width={450}
            height={100}
            alt="banner part"
          />
        </p>
        <p className="z-10">EXPLORE</p>
        <p className="relative z-10">
          UNIQUE
          <Image
            className="absolute -top-3 -left-6 -z-10"
            src={bannerpart}
            width={475}
            height={100}
            alt="banner part"
          />
        </p>{" "}
        <p className="">CLOTH</p>
      </h2>
      <p className="font-medium text-2xl padding">
        Live for influential and innovative fashion!
      </p>
      <Button classes="flex margin-x flex-0 border bg-secondary text-primary py-6 px-10 rounded-xl hover:bg-secondary/90 ml-2 mt-8 relative text-3xl">
        Shop Now
      </Button>
    </div>
  );
}

export default Hero;
