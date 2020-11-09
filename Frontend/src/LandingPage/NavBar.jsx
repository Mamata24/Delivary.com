import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import HowItWorksPopOver from "./HowItWorksPopOver";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "../LandingPage/Nav.module.css";
import { Link } from "react-router-dom";
import LogReg from "./LogReg";
import { useSelector } from "react-redux";
import Profile from "./Profile";

function NavBar() {
  const { login } = useSelector((state) => state.Auth);
  return (
    <>
      <Navbar collapseOnSelect fixed="top" expand="lg" className={styled.nav}>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link>
              <HowItWorksPopOver />
            </Nav.Link>
            <Nav.Link style={{ color: "#1f5ea9" }}>
              <Link
                to="/office"
                style={{ color: "#01579b", textDecoration: "none" }}
              >
                For Office
              </Link>
            </Nav.Link>
            <Nav.Link>{!login ? <LogReg /> : <Profile />}</Nav.Link>
            <Nav.Link style={{ color: "#1f5ea9" }}>
              <FontAwesomeIcon icon="tag" size="lg" rotation={90} />
            </Nav.Link>
            <Nav.Link style={{ color: "#1f5ea9" }}>
              <FontAwesomeIcon icon="shopping-bag" size="lg" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default NavBar;
