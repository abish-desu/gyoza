import React from 'react';
import { Great_Vibes } from "@next/font/google";
const vibes = Great_Vibes({ weight: "400", subsets: ["latin"] });

const About = () => {
  return (
    <div className="grid grid-cols-3 gap-0 mx-52 mt-3">
      <div className="col-span-1 left">
        <div className='h-[326px] flex flex-col justify-center items-center'>
          <h1 className={`${vibes.className} text-2xl`}>RESERVATIONS</h1>
          <p className="text-center px-4 pt-5">
            dita iste quisquam eligendi? Eum nisi iure consequatur veniam perspiciatis, maxime temporibus delectus!
          </p>
        </div>
        <img src='/reserve.png' alt="Reservation 1" className="" />
      </div>
      <div className="col-span-2 flex flex-col right">
        <img src='/reserve2.png' alt="Reservation 2" className="" />
        <div className='h-[326px] flex flex-col justify-center items-center'>
          <h1 className={`${vibes.className} text-2xl flex`}>ABOUT &nbsp;&nbsp;US</h1>
          <p className="text-center pt-5 px-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum fLorem, ipLorem, ipsum dolor placeat perferendis reprehenderit facilis modi sint expesum dolor placeat perferendis reprehenderit facilis modi sint expeugit vel dolore commodi esse optio voluptates laboriosam ad, aut, odio deserunt libero, labore voluptatum. Enim sit dolor natus perspiciatis pariatur.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
