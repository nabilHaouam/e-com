import "./sign-in-sign-up.styles.css";
import React from "react";
import Button from "@mui/material/Button";
import { signInWithGoogle } from "../../firebase";
import { ReactComponent as GoogleLogo } from "../../assets/google.svg";

const SignInSignUp = () => {
  return (
    <div className="sign-in-sign-up">
      <Button variant="outlined" onClick={signInWithGoogle} disableElevation>
        <GoogleLogo /> Sign with Google
      </Button>
    </div>
  );
};

export default SignInSignUp;
