import "./navbar.styles.css";
import React from "react";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { signOutFromApp } from "../../firebase";
import { getAuth } from "firebase/auth";

const NavBar = () => {
  const auth = getAuth();

  return (
    <div className="nav-bar">
      <Link className="logo" to="/e-com">
        <Logo />
      </Link>
      <ul className="nav-links">
        <li>
          <Link to="/e-com/">Home</Link>
        </li>
        <li>
          <Link to="/e-com/shop">Shop</Link>
        </li>
        {auth.currentUser ? (
          <li onClick={signOutFromApp}>Sign-out</li>
        ) : (
          <Link to={"/e-com/sign-in-sign-up"}>
            <li>Sign-in</li>
          </Link>
        )}
      </ul>
    </div>
  );
};

export default NavBar;
