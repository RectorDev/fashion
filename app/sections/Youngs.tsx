import { card2Mid, cardMid, vector8 } from "@/public";
import Image from "next/image";
import React from "react";
import { ArrowRight } from "lucide-react";

function Youngs() {
  return (
    <div className=" relative 2xl:mt-48 pt-36">
      <h2 className="uppercase z-10 w-fit font-poppins font-black text-5xl relative">
        new arrivvals
        <Image
          className="absolute -z-10 -right-6 -bottom-2 max-sm:right-7"
          src={vector8}
          width={150}
          height={25}
          alt="design vector"
        />
      </h2>

      <div className="margin-t-xl max-sm:flex-col flex flex-wrap justify-center gap-8">
        <div className="flex-1 flex flex-col relative">
          <Image src={cardMid} alt="trending" className="object-contain" />
          <span className="text-secondary margin-t text-3xl font-medium">
            Trending on instalgram
          </span>
          <span className="text-xl text-info mt-1 font-medium">
            Explore Now!
          </span>
          <ArrowRight
            size={40}
            className="text-info hover:text-secondary duration-200 transition-colors cursor-pointer absolute right-0 bottom-4"
          />
        </div>
        <div className="flex-1 flex flex-col relative">
          <Image src={card2Mid} alt="trending" className="object-contain" />
          <span className="text-secondary margin-t text-3xl font-medium">
            Trending on instalgram
          </span>
          <span className="text-xl text-info mt-1 font-medium">
            Explore Now!
          </span>
          <ArrowRight
            size={40}
            className="text-info hover:text-secondary duration-200 transition-colors cursor-pointer absolute right-0 bottom-4"
          />
        </div>
      </div>
    </div>
  );
}

export default Youngs;
