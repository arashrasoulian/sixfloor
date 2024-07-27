// src/components/navbar/Navbar.js
import { Nav } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { clearCurrUser } from '../../store/userSlice';
import Logout from "../Logout";

export function Navbar() {
  const dispatch = useDispatch();
  const currUser = useSelector((state) => state.user.currUser);
  return (
    <Nav className="navbar-container">
      Hello {currUser.user.name}
      <Logout setCurrUser={() => dispatch(clearCurrUser())} />
    </Nav>
  );
}
