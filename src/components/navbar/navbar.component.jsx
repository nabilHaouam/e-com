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
      <Link className="logo" to="/">
        <Logo />
      </Link>
      <ul className="nav-links">
        <li>
          <Link to="/#/">Home</Link>
        </li>
        <li>
          <Link to="/#/shop">Shop</Link>
        </li>
        {auth.currentUser ? (
          <li onClick={signOutFromApp}>Sign-out</li>
        ) : (
          <Link to={"/#/sign-in-sign-up"}>
            <li>Sign-in</li>
          </Link>
        )}
      </ul>
    </div>
  );
};

export default NavBar;
