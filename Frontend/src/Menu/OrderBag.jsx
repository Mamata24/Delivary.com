import React from "react";

function OrderBag() {
  return (
    <>
      <div className="container-fluid mt-5">
        <div class="card" style={{ width: "18rem" }}>
          <div class="card-body mb-3">
            <h6 class="card-title">Order Information</h6>
            <div className="btn-group">
              <button className="btn btn-outline">Delivery</button>
              <button className="btn btn-outline">Pickup</button>
            </div>
            <div className="btn-group">
              <button className="btn btn-outline"> Today </button>
              <button className="btn btn-outline"> ASAP </button>
            </div>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              <h4>Your Bag</h4>
              <i
                className="fa fa-shopping-basket fa-lg"
                style={{ color: "#1f5ea9" }}
              ></i>
              <span style={{ color: "#1f5ea9" }}> Store Name </span>
            </li>
            <li class="list-group-item" style={{ textAlign: "center" }}>
              <p>No item in your bag</p>
              <div className="row mt-5">
                <div className="col-lg-6 ml-auto">
                  <p>Delivery Fee</p>
                </div>
                <div className="col-lg-6 mr-auto">
                  <p>Free</p>
                </div>
              </div>
              <div className="row mt-5">
                <div className="col-lg-12">
                  <button className="btn btn-block btn-primary">
                    Go to Checkout <span style={{backgroundColor:"blue",padding:5}}>$0.00</span>
                  </button>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default OrderBag;
