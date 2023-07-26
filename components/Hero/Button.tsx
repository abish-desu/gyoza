import React from 'react';

const Button = () => {
  return (
    <div className='flex justify-center mt-8 btn'>
      <button
        className="outline-none border border-white p-2 mb-4 rounded-3xl bg-transparent ml-2 text-white text-xl pl-4 pr-4 transition-transform duration-300 hover: hover:scale-105 hover:text-xl"
        type="submit"
      >
        Order now
      </button>
    </div>
  );
};

export default Button;
