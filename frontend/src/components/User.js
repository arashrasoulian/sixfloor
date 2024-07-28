// src/components/User.js

import Homepage from "../pages/homepage/Homepage";
import { Navbar } from "./navbar/Navbar";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Landingpage from "../pages/landingpage/Landingpage";
import SigninPage from "../pages/signinsignup/Signin";
import SignupPage from "../pages/signinsignup/Signup";

const User = () => {
  const currUser = useSelector((state) => state.user.currUser);

  if (currUser)
    return (
      <div>
        <Navbar />
        <Homepage currUser={currUser} />
      </div>
    );

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </Router>
  );
};

export default User;
