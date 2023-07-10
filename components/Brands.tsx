import React from "react";
import { Bitcoin, Github, Twitter } from "lucide-react";

const Brands = () => {
  return (
    <div className="text-[#A98467]">
      <div className="text-5xl">
        <h1>Trusted by Top Brands.</h1>
      </div>
      <div className="flex gap-20 justify-center text-center mt-10">
        <div>
          <Github size={60} className="text-white" />
          Github
        </div>
        <div>
          <Bitcoin
            size={60}
            className="rounded-full text-white bg-orange-400"
          />
          Bitcoin
        </div>
        <div>
          <Twitter fill="#1DA1F2" className="text-[#1DA1F2]" size={60} />
          Github
        </div>
      </div>
    </div>
  );
};

export default Brands;
