import { vector } from "@/public";
import Image from "next/image";
import React from "react";
import Button from "./Button";
import Link from "next/link";

const navigates: string[] = ["catalogue", "fashion", "favourite", "lifestyle"];
function Navbar() {
  return (
    <nav className="sticky font-poppins backdrop-blur-sm">
      <div className="max-md:hidden flex items-center justify-between padding-x-xl padding">
        {/* left */}
        <div className="flex items-center text-4xl gap-2 font-black uppercase">
          <Image src={vector} width={30} height={30} alt="Logo" />
          fashion
        </div>
        {/* right */}
        <div className="flex items-center uppercase font-medium text-xl">
          {/* navs */}
          <div className="flex pr-14">
            <ul className="flex items-center justify-between gap-16 max-xl:gap-4 ">
              {navigates.map((item, index) => (
                <li className="hover:text-secondary/80 transition-colors duration-200" key={index}>
                  <Link href="#">{item}</Link>
                </li>
              ))}
            </ul>
          </div>
          {/* user auth */}
          <div className="uppercase">
            <Button classes="bg-secondary hover:bg-secondary/80 text-primary">SIGN UP</Button>
          </div>
        </div>
      </div>
      <div className="max-sm:block"></div>
    </nav>
  );
}

export default Navbar;
