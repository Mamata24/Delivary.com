import React from "react";
import DashboardNav from "../Dashboard/DashboardNav";
import MenuDisplay from "./MenuDisplay";
import StoreDetailHeader from "./StoreDetailHeader";
import SubMenu from "./SubMenu";
import OrderBag from "./OrderBag"

function Menu() {
  return (
    <>
      <div className="container-fluid">
        <div className="row" style={{backgroundColor:"#eeeeee"}}>
          <DashboardNav />
          <SubMenu />
          <StoreDetailHeader />
            <div className="col-lg-9">
              <MenuDisplay />
              {/* <h1>Hello</h1> */}
            </div>
            <div className="col-lg-3">
              <OrderBag />
            </div>
        </div>
      </div>
    </>
  )
}

export default Menu;
