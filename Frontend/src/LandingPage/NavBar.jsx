import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import HowItWorksPopOver from "./HowItWorksPopOver";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "../LandingPage/Nav.module.css";
import { Link } from "react-router-dom";
import LogReg from "./LogReg";
import { useSelector } from "react-redux";
import Profile from "./Profile";
// import LoginModal from './LoginModal'

function NavBar() {
  const { login } = useSelector((state) => state.Auth);
  return (
    <>
      <Navbar collapseOnSelect fixed="top" expand="lg" className={styled.nav} style={{boxShadow:"none"}}>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link style={{marginRight:40, color: "#01579b", fontWeight:"400",fontSize:14}}>
              <HowItWorksPopOver />
            </Nav.Link>
            <Nav.Link style={{ color: "#1f5ea9", marginRight:40 ,fontWeight:"400",fontSize:14}}>
              <Link
                to="/office"
                style={{ color: "#01579b", textDecoration: "none" }}
              >
                For Office
              </Link>
            </Nav.Link>
            {/* <Nav.Link style={{marginRight:40, marginTop:-18}}>{!login ? <LogReg /> : <Profile />}</Nav.Link> */}
            <Nav.Link style={{marginRight:40, marginTop:-5}}>
              <div style={{color:"#01579b", padding:5, border:"1px solid #01579b", borderRadius:3, height:30, width:80,fontSize:14,fontWeight:"400", textAlign:"center"}}>Log in</div>
            </Nav.Link>
            <Nav.Link style={{ color: "#1f5ea9",marginRight:40 }}>
              <i class="fas fa-tag fa-rotate-90 fa-lg"></i>
            </Nav.Link>
            <Nav.Link style={{ color: "#1f5ea9",marginRight:40 }}>
              <i className="fas fa-shopping-bag fa-lg"></i>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default NavBar;
