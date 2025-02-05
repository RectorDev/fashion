import logos from "@/public";
import Image from "next/image";
import React from "react";

function Companies() {
  return (
    <div className="w-full padding flex flex-wrap gap-8 items-center justify-evenly bg-accent margin-t-xl padding-y-xl">
      {logos.map((item, index) => (
        <Image
          src={item.src}
          width={125}
          height={50}
          alt={item.alt}
          key={index}
        />
      ))}
    </div>
  );
}

export default Companies;
