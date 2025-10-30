import React, {createContext, useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

export const AuthFormContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) setUser(storedUser);
  }, []);

  useEffect(() => {
    if (user) localStorage.setItem("user", JSON.stringify(user));
    else localStorage.removeItem("user");
  }, [user]);
  const registerUser = (data) => {
    // Save new user locally
    localStorage.setItem("registeredUser", JSON.stringify(data));
    alert("Registration successful!");
    navigate("/login");
  };

  const login = (data) => {
    const stored = JSON.parse(localStorage.getItem("registeredUser"));
    if (
      stored &&
      stored.email === data.email &&
      stored.password === data.password
    ) {
      setUser(stored);
      alert("Login successful!");
      navigate("/dashboard");
    } else {
      alert("Invalid email or password!");
    }
  };

  const logout = () => {
    setUser(null);
    navigate("/login");
  };

  return (
    <AuthFormContext.Provider value={{ user, registerUser, login, logout }}>
      {children}
    </AuthFormContext.Provider>
  );
}

// export default AuthFormContext
