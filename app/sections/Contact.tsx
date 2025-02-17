import Button from "@/components/Button";
import React from "react";

const Contact = () => {
  return (
    <div className="flex items-center justify-evenly bg-amber-300 padding-x-2xl max-md:px-5 h-[50vh] max-sm:h-[66vh] flex-col">
      <p className="text-5xl max-xl:text-4xl leading-normal text-primary padding-x-2xl max-md:px-10  text-center uppercase font-black">
        <span className=" justify-center items-center flex">
          <span className="padding-x text-center">join shopping community to get monthly promo</span>
        </span>
      </p>
      <span className="text-3xl max-xl:2xl text-primary font-normal text-center">Type your email down below and be young wild generation</span>
      <form action="post" className="rounded-lg bg-primary flex">
        <input className="padding-sm outline-none bg-transparent" placeholder="Add your email here" type="text" />
        <Button classes="bg-secondary text-primary hover:bg-secondary/80 m-2 px-8 max-sm:px-4 text-2xl">SEND</Button>
      </form>
    </div>
  );
};

export default Contact;
