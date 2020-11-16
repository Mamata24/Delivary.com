import React from "react";

function Footer() {
  return (
    <div className="container-fluid" style={{backgroundColor:"#f2f3f5"}}>
      <div style={{ fontFamily: "sans-serif", color: "gray" }}>
        <div className="row p-4">
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
        <div className="row offset-4">
            <i class="fab fa-facebook-f" style={{ color: "gray", margin:20}}></i>
            <i class="fab fa-twitter" style={{ color: "gray", margin:20 }}></i>
            <i class="fab fa-instagram" style={{ color: "gray", margin:20 }}></i>
            <img
              style={{ height: 40, width: 80, margin:20, marginTop:10 }}
              src="https://zerodha.com/static/images/google-play-badge.svg"
              alt=""
            />
            <img
              style={{ height: 40, width: 80, margin:20, marginTop:10}}
              src="https://zerodha.com/static/images/appstore-badge.svg"
              alt=""
            />
        </div>
    </div>
  );
}

export default Footer;
