import React, { useState } from "react";
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { googleCLientId, fbAppId } from "../googleAuth";
import {
  loginUser,
  registerUser,
  googleLoginSuccess,
  fbLoginSuccess,
} from "../Auth/actions";
import { useSelector, useDispatch } from "react-redux";
import styled from "../LandingPage/Nav.module.css";
import styles from "styled-components";

const Button = styles.button`
  background:#01579b;
  color:white;
  border: 1px solid #01579b;
`;

function LogReg() {
  const dispatch = useDispatch();
  const [clickedLogin, setClickedLogin] = useState(false);

  const clickLogin = () => {
    setClickedLogin(true);
  };

  React.useEffect(() => {
    if (clickedLogin)
      return () => {
        const elem = document.getElementsByClassName("modal-backdrop");
        // console.log(elem[0]);
        if (elem[0]) {
          elem[0].parentElement.removeChild(elem[0]);
        }
      };
  }, [clickedLogin]);

  console.log(clickedLogin);

  const responseFaceBook = (response) => {
    console.log(response);
    dispatch(fbLoginSuccess(response));
  };

  const responseGoogle = (response) => {
    dispatch(googleLoginSuccess(response.profileObj));
    console.log(response.profileObj);
    // dispatch()
  };

  const initialState = {
    email: "",
    password: "",
  };
  const [loginDetails, setLoginDetails] = useState(initialState);

  const initialRegState = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  };
  const [registerDetails, setRegisterDetails] = useState(initialRegState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginDetails((state) => ({ ...state, [name]: value }));
  };

  const logingIn = () => {
    dispatch(loginUser(loginDetails));
  };

  const handleRegChange = (e) => {
    const { name, value } = e.target;
    setRegisterDetails((state) => ({ ...state, [name]: value }));
  };

  const register = () => {
    dispatch(registerUser(registerDetails));
  };

  const { login, user } = useSelector((state) => state.Auth);

  const [component, setComponent] = useState("#panel7");

  const handleComponent = (comp) => {
    setComponent(comp);
  };

  if (login) {
    // history.push("/dashboard");
    if (user == "") document.getElementById("close").click();
  }

  React.useEffect(() => {
    return () => {
      const elem = document.getElementsByClassName("modal-backdrop");
      if (elem[0]) {
        elem[0].parentElement.removeChild(elem[0]);
      }
    };
  }, []);

  return (
    <>
      {/* <!--Modal: Login / Register Form--> */}
      <div
        style={{ zIndex: "99999" }}
        className="modal fade"
        id="modalLRForm"
        // tabindex="-1"
        role="dialog"
        aria-labelledby="myModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog cascading-modal" role="document">
          {/* <!--Content-->   */}
          <div className="modal-content">
            {/* <!--Modal cascading tabs--> */}
            <div className="modal-c-tabs">
              {/* <!-- Nav tabs --> */}
              <ul
                className="nav nav-tabs md-tabs tabs-2 light-blue darken-3"
                role="tablist"
              >
                <li className="nav-item">
                  <div
                    className="nav-link active"
                    data-toggle="tab"
                    // href="#panel7"
                    href={component}
                    role="tab"
                    style={
                      component === "#panel8"
                        ? { color: "white" }
                        : { color: "black" }
                    }
                    onClick={() => handleComponent("#panel7")}
                  >
                    <i className="fas fa-user mr-1"></i>
                    Login
                  </div>
                </li>
                <li className="nav-item">
                  <div
                    className="nav-link"
                    data-toggle="tab"
                    // href="#panel8"
                    href={component}
                    onClick={() => handleComponent("#panel8")}
                    style={
                      component === "#panel7"
                        ? { color: "white" }
                        : { color: "black" }
                    }
                    role="tab"
                  >
                    <i className="fas fa-user-plus mr-1"></i>
                    Register
                  </div>
                </li>
              </ul>

              {/* <!-- Tab panels --> */}
              <div className="tab-content">
                {/* <!--Panel 7--> */}
                <div
                  className="tab-pane fade in show active"
                  id="panel7"
                  role="tabpanel"
                >
                  {/* <!--Body--> */}
                  <div className="modal-body mb-1">
                    <div className="md-form form-sm mb-5 text-center">
                      <img src="./logo2.png" alt="delivary.com" />
                    </div>
                    <div className="md-form form-sm mb-5">
                      <i className="fas fa-envelope prefix"></i>
                      <input
                        type="email"
                        name="email"
                        onChange={handleChange}
                        value={loginDetails.email}
                        id="modalLRInput10"
                        className="form-control form-control-sm validate"
                      />
                      <label
                        data-error="wrong"
                        data-success="right"
                        for="modalLRInput10"
                      >
                        Your email
                      </label>
                    </div>

                    <div className="md-form form-sm mb-4">
                      <i className="fas fa-lock prefix"></i>
                      <input
                        name="password"
                        onChange={handleChange}
                        value={loginDetails.password}
                        type="password"
                        id="modalLRInput11"
                        className="form-control form-control-sm validate"
                      />
                      <label
                        data-error="wrong"
                        data-success="right"
                        for="modalLRInput11"
                      >
                        Your password
                      </label>
                    </div>
                    <div className="text-center mt-2">
                      <Button
                        className="btn text-center text-white"
                        onClick={logingIn}
                      >
                        Log in <i className="fas fa-sign-in-alt"></i>
                      </Button>
                    </div>
                    <div className="text-center mb-2">
                      <GoogleLogin
                        clientId={googleCLientId}
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        render={(renderProps) => (
                          <button
                            className={styled.fbBtn}
                            onClick={renderProps.onClick}
                          >
                            <i className="fab fa-google mr-2"></i>
                            Login with Google
                          </button>
                        )}
                      />
                    </div>

                    <div className="text-center">
                      <FacebookLogin
                        className="text-center"
                        appId={fbAppId}
                        autoLoad={false}
                        fields="name,email,picture"
                        render={(renderProps) => (
                          <button
                            className={styled.fbBtn}
                            onClick={renderProps.onClick}
                          >
                            <i className="fab fa-facebook mr-2"></i>
                            Login with Facebook
                          </button>
                        )}
                        callback={responseFaceBook}
                      />
                    </div>
                  </div>
                  {/* <!--Footer--> */}
                  <div className="modal-footer">
                    <div className="options text-center text-md-right mt-1">
                      <p>
                        Not a member?{" "}
                        <div href="#" className="blue-text">
                          Sign Up
                        </div>
                      </p>
                      <p>
                        Forgot{" "}
                        <div href="#" className="blue-text">
                          Password?
                        </div>
                      </p>
                    </div>
                    <button
                      type="button"
                      className="btn btn-outline-info waves-effect ml-auto"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
                {/* <!--/.Panel 7--> */}

                {/* <!--Panel 8--> */}
                <div className="tab-pane fade" id="panel8" role="tabpanel">
                  {/* <!--Body--> */}
                  <div className="modal-body">
                    <div className="md-form form-sm mb-5 text-center">
                      <img src="./logo2.png" alt="" />
                    </div>
                    <div className="md-form form-sm mb-5">
                      <i className="fas fa-user prefix"></i>
                      <input
                        name="first_name"
                        onChange={handleRegChange}
                        value={registerDetails.first_name}
                        type="text"
                        id="modalLRInput12"
                        className="form-control form-control-sm validate"
                      />
                      <label
                        data-error="wrong"
                        data-success="right"
                        for="modalLRInput12"
                      >
                        First Name
                      </label>
                    </div>

                    <div className="md-form form-sm mb-5">
                      <i className="fas fa-user prefix"></i>
                      <input
                        name="last_name"
                        onChange={handleRegChange}
                        value={registerDetails.last_name}
                        type="text"
                        id="modalLRInput12"
                        className="form-control form-control-sm validate"
                      />
                      <label
                        data-error="wrong"
                        data-success="right"
                        for="modalLRInput12"
                      >
                        Last Name
                      </label>
                    </div>

                    <div className="md-form form-sm mb-5">
                      <i className="fas fa-envelope prefix"></i>
                      <input
                        name="email"
                        onChange={handleRegChange}
                        value={registerDetails.email}
                        type="email"
                        id="modalLRInput12"
                        className="form-control form-control-sm validate"
                      />
                      <label
                        data-error="wrong"
                        data-success="right"
                        for="modalLRInput12"
                      >
                        Email
                      </label>
                    </div>

                    <div className="md-form form-sm mb-5">
                      <i className="fas fa-lock prefix"></i>
                      <input
                        name="password"
                        onChange={handleRegChange}
                        value={registerDetails.password}
                        type="password"
                        id="modalLRInput13"
                        className="form-control form-control-sm validate"
                      />
                      <label
                        data-error="wrong"
                        data-success="right"
                        for="modalLRInput13"
                      >
                        Your password
                      </label>
                    </div>

                    <div className="text-center form-sm mt-2">
                      <Button className="btn" onClick={register}>
                        Sign up <i className="fas fa-sign-in-alt ml-1"></i>
                      </Button>
                    </div>
                    <div className="text-center">
                      <FacebookLogin
                        className="text-center"
                        appId={fbAppId}
                        autoLoad={false}
                        fields="name,email,picture"
                        render={(renderProps) => (
                          <button
                            className={styled.fbBtn}
                            onClick={renderProps.onClick}
                          >
                            <i className="fab fa-facebook mr-2"></i>
                            Login with Facebook
                          </button>
                        )}
                        callback={responseFaceBook}
                      />
                    </div>
                  </div>
                  {/* <!--Footer--> */}
                  <div className="modal-footer">
                    <div className="options text-right">
                      <p className="pt-1">
                        Already have an account?{" "}
                        <div href="#" className="blue-text">
                          Log In
                        </div>
                      </p>
                    </div>
                    <button
                      type="button"
                      id="close"
                      className="btn btn-outline-info waves-effect ml-auto"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
                {/* <!--/.Panel 8--> */}
              </div>
            </div>
          </div>
          {/* <!--/.Content--> */}
        </div>
      </div>
      {/* Modal: Login / Register Form */}
      <div class="text-center">
        <div
          href="#"
          className="text-white my-3"
          data-toggle="modal"
          data-target="#modalLRForm"
          onClick={clickLogin}
        >
          <Button>Log in</Button>
        </div>
      </div>
    </>
  );
}

export default LogReg;
