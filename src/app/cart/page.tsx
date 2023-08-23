"use client"
import React, { useState, useEffect } from 'react';
import { useAuth } from '../../../auth/Authcontext';

function Page() {
  const { userId } = useAuth();
  const [cartData, setCartData] = useState<{ itemId: number, quantity: number, price: number }[]>([]);

  useEffect(() => {
    async function fetchCartData() {
      try {
        const response = await fetch(`http://localhost:3001/cart/${userId}`);
        const jsonData = await response.json();
        setCartData(jsonData.cart);
      } catch (error) {
        console.error('Error fetching cart data:', error);
      }
    }
  
    fetchCartData();
  }, [userId]);
  
  return (
    <div className="flex flex-col items-center justify-center">
         <div className="flex items-center justify-center  head my-10">
   
            
            <h1 className={` text-2xl mx-4 `}>Your &nbsp;Cart</h1>
       
      </div>
      <ul className="list-none p-0 m-0">
        {cartData.map(item => (
          <li key={item.itemId} className="mb-2 text-lg">
            Item ID: {item.itemId}, Quantity: {item.quantity}, Price: {item.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Page;
