import { useState } from "react";
import Login from "../../components/Login";
import Signup from "../../components/Signup";

import { useSelector, useDispatch } from "react-redux";
import { setCurrUser } from "../../store/userSlice";

export default function Landingpage() {
  // const currUser = useSelector((state) => state.user.currUser);
  const dispatch = useDispatch();
  const [show, setShow] = useState(true);
  return (
    <div>
      {show ? (
        <Login
          setCurrUser={(user) => dispatch(setCurrUser(user))}
          setShow={setShow}
        />
      ) : (
        <Signup
          setCurrUser={(user) => dispatch(setCurrUser(user))}
          setShow={setShow}
        />
      )}
    </div>
  );
}
