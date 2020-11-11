import React, { useState } from "react";
import { Modal, Button, Row, Col, Container } from "react-bootstrap";
import { useDispatch } from 'react-redux'
import { pushOrder } from '../Auth/actions'

function ItemModal(props) {
  const dispatch = useDispatch()
  // console.log(props);
  const { dish_name, price, dish_id } = props.dishdetail
  const [qty, setQty] = useState(1);
  const addToCart = () => {
    let dish = {
      dish_id: dish_id,
      dish_name: dish_name,
      price: price,
      qty: qty,
      subTotal: (Number(price) * Number(qty)).toFixed(2)
    }
    dispatch(pushOrder(dish))
<<<<<<< Updated upstream
    setQty(1)
=======
    console.log(pushOrder(dish), "hello")
>>>>>>> Stashed changes
    props.onHide(false)
  }
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
              <Col lg={6}>{dish_name}</Col>
              <Col lg={6}>${price}</Col>
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
                    <Button className="btn btn-block" onClick={addToCart}>
                      Add to bag{" "}
                      <span style={{ backgroundColor: "blue" }}>
                        ${qty * price}
                      </span>
                    </Button>
                    {/* oooooooooooooooooooooorders:[] -> reducer
                    dish:{dishId::,dishTitle:,qty:,subtotal:,                  }
                    Schema::
                    restauramtId:,orders:[],lAT:,LON:,total:,timeStamp, userId,                address */}
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