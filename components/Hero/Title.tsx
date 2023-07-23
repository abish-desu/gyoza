import React from "react";
import { Great_Vibes } from "@next/font/google";
const vibes = Great_Vibes({ weight: "400", subsets: ["latin"] });

const Hero = () => {
  return (
    <div className="flex justify-center mt-44">
      <div className={`${vibes.className} text-7xl`}>MoMo &nbsp;&nbsp;Mero &nbsp;&nbsp;Sathi</div>
    </div>
  );
};

export default Hero;
