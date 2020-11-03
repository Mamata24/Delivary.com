import React, { useState } from "react";
import { Modal, Button, InputGroup, FormControl } from "react-bootstrap";
import logo from "../LandingPage/Icon/companyLogo.png";
import { Link } from "react-router-dom";
import styled from "./LoginModal.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function LoginModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="outline-primary" onClick={handleShow}>
        Login
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        size="sm"
        dialogClassName={styled.loginModal}
        scrollable={true}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <img style={{ width: 200 }} src={logo} alt="delivery" />
            <h4>Log in to your account</h4>
            <Link to="/register" style={{ fontSize: 15 }}>
              New to delivery.com? Sign up here
            </Link>
            <InputGroup>
              <FormControl
                placeholder="Email Address"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
            <InputGroup>
              <FormControl
                placeholder="Password"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
            <Button varient="primary" block>
              Log In
            </Button>
            <FontAwesomeIcon icon="facebook" />
            <Button varient="primary" block>
              Log in With Facebook
            </Button>
            <Button varient="primary" block>
              Sign in With Google
            </Button>
          </Modal.Title>
        </Modal.Header>
      </Modal>
    </>
  );
}

export default LoginModal;
