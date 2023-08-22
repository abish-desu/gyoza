import React from "react";

const About = () => {
  return (
    <div className="grid grid-cols-3 gap-0 mx-52 mt-3">
      <div className="col-span-1 left">
        <div className="h-[326px] flex flex-col justify-center items-center">
          <h1 className={` text-xl`}>Reservations</h1>
          <p className="text-center px-4 pt-4">
            Secure your spot effortlessly with our convenient online reservation
            system, offering hassle-free booking for a seamless experience{" "}
          </p>
        </div>
        <img src="/reserve.png" alt="Reservation 1" className="" />
      </div>
      <div className="col-span-2 flex flex-col right">
        <img src="/reserve2.png" alt="Reservation 2" className="" />
        <div className="h-[275px] flex flex-col justify-center items-center">
          <h1 className={` text-xl flex`}>About &nbsp;Us</h1>
          <p className="text-center pt-5 px-4">
           At Sagar Dai Ko MoMo, we take pride in being a haven for momo enthusiasts. Our culinary passion drives us to craft exquisite momos, infusing flavors that delight and moments that linger
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
