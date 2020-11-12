import React from "react";
import { Link } from 'react-router-dom'

function SubMenu() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div
            className="navbar navbar-expand-lg p-0"
            style={{ width: "100%", backgroundColor: "white" }}
          >
            <ul className="navbar-nav">
              <li className="nav-item ml-5">
                <a className="nav-link" href="foodmenu">
                  <i
                    className="fa fa-utensils"
                    style={{ color: "#1f5ea9" }}
                  ></i>
                  <span style={{ marginLeft: 10, fontWeight: "bold" }}>
                    FOOD
                  </span>
                </a>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link style={{textDecoration:"none",color:"#1f5ea9"}} className="nav-link" to="/office">
                  For Office
                </Link>
              </li>
              <li className="nav-item">
                <Link style={{textDecoration:"none",color:"#1f5ea9"}} className="nav-link" to="/office">
                  <i className="fa fa-comment-dots"></i>
                  <span style={{ margin: 10 }}>Chat</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default SubMenu;