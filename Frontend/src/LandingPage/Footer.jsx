import React from "react";
import { Col, Row, Container } from "react-bootstrap";

function Footer() {
  return (
    <>
      <Container style={{ backgroundColor: "lightGray" }} fluid>
        <Row>
          <Container style={{ marginRight: 10, marginTop: 20, fontSize: 13 }}>
            <Row>
              <Col lg={1}></Col>
              <Col lg={8}>
                <Row>
                  <Col>
                    <i>Merchants</i>
                  </Col>
                  <Col>
                    <i>Drivers</i>
                  </Col>
                  <Col>
                    <i>About us</i>
                  </Col>
                  <Col>
                    <i>Contact</i>
                  </Col>
                  <Col>
                    <i>FAQ</i>
                  </Col>
                  <Col>
                    <i>Careers</i>
                  </Col>
                  <Col>
                    <i>Office</i>
                  </Col>
                  <Col>
                    <i>Blog</i>
                  </Col>
                  <Col>
                    <i>Terms of Use</i>
                  </Col>
                  <Col>
                    <i>Privacy Policy</i>
                  </Col>
                </Row>
              </Col>
              <Col lg={1}></Col>
            </Row>
          </Container>
        </Row>
      </Container>
    </>
  );
}

export default Footer;
