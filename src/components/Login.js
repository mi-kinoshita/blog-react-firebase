import {
  getRedirectResult,
  signInWithPopup,
  signInWithRedirect,
} from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth, provider } from "../firebase";
import { useNavigate } from "react-router-dom";
import { GoogleAuthProvider } from "firebase/auth";
import "./SettingPage.css";

const Login = ({ setIsAuth }) => {
  const navigate = useNavigate();
  const loginInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate("/");
    });
  };

  return (
    <div className="settingPage">
      <p>Get Started!</p>
      <button onClick={loginInWithGoogle}>Login with Google</button>
    </div>
  );
};

export default Login;
