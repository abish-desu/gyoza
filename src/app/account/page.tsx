"use client";

import axios from "axios";
import React, { useState,useEffect } from "react";
import SignUp from "../../../components/SignUp/SignUp";
import Login from "../../../components/Login/Login";
import { useRouter } from "next/navigation";
import { useAuth } from "../../../auth/Authcontext";
const Page = () => {
  const [activeLink, setActiveLink] = useState("signin");
  
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const router = useRouter()
  
 
  const handleSignSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    axios.post('http://localhost:3001/account', { name, email, password, isLoggedInData: false }) // Set isLoggedInData to false for sign up
      .then(res => {
        if (res.data === "Success") {
          alert("Registration successful!"); // Show an alert for success
          setActiveLink("signin");
        } else {
          alert("Registration failed. Please try again.");
        }
      }).catch(err => console.log(err));
  };
  
  const handleLogSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggingIn(true); // Start the loading state
    
    try {
      const response = await axios.post('http://localhost:3001/account', { name, password, isLoggedInData: true });
      if (response.data.Status === "Success") {
        setIsLoggedIn(true);
        return void router.replace('/');
      } else {
        setIsLoggingIn(false); // Reset the loading state
        alert("Login failed. Please check your credentials.");
      }
    } catch (error) {
      setIsLoggingIn(false); // Reset the loading state
      console.log(error);
      alert("An error occurred while logging in.");
    } 
  };
        
       

  const handleNameChange = (value: string) => {
    setName(value);
  };

  const handleEmailChange = (value: string) => {
    setEmail(value);
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
  };

  const handleLinkClick = (link: any) => {
    setActiveLink(link);
  };

  const handleSignUpLinkClick = () => {
    setActiveLink("signup");
  };
  const handleSignInLinkClick = () => {
    setActiveLink("signin");
  };

 return (
  isLoggedIn &&  !isLoggingIn ? (
    <h1>Hello You are logged</h1>
  ) : (
    <section className="mt-10">
      <div className="flex items-center justify-center">
        <div className="w-full max-w-md">
          {isLoggingIn ? (
            <div className="w-full h-full flex items-center justify-center">
              <p>Loading...</p>
            </div>
          ) : (
            <div>
              <div className="flex items-center justify-center mt-6">
                <button
                  type="button"
                  className={`w-1/3 pb-4 font-medium text-center capitalize border-b-2 ${
                    activeLink === "signin"
                      ? "border-blue-500 dark:border-blue-400"
                      : "dark:text-gray-300"
                  }`}
                  onClick={() => handleLinkClick("signin")}
                >
                  sign in
                </button>
                <button
                  type="button"
                  className={`w-1/3 pb-4 font-medium text-center capitalize border-b-2 ${
                    activeLink === "signup"
                      ? "border-blue-500 dark:border-blue-400 dark:text-gray-300"
                      : "dark:border-gray-400 dark:text-gray-300"
                  }`}
                  onClick={() => handleLinkClick("signup")}
                >
                  sign up
                </button>
              </div>

              {activeLink === "signup" ? (
                <SignUp
                  onSignInLinkClick={handleSignInLinkClick}
                  onNameChange={handleNameChange}
                  onEmailChange={handleEmailChange}
                  onPasswordChange={handlePasswordChange}
                  onSubmit={handleSignSubmit}
                />
              ) : (
                <Login 
                  onSignUpLinkClick={handleSignUpLinkClick}
                  onNameChange={handleNameChange}
                  onPasswordChange={handlePasswordChange}
                  onSubmit={handleLogSubmit}
                />
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  )
);

};

export default Page;
