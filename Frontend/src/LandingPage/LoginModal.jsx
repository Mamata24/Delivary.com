import React, { useState } from "react";
import { Button, InputGroup, FormControl } from "react-bootstrap";
import logo from "../LandingPage/Icon/companyLogo.png";
import { handleContent, loginUser } from "../Auth/actions";
import { useDispatch } from "react-redux";
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login";
import { googleCLientId, fbAppId } from "../googleAuth";
import classnames from "classnames";
import styles from "./LoginModal.module.css";

function LoginModal() {
  const responseFaceBook = (response) => {
    console.log(response);
  };
  const responseGoogle = (response) => {
    console.log(response.profileObj);
    // dispatch()
  };

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
    <div style={{ textAlign: "center" }}>
      <img style={{ width: 250 }} src="./logo2.png" alt="delivery" />
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
      <GoogleLogin
        clientId={googleCLientId}
        buttonText="Sign with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        className={classnames(
          "border-0 bg-primary text-light font-weight-bolder py-1 px-4 my-3"
        )}
      />

      <FacebookLogin
        appId={fbAppId}
        style={{ background: "#01579b" }}
        autoLoad={false}
        fields="name,email,picture"
        callback={responseFaceBook}
        icon="fa-facebook"
      />
    </div>
  );
}

export default LoginModal;
