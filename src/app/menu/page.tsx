"use client";
import React, { useState } from "react";
import data from "../data";
import { useRouter } from "next/navigation";
import { Great_Vibes } from "@next/font/google";
const vibes = Great_Vibes({ weight: "400", subsets: ["latin"] });
import { useAuth } from "../../../auth/Authcontext";
interface MenuItem {
  id: number;
  name: string;
  price_1: number;
  price_2: number;
  desc: string;
  img: string;
}

const Menu: React.FC = () => {
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  const router = useRouter();

  const [itemQuantities, setItemQuantities] = useState<{
    [itemId: number]: number;
  }>({});
  const AddToCart = () => {
    if (isLoggedIn) {
      alert("Yet to update");
    } else {
      router.push("/account");
      alert("Please Login First");
    }
  };

  const incrementQuantity = (itemId: number) => {
    setItemQuantities((prevQuantities) => ({
      ...prevQuantities,
      [itemId]: (prevQuantities[itemId] || 0) + 1,
    }));
  };

  const decrementQuantity = (itemId: number) => {
    setItemQuantities((prevQuantities) => ({
      ...prevQuantities,
      [itemId]: Math.max((prevQuantities[itemId] || 0) - 1, 0),
    }));
  };

  return (
    <>
      <h1 className={`${vibes.className} text-center my-12 text-3xl head `}>
        OUR &nbsp;&nbsp;SPECIALITY
      </h1>
      <div className="grid grid-cols-3 md:grid-cols-3 grid-rows-3 md:grid-rows-2 mx-36 gap-y-20 gap-x-10">
        {data.map((dat: MenuItem) => {
          const { id, name, price_1, price_2, desc, img } = dat;
          const quantity = itemQuantities[id] || 0;

          return (
            <div className="btn" key={id}>
              <div className="flex justify-evenly">
                <img
                  src={img}
                  className="w-60 h-44 rounded-xl"
                  alt={name}
                ></img>
                <div
                  className={`${vibes.className} text-center mt-4 w-[160px]`}
                >
                  <h3 className="text-lg">{name}</h3>
                  <div className="text-xs mt-3">
                    <h3>CHICKEN : {price_1}</h3>
                    <h3 className="mt-1">BUFF : {price_2}</h3>
                  </div>
                  <div className="flex justify-center text-sm font-sans mt-3">
                    <button
                      className="mx-2 outline-none border border-white rounded-3xl bg-transparent px-3"
                      onClick={() => decrementQuantity(id)}
                    >
                      -
                    </button>
                    <h1 className="mx-2">{quantity}</h1>
                    <button
                      className="mx-2 outline-none border border-white rounded-3xl bg-transparent px-3"
                      onClick={() => incrementQuantity(id)}
                    >
                      +
                    </button>
                  </div>
                  <div className="flex justify-center text-sm font-sans mt-2">
                    <button
                      className="outline-none border border-white rounded-3xl bg-transparent px-3 py-1"
                      onClick={() => {
                        AddToCart();
                      }}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Menu;
