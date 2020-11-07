import React, { useState } from "react";
import { Nav, Navbar, NavLink } from "react-bootstrap";
import HowItWorksPopOver from "./HowItWorksPopOver";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "../LandingPage/Nav.module.css";
import { useDispatch } from "react-redux";
import classnames from "classnames";
import { Link, useHistory } from "react-router-dom";
import styles from "styled-components";
import LogReg from "./LogReg";

// const SearchBox = styles.div`
//     height:318px;
//     width:565px;
//     background:#f4f5f5;
//     margin-top:-70px;
//     margin-left:400px;
// `;

const Button = styles.button`
  background:#01579b;
  color:white;
`;

function NavBar() {
  const dispatch = useDispatch();

  return (
    <>
      <Navbar collapseOnSelect expand="lg" fixed="top" className={styled.nav}>
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
            <Nav.Link>
              <LogReg />
            </Nav.Link>
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
