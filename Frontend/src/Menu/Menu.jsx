import React from "react";
import DashboardNav from "../Dashboard/DashboardNav";
import MenuDisplay from "./MenuDisplay";
import StoreDetailHeader from "./StoreDetailHeader";
import SubMenu from "./SubMenu";
import OrderBag from "./OrderBag";
import { useSelector } from "react-redux";
import Footer from "../LandingPage/Footer";
// import restt from "../Dashboard/restaurants.json"

function Menu(props) {
  const { orders, restaurants } = useSelector((state) => state.Auth);
  // console.log(restt)
  let rest_id = props.match.params.id;
  let rest_detail = restaurants.filter(
    (singleData) => Number(singleData.restaurant_id) === Number(rest_id)
  );
  console.log("rest", rest_detail);
  let rest_name = rest_detail[0].restaurant_name;
  let delivery_fee = rest_detail[0].delivery_fee;

  return (
    <>
      <div className="container-fluid">
        <div className="row" style={{ backgroundColor: "#eeeeee" }}>
          <DashboardNav />
          <SubMenu />
          <StoreDetailHeader rest_detail={rest_detail} />
          <div className="col-lg-8">
            <MenuDisplay rest_detail={rest_detail} />
          </div>
          <div className="col-lg-4">
            <OrderBag
              id={rest_id}
              rest_name={rest_name}
              delivery_fee={delivery_fee}
            />
          </div>
        </div>
        <div className="row">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Menu;
