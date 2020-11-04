import React, { useState } from "react";
import { Button, InputGroup, FormControl } from "react-bootstrap";
import logo from "../LandingPage/Icon/companyLogo.png";
import { Link } from "react-router-dom";
import { handleContent, loginUser } from "../Auth/actions";
import styled from "./LoginModal.module.css";
import { useDispatch } from "react-redux";

function LoginModal() {
  const initialState = {
    email: "",
    password: "",
  };
  const [loginDetails, setLoginDetails] = useState(initialState);
  const dispatch = useDispatch();

  const gotoRegister = (content) => {
    dispatch(handleContent(content));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginDetails((state) => ({ ...state, [name]: value }));
  };

  const login = () => {
    dispatch(loginUser(loginDetails));
  };

  return (
    <>
      <img style={{ width: 200 }} src={logo} alt="delivery" />
      <h4>Log in to your account</h4>
      <div style={{ fontSize: 15, color: "#1f5ea9" }}>
        <div onClick={() => gotoRegister("/register")}>
          New to delivery.com? Sign up here
        </div>
      </div>
      <InputGroup>
        <FormControl
          name="email"
          onChange={handleChange}
          value={loginDetails.email}
          placeholder="Email Address"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <InputGroup>
        <FormControl
          name="password"
          onChange={handleChange}
          value={loginDetails.password}
          placeholder="Password"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <Button varient="primary" block onClick={login}>
        Log In
      </Button>
      <i className="fab fa-facebook"></i>
      <Button varient="primary" block>
        Log in With Facebook
      </Button>
      <Button varient="primary" block>
        Sign in With Google
      </Button>
    </>
  );
}

export default LoginModal;
