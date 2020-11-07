import React from "react";

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
                <a className="nav-link" href="foroffice">
                  For Office
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="foroffice">
                  <i className="fa fa-comment-dots"></i>
                  <span style={{ margin: 10 }}>Chat</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default SubMenu;