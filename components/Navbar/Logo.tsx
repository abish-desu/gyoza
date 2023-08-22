import React from "react";
import { Great_Vibes } from "@next/font/google";
import Link from "next/link";
const vibe = Great_Vibes({ weight: "400", subsets: ["latin"] });
const Logo = () => {
  return (
    <Link href="/">
      <div className={`${vibe.className} text-4xl flex `}>OO</div>
    </Link>
  );
};

export default Logo;
