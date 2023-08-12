"use client";
import { usePathname } from "next/navigation";

import Link from "next/link";
import React from "react";
import { useAuth } from "../../auth/Authcontext";

const List = () => {
   const { isLoggedIn, setIsLoggedIn } = useAuth();
  const navLinks = [
    {
      href: "/menu",
      name: "MENU",
    },
    {
      href: "/about",
      name: "ABOUT US",
    },
    {
      href: "/contact",
      name: "CONTACT",
    },
    // Show the "CART" link only if the user is logged in
    ...(isLoggedIn
      ? [
          {
            href: "/cart",
            name: "CART",
          },
        ]
      : []),
    {
      href: "/account",
      name: "ACCOUNT",
    },
  ];

  const pathname = usePathname();

  return (
    <div className="flex justify-evenly w-[500px] text-l font-extralight">
      {navLinks.map((link, index) => {
        const isActive = pathname.startsWith(link.href);

        return (
          <Link
            className={isActive ? "text-gray-200" : "text-white"}
            href={link.href}
            key={index}
          >
            {link.name}
          </Link>
        );
      })}
    </div>
  );
};

export default List;
