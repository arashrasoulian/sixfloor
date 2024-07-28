// src/components/navbar/Navbar.js
import { Nav } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { clearCurrUser } from "../../store/userSlice";
import Logout from "../Logout";

export function Navbar() {
  const dispatch = useDispatch();
  const currUser = useSelector((state) => state.user.currUser);
  console.log("curuser", currUser);
  return (
    <Nav className="navbar-container">
      Hello {currUser ? currUser.name : null}
      <div className="logout-button-navbar">
        <Logout setCurrUser={() => dispatch(clearCurrUser())} />
          
      </div>
    </Nav>
  );
}
