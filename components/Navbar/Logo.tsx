import React from "react";
import { Great_Vibes } from "@next/font/google";
import Link from "next/link";
const vibes = Great_Vibes({ weight: "400", subsets: ["latin"] });
const Logo = () => {
  return (
    <Link href="/">
      <div className={`${vibes.className} text-4xl flex `}>OO</div>
    </Link>
  );
};

export default Logo;
