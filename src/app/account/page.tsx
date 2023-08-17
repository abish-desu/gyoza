"use client"
import React, { useState } from "react";
import axios from "axios";
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
  const router = useRouter();

  const handleSignSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3001/account", {
        name,
        email,
        password,
        isLoggedInData: false,
      });

      if (response.data === "Success") {
        alert("Registration successful!");
        setActiveLink("signin");
      } else {
        alert("Registration failed. Please try again.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggingIn(true);

    try {
      const response = await axios.post("http://localhost:3001/account", {
        name,
        password,
        isLoggedInData: true,
      });

      if (response.data.Status === "Success") {
        setIsLoggedIn(true);
        router.replace("/");
      } else {
        setIsLoggingIn(false);
        alert("Login failed. Please check your credentials.");
      }
    } catch (error) {
      setIsLoggingIn(false);
      console.log(error);
      alert("An error occurred while logging in.");
    }
  };

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };

  const handleSignUpLinkClick = () => {
    setActiveLink("signup");
  };

  const handleSignInLinkClick = () => {
    setActiveLink("signin");
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

  const renderContent = () => {
    if (isLoggedIn && !isLoggingIn) {
      return (
        <div className="flex items-center justify-center mt-2">
          <div className="max-w-md mt-6">
            <h1 className="text-center text-2xl font-bold text-gray-400">
              Hey ..... You are Logged In!
            </h1>
            <div className="flex justify-center">
              <button
                className="mt-8 w-[100px] px-6 py-3 text-sm font-medium tracking-wide text capitalize transition-colors duration-300 transSignUp bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                onClick={() => {
                  setIsLoggedIn(false);
                  alert("Logged Out");
                }}
              >
                Log Out
              </button>
            </div>
          </div>
        </div>
      );
    } else {
      return (
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
      );
    }
  };

  return <>{renderContent()}</>;
};

export default Page;
