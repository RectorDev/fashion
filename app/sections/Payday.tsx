import Button from "@/components/Button";
import { banner2LeftPart, banner2RightPart, bannerPart } from "@/public";
import Image from "next/image";
import React from "react";

function Payday() {
  return (
    <div className="w-full flex gap-0 relative mt-10 mx-auto justify-center items-center ">
      {/* left side */}
      <div className="flex-1">
        <Image
          className="object-cover absolute left-0 max-2xl:hidden top-0 flex aspect-square w-1/2"
          alt="banner part"
          src={banner2LeftPart}
        />
      </div>
      {/* right side */}
      <div className="flex-1 flex flex-col max-sm:justify-center">
        <Image
          className="object-cover max-2xl:w-full max-2xl:h-full max-2xl:object-cover absolute right-0 top-0 -z-20 aspect-square w-1/2 flex"
          src={banner2RightPart}
          alt="banner"
        />
        <h2 className="text-8xl relative max-sm:text-7xl   pt-20 mt-20 z-20 max-sm:leading-snug font-black leading-tight padding-x">
          <p className="relative uppercase z-10">
            payday
            <Image
              className="absolute -top-3 -left-6 -z-40 "
              src={bannerPart}
              width={500}
              height={100}
              alt="banner part"
            />
          </p>
          <p className="z-10 text-secondary uppercase">Sale now</p>
        </h2>
        <div className="padding-x 2xl:mt-6">
          <p className=" text-4xl max- z-50 w-[80%] text-secondary font-normal mb-4 2xl:mb-6 ">
            Spend minimal %100 get 30% off voucher for your next purchase
          </p>
          <span className="font-black text-4xl">
            1 June - 10 June 2021
          </span>
          <p className="font-normal max-sm:mt-4  max-2xl:w-full padding-y-sm text-secondary text-4xl">
            *Terms & Conditions apply
          </p>
        </div>
        <Button classes="flex flex-0 border 2xl:ml-14 bg-secondary text-primary py-6 px-12 uppercase font-medium rounded-xl hover:bg-secondary/90 ml-2 mt-6 relative text-3xl">
          Shop Now
        </Button>
      </div>
    </div>
  );
}

export default Payday;
