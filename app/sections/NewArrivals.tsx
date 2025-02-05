import ArrivalCard from "@/components/ArrivalCard";
import { cards, vector8 } from "@/public";
import Image from "next/image";
import React from "react";

function NewArrivals() {
  return (
    <div className="max-container mx-auto my-0 margin-t-2xl">
      <h2 className="uppercase z-10 w-fit font-poppins font-black text-5xl relative">
        new arrivvals
        <Image
          className="absolute -z-10 right-0 -bottom-2 max-sm:right-7"
          src={vector8}
          width={150}
          height={25}
          alt="design vector"
        />
      </h2>


      <div className="flex justify-evenly gap-10 mt-20 flex-wrap">
        {cards.map((item,index)=>(<ArrivalCard key={index} title={item.title} srcIMG={item.src} altIMG={item.alt} />))}
      </div>
    </div>
  );
}

export default NewArrivals;
