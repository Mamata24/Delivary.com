import React, { useState } from "react";
import { Modal, Button, InputGroup, FormControl } from "react-bootstrap";
import logo from "../LandingPage/Icon/companyLogo.png";
import { Link, Route } from "react-router-dom";

function SignupModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="outline-primary" onClick={handleShow}>
        Login
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <img style={{ width: 200 }} src={logo} alt="delivery" />
            <h4>Log in to your account</h4>
            <Link to="/register" style={{ fontSize: 15 }}>
              New to delivery.com? Sign up here
            </Link>
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
          </Modal.Title>
        </Modal.Header>
      </Modal>
    </>
  );
}

export default SignupModal;
