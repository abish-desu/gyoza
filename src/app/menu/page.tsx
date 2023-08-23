"use client";
import React, { useState } from "react";
import data from "../data";
import { useRouter } from "next/navigation";

import { useAuth } from "../../../auth/Authcontext";
import axios from "axios";
interface MenuItem {
  id: number;
  name: string;
  price_1: number;
  
  desc: string;
  img: string;
}

const Menu: React.FC = () => {
  const { isLoggedIn, setIsLoggedIn, userId } = useAuth();
  const router = useRouter();

  const [itemQuantities, setItemQuantities] = useState<{
    [itemId: number]: number;
  }>({});
  const addToCart =async (itemId: number, quantity: number,price_1:number,name:String) => {
   
    if (isLoggedIn) {
      console.log("F1");
      try {
        const response = await axios.put("http://localhost:3001/menu", {
          userId,
        name,
          itemId,
          quantity,
          price_1
        });

        if (response.data.status === "Success") {
          resetItemQuantity(itemId); 
          // Successfully added to cart

          alert("Item added to cart!");
        } else {
          alert("Failed to add item to cart.");
        }
      } catch (error) {
        console.log("Error adding to cart:", error);
        alert("An error occurred while adding item to cart.");
      }
    } else {
      router.push("/account");
      alert("Please Login First");
    }
  };
  const resetItemQuantity = (itemId: number) => {
    setItemQuantities((prevQuantities) => ({
      ...prevQuantities,
      [itemId]: 0,
    }));
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
      <div className="flex items-center justify-center  head my-10">
        <div className="w-full max-w-md">
          <div className=" flex items-center">
            <hr className="flex-grow" />
            <h1 className={` text-2xl mx-4 `}>OUR &nbsp;SPECIALITY</h1>
            <hr className="flex-grow" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-3 grid-rows-3 md:grid-rows-2 mx-36 gap-y-20 gap-x-10">
        {data.map((dat: MenuItem) => {
          const { id, name,  price_1, desc, img } = dat;
          const quantity = itemQuantities[id] || 0;

          return (
            <div className="btn" key={id}>
              <div className="flex justify-evenly">
                <img
                  src={img}
                  className="w-60 h-44 rounded-xl"
                  alt={name}
                ></img>
                <div className={` text-center mt-4 w-[160px]`}>
                  <h3 className="text-lg">{name}</h3>
                  <div className="text-xs mt-3">
                  
                    <h3 className="mt-1">BUFF &nbsp;: &nbsp;{price_1}</h3>
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
                  <div className="flex justify-center text-sm font-sans mt-3">
                    <button
                      className="outline-none border border-white rounded-3xl bg-transparent px-3 py-1"
                      onClick={() => {
                        addToCart(id, quantity,price_1,name);
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
