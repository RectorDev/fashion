import Button from "@/components/Button";
import React from "react";

const Contact = () => {
  return (
    <div className="flex items-center justify-center bg-amber-300 padding-2xl flex-col pb-48">
      <p className="text-5xl leading-normal text-primary padding-t padding-x-2xl text-center uppercase font-black">
    <span>    <p className="padding-x">join shopping community to get monthly promo</p></span>
      </p>
      <span className="text-3xl margin-t-sm text-primary font-normal">
        Type your email down below and be young wild generation
      </span>
      <form action="post" className="rounded-lg  margin-t bg-primary flex">
        <input
          className="padding-sm outline-none bg-transparent"
          placeholder="Add your email here"
          type="text"
        />
        <Button classes="bg-secondary text-primary hover:bg-secondary/80 m-2 px-8 text-2xl">SEND</Button>
      </form>
    </div>
  );
};

export default Contact;
