import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  
} from "react-router-dom";
import { setCurrUser } from "../store/userSlice"; // Action to set current user in Redux
import { Navbar } from "./navbar/Navbar";
import { Profile } from "../pages/profile/Profile";
import Homepage from "../pages/homepage/Homepage";
import Landingpage from "../pages/landingpage/Landingpage";
import Signin from "../pages/signinsignup/Signin";
import Signup from "../pages/signinsignup/Signup";

const ProtectedRoute = ({ children }) => {
  const currUser = useSelector((state) => state.user.currUser);
  return currUser ? children : <Navigate to="/landing" replace />;
};

const PublicRoute = ({ children }) => {
  const currUser = useSelector((state) => state.user.currUser);
  return !currUser ? children : <Navigate to="/home" replace />;
};

const User = () => {
  const currUser = useSelector((state) => state.user.currUser);
  const dispatch = useDispatch();

  useEffect(() => {
    // Check localStorage for user data on app load
    const storedUser = localStorage.getItem("currUser");
    if (storedUser) {
      dispatch(setCurrUser(JSON.parse(storedUser))); // Hydrate the state with stored user data
    }
  }, [dispatch]);

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              currUser ? (
                <Navigate to="/home" replace />
              ) : (
                <Navigate to="/landing" replace />
              )
            }
          />
          <Route
            path="/landing"
            element={
              <PublicRoute>
                <Landingpage />
              </PublicRoute>
            }
          />
          <Route
            path="/signin"
            element={
              <PublicRoute>
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
              <ProtectedRoute>
                <Homepage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
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
