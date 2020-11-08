import React, { useState } from "react";
import { Container, Row, Nav, NavLink, NavItem } from "react-bootstrap";
import styled from "./Home.module.css";
import styles from "styled-components";
import logo from "../LandingPage/Icon/companyLogo.png";
import HowItWorksPopOver from "./HowItWorksPopOver";
import {
  loginUser,
  registerUser,
  googleLoginSuccess,
  fbLoginSuccess,
} from "../Auth/actions";
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { googleCLientId, fbAppId } from "../googleAuth";
import { useSelector, useDispatch } from "react-redux";
import classnames from "classnames";
import { Link, useHistory } from "react-router-dom";

const SearchBox = styles.div`
    height:318px;
    width:565px;
    background:#f4f5f5;
    margin-top:-70px;
    margin-left:400px;
`;

const Button = styles.button`
  background:#01579b;
  color:white;
`;

function Home() {
  const dispatch = useDispatch();

  const responseFaceBook = (response) => {
    console.log(response);
    dispatch(fbLoginSuccess(response));
  };

  const responseGoogle = (response) => {
    dispatch(googleLoginSuccess(response));
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

  const login = useSelector((state) => state.Auth.login);

  const [component, setComponent] = useState("#panel7");

  const handleComponent = (comp) => {
    setComponent(comp);
  };
  const history = useHistory();

  if (login) {
    history.push("/dashboard");
  }

  return (
    <Container fluid>
      <Row className={styled.bgimage}>
        <Nav className={styled.nav}>
          <NavItem>
            <NavLink href="">
              <HowItWorksPopOver />
            </NavLink>
          </NavItem>
          <NavItem>
            <Link to="/office">For Office</Link>
          </NavItem>
          <NavItem>
            <NavLink href="">
              {/* <!--Modal: Login / Register Form--> */}
              <div
                className="modal fade"
                id="modalLRForm"
                tabindex="-1"
                role="dialog"
                aria-labelledby="myModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog cascading-modal" role="document">
                  {/* <!--Content--> */}
                  <div className="modal-content">
                    {/* <!--Modal cascading tabs--> */}
                    <div className="modal-c-tabs">
                      {/* <!-- Nav tabs --> */}
                      <ul
                        className="nav nav-tabs md-tabs tabs-2 light-blue darken-3"
                        role="tablist"
                      >
                        <li className="nav-item">
                          <a
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
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
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
                          </a>
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
                                <a href="#" className="blue-text">
                                  Sign Up
                                </a>
                              </p>
                              <p>
                                Forgot{" "}
                                <a href="#" className="blue-text">
                                  Password?
                                </a>
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
                        <div
                          className="tab-pane fade"
                          id="panel8"
                          role="tabpanel"
                        >
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
                                Sign up{" "}
                                <i className="fas fa-sign-in-alt ml-1"></i>
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
                                <a href="#" className="blue-text">
                                  Log In
                                </a>
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
                        {/* <!--/.Panel 8--> */}
                      </div>
                    </div>
                  </div>
                  {/* <!--/.Content--> */}
                </div>
              </div>
              {/* Modal: Login / Register Form */}

              <div class="text-center">
                <a
                  href=""
                  className="btn btn-default bg-primary text-white btn-rounded my-3"
                  data-toggle="modal"
                  data-target="#modalLRForm"
                >
                  Log in
                </a>
              </div>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/home">
              <i className="fas fa-tag fa-2x"></i>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/home">
              <i className={classnames("fas fa-shopping-bag fa-2x")}></i>
            </NavLink>
          </NavItem>
        </Nav>
        <Row>
          <SearchBox>
            <img className={styled.logoimg} src={logo} alt="delivery" />
            <div>
              <i
                className={classnames(
                  "fas fa-utensils fa-2x",
                  styled.searcboxicon
                )}
              ></i>

              <i
                className={classnames(
                  "fas fa-glass-martini fa-2x",
                  styled.searcboxicon
                )}
              ></i>

              <i
                className={classnames(
                  "fas fa-shopping-basket fa-2x",
                  styled.searcboxicon
                )}
              ></i>
            </div>
            <div className={styled.info}>
              <p>See who delivers in your neighborhood</p>
            </div>
            <div className={styled.searchDiv}>
              <div className={styled.inpDiv}>
                <i
                  className="fas fa-location-arrow fa-2x"
                  style={{ color: "#1f5ea9" }}
                ></i>
                <span>
                  <input className={styled.inputBox} type="text" />
                </span>
              </div>
              <button className={styled.btn}>Search</button>
            </div>
          </SearchBox>
        </Row>
      </Row>
    </Container>
  );
}

export default Home;