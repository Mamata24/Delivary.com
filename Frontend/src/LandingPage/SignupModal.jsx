import React from "react";
import { Button, InputGroup, FormControl } from "react-bootstrap";
import logo from "../LandingPage/Icon/companyLogo.png";
import { Link } from "react-router-dom";
import { handleContent } from "../Auth/actions";
import { useDispatch } from "react-redux";

function SignupModal() {
  const dispatch = useDispatch();
  const goToLogin = (content) => {
    dispatch(handleContent(content));
  };
  return (
    <>
      <img style={{ width: 200 }} src={logo} alt="delivery" />
      <h4>Log in to your account</h4>
      <div style={{ fontSize: 15, color: "#1f5ea9" }}>
        <div onClick={() => goToLogin("/login")}>
          Already registered? Login.
        </div>
      </div>
      <InputGroup>
        <FormControl
          placeholder="First Name"
          aria-label="fname"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <InputGroup>
        <FormControl
          placeholder="Last Name"
          aria-label="lname"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <InputGroup>
        <FormControl
          placeholder="Email Address"
          aria-label="email"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <InputGroup>
        <FormControl
          placeholder="Password"
          aria-label="pword"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <Button varient="primary" block>
        Sign Up
      </Button>
    </>
  );
}

export default SignupModal;
