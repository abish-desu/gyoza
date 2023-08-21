"use client"
import React, { createContext, useContext, useState, ReactNode, useEffect, Dispatch, SetStateAction } from "react";

interface AuthContextType {
  isLoggedIn: boolean;
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
  token: string;
  setToken: Dispatch<SetStateAction<string>>;
  userId: string;
  setUserId: Dispatch<SetStateAction<string>>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState('');
  const [userId, setUserId] = useState('');

  // Load token and userId from localStorage on initialization
  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    const storedUserId = localStorage.getItem('userId');

    if (storedToken && storedUserId) {
      setToken(storedToken);
      setUserId(storedUserId);
      setIsLoggedIn(true); // Set isLoggedIn to true if token and userId are present
    }
  }, []);

  const value: AuthContextType = {
    isLoggedIn,
    setIsLoggedIn,
    token,
    setToken,
    userId,
    setUserId,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
