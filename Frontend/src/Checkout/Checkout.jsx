import React, { useState } from "react";
import Bag from "./Bag";
import { Link, useHistory } from "react-router-dom";
import classnames from "classnames";
import styled from "./checkout.module.css";
import { razorPayment, postOrders, deliverTo } from "../Auth/actions";
import { useDispatch, useSelector } from "react-redux";

const topnav = {
  background: "#01579b",
  height: "60px",
};
function Checkout() {
  const [pay, setPay] = useState(false);
  const [address, setAddress] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const {
    user,
    orders,
    payment,
    billAmt,
    restaurantDetail,
    deliveryAddress,
  } = useSelector((state) => state.Auth);

  const handleAddress = (e) => {
    setAddress(e.target.value);
  };

  const handlePayment = (e) => {
    if (e.target.checked) setPay(true);
    else setPay(false);
  };

  // if (payment) {
  //   let payload = {
  //     dish: orders,
  //     restaurant_id: restaurantDetail.restaurantId,
  //     restaurant_name: restaurantDetail.restaurant_Name,
  //     user_id: user._id,
  //     total_amount: billAmt,
  //     address: deliveryAddress,
  //   };
  //   console.log("orders", payload);
  //   dispatch(postOrders(payload));
  //   history.push("/orders");
  // }

  const paymentHandler = (e) => {
    e.preventDefault();
    let payload = {
      amount: billAmt,
      name: user.first_name,
    };
    pay && dispatch(razorPayment(payload));
  };

  const postDeliveryAddress = () => {
    dispatch(deliverTo(address));
  };

  return (
    <>
      {/* {payment ? (
        <>
          <div id="success_tic" className="modal fade" role="dialog">
            <div className="modal-dialog">
              {/* <!-- Modal content--> */}
      {/* <div className="modal-content">
                <div className="close" href="#" data-dismiss="modal">
                  &times;
                </div>
                <div className="page-body">
                  <div className="head">
                    <h3 style="margin-top:5px;">Lorem ipsum dolor sit amet</h3>
                    <h4>Lorem ipsum dolor sit amet</h4>
                  </div>

                  <h1 style="text-align:center;">
                    <div className="checkmark-circle">
                      <div className="background"></div>
                      <div className="checkmark draw"></div>
                    </div>
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null} */}
      <div className="container-fluid">
        <div className="row">
          <div
            className="col-12 pt-3 text-white  d-flex justify-content-between"
            style={{ ...topnav }}
          >
            <Link
              style={{ color: "white", textDecoration: "none" }}
              to={`/dashboard/${restaurantDetail.restaurantId}`}
            >
              <h5> back to menu</h5>
            </Link>
            <img width="170px" src="./logo.png" alt="Delivary.com" />
            <h5>Chat</h5>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12 pt-5 d-flex justify-content-center">
              <button
                className={classnames(
                  "btn btn-light mt-3 rounded-pill px-5",
                  styled.textColor
                )}
              >
                Order Summary
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col-12 text-center mt-3">
              <h4 className="text-secondary">Order Summary</h4>
              <p className="lead">
                Review your order before proceeding to Checkout.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 col-lg-8 mb-3">
              <div className="row">
                <div className="col-12">
                  <div class="card">
                    <div class="card-body">
                      <div className="row">
                        <div className="col-12 d-flex justify-content-between">
                          <h5>Order Information</h5>
                          {/* <p className="text-danger">Cancel</p> */}
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-3">
                          <button
                            className={classnames("btn px-4", styled.theme)}
                          >
                            Delivery
                          </button>
                        </div>
                        <div className="col-sm-4 ml-sm-4 mt-sm-1 col-md-2">
                          <select name="" id="" className="form-control">
                            <option value="">Today</option>
                            <option value="">Sat 11/7</option>
                            <option value="">Sun 11/8</option>
                            <option value="">Mon 11/9</option>
                            <option value="">Tue 11/10</option>
                            <option value="">Wed 11/11</option>
                          </select>
                        </div>
                        <div className="col-sm-4 mt-sm-1 col-md-2 ml-1">
                          <select name="" id="" className="form-control">
                            <option value="">ASAP </option>
                            <option value="">10:00 pm</option>
                            <option value="">10:15 pm</option>
                            <option value="">10:30 pm</option>
                            <option value="">10:45 pm</option>
                            <option value="">11:00 pm</option>
                          </select>
                        </div>
                      </div>
                      <div className="row mt-2">
                        <div className="col-12">
                          <small className="text-muted">from: </small>{" "}
                          <h5 className="text-secondary">
                            {restaurantDetail.restaurant_Name}
                          </h5>
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col-12">
                          <h5>Confirm street address</h5>
                          <p className="text-muted">
                            You can add your apt / suite / company.
                          </p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-7">
                          <input
                            type="text"
                            className="form-control"
                            onChange={handleAddress}
                            value={address}
                          />
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col-sm-12 col-md-5">
                          <button
                            onClick={postDeliveryAddress}
                            className={classnames("btn", styled.theme)}
                          >
                            Update Order Information
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row my-4">
                <div className="col-12">
                  <div class="card p-3">
                    <div class="card-body">
                      <h5>Promos</h5>
                      <div className="row">
                        <div className="col-4">
                          <input
                            type="text"
                            className="form-control mt-sm-1 mt-md-0"
                          />
                        </div>
                        <div className="col-sm-8 col-md-4">
                          <button
                            className={classnames("btn disabled", styled.theme)}
                          >
                            Apply Code
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row my-4">
                <div className="col-12">
                  <div class="card p-3">
                    <div class="card-body">
                      <h5>Payment Methods</h5>
                      <div className="row">
                        <div className="col-12">
                          <input
                            type="radio"
                            name="payment"
                            checked={pay}
                            onChange={handlePayment}
                          />
                          <span className="pl-3">Razorpay</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row my-4">
                <div className="col-12">
                  <div class="card p-3">
                    <div class="card-body">
                      <h5>Gift Cards</h5>
                      <div className="row">
                        <div className="col-4">
                          <input
                            type="text"
                            className="form-control mt-sm-1 mt-md-0"
                          />
                        </div>
                        <div className="col-sm-8 col-md-4">
                          <button
                            className={classnames("btn disabled", styled.theme)}
                          >
                            Apply Code
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <button
                    onClick={paymentHandler}
                    className={classnames("btn btn-block", styled.theme)}
                  >
                    Proceed to Pay
                  </button>
                  {!pay && (
                    <div className="text-danger text-center font-weight-bold">
                      Select a payment method
                    </div>
                  )}
                  <p className="text-muted text-center mt-2">
                    You won't be charged yet.
                  </p>
                </div>
              </div>
            </div>
            <Bag />
          </div>
        </div>
      </div>
    </>
  );
}
export default Checkout;
