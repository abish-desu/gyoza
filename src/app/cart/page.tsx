"use client"
import React, { useState, useEffect } from 'react';
import { useAuth } from '../../../auth/Authcontext';

function Page() {
  const { userId } = useAuth();
  const [cartData, setCartData] = useState<{ itemId: number, quantity: number, price: number, total: number, name: String }[]>([]);
  const [totalAmount, setTotalAmount] = useState<number>(0); // Initialize total amount

  useEffect(() => {
    async function fetchCartData() {
      try {
        const response = await fetch(`http://localhost:3001/cart/${userId}`);
        const jsonData = await response.json();
        setCartData(jsonData.cart);

        // Calculate total amount when cart data changes
        const total = jsonData.cart.reduce((acc:any, item:any) => acc + item.total, 0);
        setTotalAmount(total);
      } catch (error) {
        console.error('Error fetching cart data:', error);
      }
    }

    fetchCartData();
  }, [userId]);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex items-center justify-center  head my-10">
        <h1 className={`text-2xl mx-4`}>Your &nbsp;Cart</h1>
      </div>
      <ul className="list-none p-0 m-0">
        {cartData.map(item => (
          <li key={item.itemId} className="mb-2 text-lg">
            Item: {item.name},&nbsp;&nbsp;&nbsp; Quantity: {item.quantity},&nbsp;&nbsp;&nbsp; Price: {item.price},&nbsp;&nbsp;&nbsp; Total: {item.total}
          </li>
        ))}
      </ul>
     <h1 className='text-lg mb-2 mt-4'>Grand Total &nbsp;:&nbsp; {totalAmount}</h1>
     <button
        className="outline-none border border-white p-2 mt-4  rounded-3xl bg-transparent ml-2 text-white text-xl pl-4 pr-4 transition-transform duration-300 hover: hover:scale-105 hover:text-xl"
        type="submit"
        onClick={()=>{
          alert("Thank You")
        }}
      >
        Check Out
      </button>    </div>
  );
}

export default Page;
