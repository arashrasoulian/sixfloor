// src/components/User.js
import Signup from "./Signup";
import Login from "./Login";
import Logout from "./Logout";
import PrivateText from "./PrivateText";
import Homepage from "../pages/homepage/Homepage";
import { Navbar } from "./navbar/Navbar";
import { useSelector, useDispatch } from 'react-redux';
import { setCurrUser, clearCurrUser } from '../store/userSlice';
import { useState } from 'react';

const User = () => {
  const currUser = useSelector((state) => state.user.currUser);
  const dispatch = useDispatch();
  const [show, setShow] = useState(true);

  if (currUser)
    return (
      <div>
        <Navbar />
        <Homepage currUser={currUser} />
      </div>
    );

  return (
    <div>
      {show ? (
        <Login setCurrUser={(user) => dispatch(setCurrUser(user))} setShow={setShow} />
      ) : (
        <Signup setCurrUser={(user) => dispatch(setCurrUser(user))} setShow={setShow} />
      )}
    </div>
  );
};

export default User;


