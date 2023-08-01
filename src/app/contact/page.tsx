import React from 'react'

const Contact = () => {
  return (
    
        <>
        <h1>Say Hi to us HeHe</h1>
            <div className="relative flex items-center mt-6">
        <span className="absolute">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </span>

        <input
          type="email"
          className="block w-full py-3 text-gray-700  border rounded-lg px-11 bg-transparent dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
          placeholder="Email address"
        ></input>
      </div>
            <div className="relative flex items-center mt-6">
    

        <input
          type="text"
          className="block w-full py-3 text-gray-700  border rounded-lg px-11 bg-transparent dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
          placeholder="Your Message"
        ></input>
      </div>

        
        </>
  
    
  )
}

export default Contact