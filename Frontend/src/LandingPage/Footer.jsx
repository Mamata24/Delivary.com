import React from "react";

function Footer() {
  return (
    <div className="pt-2 pb-5" style={{ background: "#dfe6e9" }}>
      <div
        className="container-fluid"
        style={{
          fontFamily: "sans-serif",
          color: "gray",
          background: "#dfe6e9",
        }}
      >
        <div className="row pt-4">
          <div className="col">Merchants</div>
          <div className="col">Drivers</div>
          <div className="col">About Us</div>
          <div className="col">Contact</div>
          <div className="col">FAQ</div>
          <div className="col">Careers</div>
          <div className="col">Office</div>
          <div className="col">Blog</div>
          <div className="col">Terms Of Use</div>
        </div>
      </div>
      <div className="container my-5">
        <div className="row offset-2">
          <div className="col mt-1">
            <i class="fab fa-facebook-f" style={{ color: "gray" }}></i>
          </div>
          <div className="col mt-1">
            <i class="fab fa-twitter" style={{ color: "gray" }}></i>
          </div>
          <div className="col mt-1">
            <i class="fab fa-instagram" style={{ color: "gray" }}></i>
          </div>
          <div className="col">
            <img
              style={{ height: 40, width: 80 }}
              src="https://zerodha.com/static/images/google-play-badge.svg"
              alt=""
            />
          </div>
          <div className="col ml-2">
            <img
              style={{ height: 40, width: 80 }}
              src="https://zerodha.com/static/images/appstore-badge.svg"
              alt=""
            />
          </div>
          <div className="col"></div>
          <div className="col"></div>
          <div className="col"></div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
