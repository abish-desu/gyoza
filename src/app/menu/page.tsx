import React from 'react';
import data from '../data';

import { Great_Vibes } from "@next/font/google";
const vibes = Great_Vibes({ weight: "400", subsets: ["latin"] });

const Menu = () => {
  return (
    <>
    <h1 className={`${vibes.className} text-center m-10 text-3xl head `}>OUR &nbsp;&nbsp;SPECIALITY</h1>
    <div className='grid grid-cols-3 md:grid-cols-3 grid-rows-3 md:grid-rows-2 mx-64 gap-y-20'>
     
      {data.map((dat) => {
        const { id, name, price_1, price_2, desc, img } = dat;
        return (
    <div className='btn'>
          <div key={id} className='flex justify-evenly'>
            <img src={img} className='w-44 h-44 rounded-xl'></img>
            <div className={`${vibes.className} text-center text-sm mt-6`}>
              <h3>{name}</h3>
              <div className='text-xs'>
              <h3 className='mt-8'>CHICKEN  : {price_1}</h3>
              <h3>BUFF : {price_2}</h3>
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
