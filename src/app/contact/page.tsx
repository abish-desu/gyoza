"use client";
import React, { useState, ChangeEvent } from "react";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTiktok } from "react-icons/bs";
import { useAuth } from "../../../auth/Authcontext";
const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { isLoggedIn } = useAuth();

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
  };

  const handleSendClick = () => {
    if(isLoggedIn){
    alert("Your Message has been Sent");

    setEmail("");
    setMessage("");
  }else{
    alert("Please Login first")
    setEmail("");
    setMessage("");
  }
}

  return (
    <div className="flex items-center justify-center mt-2">
      <div className="w-full max-w-md mt-6">
        <h1 className="text-center text-2xl font-bold text-gray-400">
          SAY 'HI' TO US
        </h1>
        <div className="relative flex items-center mt-6">
          <span className="absolute">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </span>

          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            className="block w-full py-3 text-gray-700  border rounded-lg px-11 bg-transparent dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            placeholder="Email address"
          ></input>
        </div>
        <div className="relative flex items-center mt-6">
          <textarea
            value={message}
            onChange={handleMessageChange}
            className="block w-full py-3 h-32 text-gray-700  border rounded-lg px-11 bg-transparent dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            placeholder="Your Message"
          ></textarea>
        </div>
        <div className="mt-6">
          <button
            onClick={handleSendClick}
            className="w-24 px-6 py-3 text-sm font-medium tracking-wide te capitalize transition-colors duration-300 transSignUp bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
          >
            Send
          </button>
        </div>
        <div className="flex items-center mt-20">
          <hr className="flex-grow border-gray-400 dark:border-gray-600" />
          <span className="mx-4 text-sm text-gray-400">OUR SOCIALS</span>
          <hr className="flex-grow border-gray-400 dark:border-gray-600" />
        </div>
        <div className="flex justify-center text-2xl text-gray-300 items-center mt-4">
          <BsFacebook className="mx-4" />
          <BsInstagram className="mx-4" />
          <BsTiktok className="mx-4" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
