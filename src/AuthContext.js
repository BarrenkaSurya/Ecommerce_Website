import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const signUp = async (email, password) => {
    // Replace with actual sign-up logic
    console.log('Signing up with', email, password);
    setUser({ email });
    return true;
  };

  const signIn = async (email, password) => {
    // Replace with actual sign-in logic
    console.log('Signing in with', email, password);
    setUser({ email });
    return true;
  };

  const signOut = () => {
    setUser(null);
  };

  const isAuthenticated = () => {
    return !!user;
  };

  return (
    <AuthContext.Provider value={{ user, signUp, signIn, signOut, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};


