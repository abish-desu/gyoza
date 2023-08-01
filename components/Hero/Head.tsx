import React from "react";
import { Great_Vibes } from "@next/font/google";
const vibes = Great_Vibes({ weight: "400", subsets: ["latin"] });

const Head = () => {
  return (
    <>
    <div
      className={`${vibes.className} text-7xl flex justify-center mt-44 head`}
    >
      MoMo &nbsp;&nbsp;Mero &nbsp;&nbsp;Sathi
    </div>
    </>

  );
};

export default Head;
