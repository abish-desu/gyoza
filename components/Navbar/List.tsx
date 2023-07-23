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
    <>
      {navLinks.map((link) => {
        const isActive = pathname.startsWith(link.href);

        return (
          
          <Link
            className={isActive ? "text-blue" : "text-white"}
            href={link.href}
            key={link.name}
          >{link.name}</Link>
        );
      })}
    </>
  );
};

export default List;
