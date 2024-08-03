import React from "react";
import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
} from "react-router-dom";
import { Navbar } from "./navbar/Navbar";
import { Profile } from "../pages/profile/Profile";

import Homepage from "../pages/homepage/Homepage";
import Landingpage from "../pages/landingpage/Landingpage";
import Signin from "../pages/signinsignup/Signin";
import Signup from "../pages/signinsignup/Signup";

const ProtectedRoute = ({ children ,currUser}) => {
  console.log("pro",currUser);
  // const { isAuthenticated } = useAuth();
  return currUser ? children : <Navigate to="/landing" replace />;
};

// Public Route component (accessible only when not authenticated)
const PublicRoute = ({ children ,currUser}) => {
  console.log("pub",currUser);

  // const { isAuthenticated } = useAuth();
  return !currUser ? children : <Navigate to="/home" replace />;
};



const User = () => {
  const currUser = useSelector((state) => state.user.currUser);


  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              currUser ? (
                <Link to="/home"  replace/>
              ) : (
                <Link to="/landing" replace />
              )
            }
          />
          <Route
            path="/landing"
            element={
              <PublicRoute currUser={currUser}>
                <Landingpage />
              </PublicRoute>
            }
          />
          <Route
            path="/signin"
            element={
              <PublicRoute currUser={currUser}>
                <Signin />
              </PublicRoute>
            }
          />
          <Route
            path="/signup"
            element={
              <PublicRoute>
                <Signup />
              </PublicRoute>
            }
          />
          <Route
            path="/home"
            element={
              <ProtectedRoute currUser={currUser}>
                <Homepage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute currUser={currUser}>
                <Profile />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default User;
