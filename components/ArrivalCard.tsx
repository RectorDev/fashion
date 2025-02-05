import Image, { StaticImageData } from "next/image";
import React from "react";
import {ArrowRight} from 'lucide-react'

type Props = {
  title: string;
  altIMG: string;
  srcIMG: StaticImageData;
};

function ArrivalCard({ title, altIMG, srcIMG }: Props) {
  return (
    <div className="flex flex-col relative">
      <Image
        className="object-contain"
        src={srcIMG}
        alt={altIMG}
        width={485}
        height={700}
      />
      <span className="text-secondary margin-t text-3xl font-medium">{title}</span>
      <span className="text-xl text-info mt-1 font-medium">Explore Now!</span>
    <ArrowRight size={40} className="text-info hover:text-secondary duration-200 transition-colors cursor-pointer absolute right-0 bottom-4"/>
    </div>
  );
}

export default ArrivalCard;
