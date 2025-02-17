import { group86 } from "@/public";
import Image from "next/image";
import React from "react";

function DownloadApp() {
  return (
    <div className="flex justify-between items-center max-md:flex-col margin-t-xl">
      <div className="flex flex-1 flex-col padding-x-xl">
        <p className="text-5xl max-md:text-4xl font-black uppercase leading-normal padding">download app & get the voucher</p>
        <p className="text-2xl max-md:text-xl font-normal text-info padding-x w-2/3">Get 30% off first transaction using Rondovision mobile app for now.ّ</p>
      </div>
      <div className="flex flex-1">
        <Image className="object-contain" alt="Moblie screen" src={group86} />
      </div>
    </div>
  );
}

export default DownloadApp;
