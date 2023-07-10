import React from "react";
import { Button } from "./ui/button";
import { Trees } from "lucide-react";

const Header = () => {
  return (
    <section className="flex flex-col bg-[#F0EAD2] items-center justify-between p-24">
      <div className="mb-10">
        <Trees size={64} className="text-[#6C584C]" />
      </div>
      <div className="relative flex text-center place-items-center md:text-6xl text-4xl">
        Revolutionize Your Business
      </div>
      <div className="mt-10">
        <Button className="mx-2 text-base bg-[#A98467]">Learn More</Button>
        <Button className="mx-2 text-base bg-[#ADC178]">Get Started</Button>
      </div>
    </section>
  );
};

export default Header;
