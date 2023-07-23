"use client";
import { usePathname } from "next/navigation";

import Link from "next/link";
import React from "react";

const List = () => {
  const navLinks = [
    {
      href: "/menu",
      name: "MENU",
    },
    {
      href: "/contact",
      name: "CONTACT",
    },
    {
      href: "/about",
      name: "ABOUT US",
    },
  ];
  const pathname = usePathname();

  return (
    <div className="flex justify-evenly w-80 text-l font-extralight">
      {navLinks.map((link,index) => {
        const isActive = pathname.startsWith(link.href);

        return (
          <Link
            className={isActive ? "text-gray-500" : "text-white"}
            href={link.href}
            key={index}
          >{link.name}</Link>
          
        );
      })}
    </div>
  );
};

export default List;
