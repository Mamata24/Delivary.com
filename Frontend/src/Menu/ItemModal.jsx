import React, { useState } from "react";
import { Modal, Button, Row, Col, Container } from "react-bootstrap";

function ItemModal(props) {
  //   console.log(props);
  const [qty, setQty] = useState(1);
  return (
    <>
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Chicken Briyani
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col lg={6}>Chicken Briyani</Col>
              <Col lg={6}>$50.00</Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Container>
            <Row>
              <Col lg={6}>
                <Row>
                  <Col lg={1}>
                    <a href="#aaa" onClick={() => setQty(qty + 1)}>
                      <i class="fas fa-plus"></i>
                    </a>
                  </Col>
                  <Col lg={3}>
                    <input
                      style={{ width: 30 }}
                      type="text"
                      name="qty"
                      value={qty}
                      disabled
                    />
                  </Col>
                  <Col lg={1}>
                    <a
                      href="#bbb"
                      onClick={() => {
                        qty === 1 ? setQty(qty) : setQty(qty - 1);
                      }}
                    >
                      <i class="fas fa-minus"></i>
                    </a>
                  </Col>
                </Row>
              </Col>
              <Col lg={6}>
                <Row>
                  <Col>
                    <Button className="btn btn-block" onClick={props.onHide}>
                      Add to bag{" "}
                      <span style={{ backgroundColor: "blue" }}>
                        ${qty * 50}
                      </span>
                    </Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ItemModal;