"use client"
import React, { useState } from 'react';
import SignUp from '../../../components/SignUp/SignUp';
import Login from '../../../components/Login/Login';

const Page = () => {
  const [activeLink, setActiveLink] = useState('signin');

  const handleLinkClick = (link:any) => {
    setActiveLink(link);
  };

  const handleSignUpLinkClick = () => {
    setActiveLink('signup');
  };
  const handleSignInLinkClick = () => {
    setActiveLink('signin');
  };

  return (
    <section className="mt-10">
      <div className="flex items-center justify-center">
        <form className="w-full max-w-md">
          <div className="flex items-center justify-center mt-6">
            <button
              type="button" 
              className={`w-1/3 pb-4 font-medium text-center capitalize border-b-2 ${
                activeLink === 'signin' ? 'border-blue-500 dark:border-blue-400' : 'dark:text-gray-300'
              }`}
              onClick={() => handleLinkClick('signin')}
            >
              sign in
            </button>
            <button
              type="button" 
              className={`w-1/3 pb-4 font-medium text-center capitalize border-b-2 ${
                activeLink === 'signup' ? 'border-blue-500 dark:border-blue-400 dark:text-gray-300' : 'dark:border-gray-400 dark:text-gray-300'
              }`}
              onClick={() => handleLinkClick('signup')}
            >
              sign up
            </button>
          </div>
          {activeLink === 'signup' ? <SignUp onSignInLinkClick={handleSignInLinkClick}/> : <Login onSignUpLinkClick={handleSignUpLinkClick}/>}
        </form>
      </div>
    </section>
  );
};

export default Page;
