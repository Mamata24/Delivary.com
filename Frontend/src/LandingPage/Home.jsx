import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Nav,
  NavLink,
  NavItem,
  Modal,
  Button,
} from "react-bootstrap";
import styled from "./Home.module.css";
import styles from "styled-components";
import logo from "../LandingPage/Icon/companyLogo.png";
import HowItWorksPopOver from "./HowItWorksPopOver";
import LoginModal from "./LoginModal";
import { useSelector } from "react-redux";
import SignupModal from "./SignupModal";
import classnames from "classnames";
import { useHistory, Link } from "react-router-dom";

const SearchBox = styles.div`
    height:318px;
    width:565px;
    background:#f4f5f5;
    margin-top:-70px;
    margin-left:400px;
`;

function Home() {
  const content = useSelector((state) => state.Auth.content);
  console.log(content);
  const [show, setShow] = useState(false);
  const history = useHistory();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  console.log(content);
  useEffect(() => {
    history.push(content);
  }, [content]);
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
            {/* <NavLink href="/office">For Office</NavLink> */}
          </NavItem>
          <NavItem>
            <NavLink>
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
                    {content === "/login" ? <LoginModal /> : <SignupModal />}
                  </Modal.Title>
                </Modal.Header>
              </Modal>
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
