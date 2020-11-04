import React, { useState } from "react";
import { Button, InputGroup, FormControl } from "react-bootstrap";
import logo from "../LandingPage/Icon/companyLogo.png";
import { Link } from "react-router-dom";
import { handleContent, registerUser } from "../Auth/actions";
import { useDispatch } from "react-redux";

function SignupModal() {
  const dispatch = useDispatch();
  const initialState = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  };
  const [registerDetails, setRegisterDetails] = useState(initialState);
  const goToLogin = (content) => {
    dispatch(handleContent(content));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegisterDetails((state) => ({ ...state, [name]: value }));
  };

  const register = () => {
    dispatch(registerUser(registerDetails));
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
          name="first_name"
          onChange={handleChange}
          value={registerDetails.first_name}
          placeholder="First Name"
          aria-label="fname"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <InputGroup>
        <FormControl
          name="last_name"
          onChange={handleChange}
          value={registerDetails.last_name}
          placeholder="Last Name"
          aria-label="lname"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <InputGroup>
        <FormControl
          name="email"
          onChange={handleChange}
          value={registerDetails.email}
          placeholder="Email Address"
          aria-label="email"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <InputGroup>
        <FormControl
          name="password"
          onChange={handleChange}
          value={registerDetails.password}
          placeholder="Password"
          aria-label="pword"
          type="password"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <Button varient="primary" block onClick={register}>
        Sign Up
      </Button>
    </>
  );
}

export default SignupModal;
