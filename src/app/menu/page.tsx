import React from 'react';
import data from '../data';

import { Great_Vibes } from "@next/font/google";
const vibes = Great_Vibes({ weight: "400", subsets: ["latin"] });

const Menu = () => {
  return (
    <>
    <h1 className={`${vibes.className} text-center my-12 text-3xl head `}>OUR &nbsp;&nbsp;SPECIALITY</h1>
    <div className='grid grid-cols-3 md:grid-cols-3 grid-rows-3 md:grid-rows-2 mx-36 gap-y-20 gap-x-10'>
      
      {data.map((dat) => {
        const { id, name, price_1, price_2, desc, img } = dat;
        return (
    <div className='btn'>
          <div key={id} className='flex justify-evenly'>
            <img src={img} className='w-60 h-44 rounded-xl'></img>
            <div className={`${vibes.className} text-center mt-4 w-[160px]`}>
              <h3 className='text-lg'>{name}</h3>
              <div className='text-xs mt-3'>
              <h3>CHICKEN  : {price_1}</h3>
              <h3 className='mt-1'>BUFF : {price_2}</h3>
              </div> 
              
              <div className='flex justify-center text-sm font-sans mt-3'>
              <button className='mx-2 outline-none border border-white rounded-3xl bg-transparent   px-3'>-</button>
              <h1 className='mx-2'>0</h1>
              <button className='mx-2 outline-none border border-white  rounded-3xl bg-transparent px-3'>+</button>
              </div>
              <div className='flex justify-center text-sm font-sans mt-2'>
              <button className='outline-none border border-white rounded-3xl bg-transparent px-3 py-1' >Add to Cart</button>
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
