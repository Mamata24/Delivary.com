import React from "react";
import DashboardNav from "../Dashboard/DashboardNav";
import MenuDisplay from "./MenuDisplay";
import StoreDetailHeader from "./StoreDetailHeader";
import SubMenu from "./SubMenu";

function Menu() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <DashboardNav />
          <SubMenu />
          <StoreDetailHeader />
          <div className="row">
            <div className="col-lg-8">
              <MenuDisplay />
            </div>
            <div className="col-lg-4">

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Menu;
