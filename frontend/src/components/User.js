// src/components/User.js
import Signup from "./Signup";
import Login from "./Login";
import Homepage from "../pages/homepage/Homepage";
import { Navbar } from "./navbar/Navbar";
import { useSelector, useDispatch } from 'react-redux';

import Landingpage from "../pages/landingpage/Landingpage";

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
    <div>
      <Landingpage/>
    </div>
  );
};

export default User;
