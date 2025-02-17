import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import React from "react";

function Footer() {
  return (
    <div className=" flex padding-y-2xl justify-evenly gap-7xl max-lg:flex-col items-center">
      <div className="flex flex-col justify-evenly gap ">
        <p className="font-bold font-poppins text-white uppercase text-3xl">fashion</p>
        <p className="text-white/50">Complete your style with awesome clothes from us.</p>
        <span className="flex gap-3">
          <span className="p-2 items-center flex justify-center w-fit bg-accent rounded-xl">
            <Facebook fill="true" stroke="" />
          </span>
          <span className="p-2 items-center flex justify-center w-fit bg-accent rounded-xl">
            <Instagram />
          </span>
          <span className="p-2 items-center flex justify-center w-fit bg-accent rounded-xl">
            <Twitter fill="true" stroke="" />
          </span>
          <span className="p-2 items-center flex justify-center w-fit bg-accent rounded-xl">
            <Linkedin fill="true" />
          </span>
        </span>
      </div>
      <div className="gap justify-between flex-1 flex">
        <div className="flex-col flex capitalize gap-5">
          <p className="text-primary ">Company</p>
          <span className="text-white/50">about</span>
          <span className="text-white/50">Contact us</span>
          <span className="text-white/50">support</span>
          <span className="text-white/50">careers</span>
        </div>
        <div className="flex-col flex capitalize gap-5">
          <p className="text-primary ">quick link</p>
          <span className="text-white/50">share location</span>
          <span className="text-white/50">orders tracking</span>
          <span className="text-white/50">size guide</span>
          <span className="text-white/50">FAQs</span>
        </div>
        <div className="flex-col flex capitalize gap-5">
          <p className="text-primary ">Company</p>
          <span className="text-white/50">terms & conditions</span>
          <span className="text-white/50">privacy policy</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
