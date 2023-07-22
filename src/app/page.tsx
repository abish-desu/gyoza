import React from "react";
import Image from "next/legacy/image";
const page = () => {
  return (
    <div className="relative h-screen">
      <Image
        layout="fill"
        className="absoulte opacity-50 "
        alt="momo"
        src="/momo.jpeg"
      />
    </div>
  );
};

export default page;
