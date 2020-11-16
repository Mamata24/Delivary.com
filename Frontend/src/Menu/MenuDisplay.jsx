import React,{useState} from "react";
import ItemModal from "./ItemModal";
import MapBox from "./MapBox";
import MenuData from './MenuData.json';

function MenuDisplay(props) {
  // const categorySet = ["Appetizer", "Breakfast"]
  const [modalShow, setModalShow] = useState(false);
  const [dishDetail,setdishDetail] = useState({});
  const { latitude ,longitude,restaurant_name} = props.rest_detail[0]
  const lat = Number(latitude)
  const lon = Number(longitude)
  // console.log(lat,lon)
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-3">
            <ul class="nav flex-column">
              <li class="nav-item">
                <a
                  class="nav-link active"
                  data-toggle="collapse"
                  href="#appetiser"
                  aria-expanded="false"
                  aria-controls="appetiser"
                  style={{color:"#01579b"}}
                >
                  Appetizer
                  </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  data-toggle="collapse"
                  href="#breakFast"
                  aria-expanded="false"
                  aria-controls="breakFast"
                  style={{color:"#01579b"}}
                >
                  Break Fast
                   </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  data-toggle="collapse"
                  href="#lunch"
                  aria-expanded="false"
                  aria-controls="lunch"
                  style={{color:"#01579b"}}
                >
                  Main Course
                   </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  data-toggle="collapse"
                  href="#dinner"
                  aria-expanded="false"
                  aria-controls="dinner"
                  style={{color:"#01579b"}}
                >
                  Pudding
                   </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  data-toggle="collapse"
                  href="#mapp"
                  aria-expanded="false"
                  aria-controls="mapp"
                  style={{color:"#01579b"}}
                >
                  View Map and Hours
                   </a>
              </li>

            </ul>
          </div>
          <div className="col-lg-9" style={{ backgroundColor: "white" }}>
            <p className="mt-3">
              <a
                data-toggle="collapse"
                href="#appetiser"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample"
                style={{color:"#01579b"}}
              >
                Appetizer
                <span style={{ float: "right" }}>
                  <i class="fas fa-angle-down"></i>
                </span>
              </a>
            </p>
            <div class="collapse" id="appetiser">
              <div class="card card-body">
                <div className="row">
                  <div className="col-lg-6">
                    {/* filter */}
                    {MenuData.filter(data => data.category === 'Appetizer' && data.restaurant_id === 1 && data.dish_id < 6).map(filteredAppetizer =>
                      <div className="row">
                        <div className="col-lg-8">
                          <div href="#chicken" onClick={()=>(
                            setModalShow(true),
                            setdishDetail(
                              {
                                dish_name:filteredAppetizer.dish_name,
                                price: filteredAppetizer.dish_price,
                                dish_id:filteredAppetizer.dish_id
                              }
                            ))}>
                            {filteredAppetizer.dish_name}
                          </div>
                          <div style={{ color: "grey" }}>{filteredAppetizer.dish_description}</div>
                        </div>
                        <div className="col-lg-4">
                          <p>₹{filteredAppetizer.dish_price}</p>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="col-lg-6">
                    {MenuData.filter(data => data.category === 'Appetizer' && data.restaurant_id === 1 && data.dish_id > 5).map(filteredAppetizer =>
                      <div className="row">
                        <div className="col-lg-8">
                          <a href="#chicken" onClick={()=>(setModalShow(true),
                            setdishDetail(
                              {
                                dish_name:filteredAppetizer.dish_name,
                                price: filteredAppetizer.dish_price,
                                dish_id:filteredAppetizer.dish_id
                              }
                            ))}>
                            {filteredAppetizer.dish_name}
                            </a>
                          <div style={{ color: "grey" }}>{filteredAppetizer.dish_description}</div>
                        </div>
                        <div className="col-lg-4">
                          <p>₹{filteredAppetizer.dish_price}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <p>
              <a
                data-toggle="collapse"
                href="#breakFast"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample"
                style={{color:"#01579b"}}
              >
                Break Fast
                <span style={{ float: "right" }}>
                  <i class="fas fa-angle-down"></i>
                </span>
              </a>
            </p>
            <div class="collapse" id="breakFast">
              <div class="card card-body">
                <div className="row">
                  <div className="col-lg-6">
                    {/* filter */}
                    {MenuData.filter(data => data.category === 'Breakfast' && data.restaurant_id === 2 && data.dish_id < 36).map(filteredBreakfast =>
                      <div className="row">
                        <div className="col-lg-8">
                          <a href="#chicken" onClick={()=>(setModalShow(true),
                            setdishDetail(
                              {
                                dish_name:filteredBreakfast.dish_name,
                                price: filteredBreakfast.dish_price,
                                dish_id:filteredBreakfast.dish_id
                              }
                            ))}>
                            {filteredBreakfast.dish_name}
                            </a>
                          <div style={{ color: "grey" }}>{filteredBreakfast.dish_description}</div>
                        </div>
                        <div className="col-lg-4">
                          <p>₹{filteredBreakfast.dish_price}</p>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="col-lg-6">
                    {MenuData.filter(data => data.category === 'Breakfast' && data.restaurant_id === 2 && data.dish_id > 35).map(filteredBreakfast =>
                      <div className="row">
                        <div className="col-lg-8">
                          <a href="#chicken" onClick={()=>(setModalShow(true),
                            setdishDetail(
                              {
                                dish_name:filteredBreakfast.dish_name,
                                price: filteredBreakfast.dish_price,
                                dish_id:filteredBreakfast.dish_id
                              }
                            ))}>
                            {filteredBreakfast.dish_name}
                          </a>
                          <div style={{ color: "grey" }}>{filteredBreakfast.dish_description}</div>
                        </div>
                        <div className="col-lg-4">
                          <p>₹{filteredBreakfast.dish_price}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <p>
              <a
                data-toggle="collapse"
                href="#lunch"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample"
                style={{color:"#01579b"}}
              >
                Main Course
                <span style={{ float: "right" }}>
                  <i class="fas fa-angle-down"></i>
                </span>
              </a>
            </p>
            <div class="collapse" id="lunch">
              <div class="card card-body">
                <div className="row">
                  <div className="col-lg-6">
                    {/* filter */}
                    {MenuData.filter(data => data.category === 'Main Course' && data.restaurant_id ===1 && data.dish_id < 46).map(filteredMainCourse =>
                      <div className="row">
                        <div className="col-lg-8">
                          <a href="#chicken" onClick={()=>(setModalShow(true),
                            setdishDetail(
                              {
                                dish_name:filteredMainCourse.dish_name,
                                price: filteredMainCourse.dish_price,
                                dish_id:filteredMainCourse.dish_id
                              }
                            ))}>
                            {filteredMainCourse.dish_name}
                            </a>
                          <div style={{ color: "grey" }}>{filteredMainCourse.dish_description}</div>
                        </div>
                        <div className="col-lg-4">
                          <p>₹{filteredMainCourse.dish_price}</p>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="col-lg-6">
                    {MenuData.filter(data => data.category === 'Main Course' && data.restaurant_id === 1 && data.dish_id > 45).map(filteredMainCourse =>
                      <div className="row">
                        <div className="col-lg-8">
                          <a href="#chicken" onClick={()=>(setModalShow(true),
                            setdishDetail(
                              {
                                dish_name:filteredMainCourse.dish_name,
                                price: filteredMainCourse.dish_price,
                                dish_id:filteredMainCourse.dish_id
                              }
                            ))}>
                            {filteredMainCourse.dish_name}
                            </a>
                          <div style={{ color: "grey" }}>{filteredMainCourse.dish_description}</div>
                        </div>
                        <div className="col-lg-4">
                          <p>₹{filteredMainCourse.dish_price}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <p>
              <a
                data-toggle="collapse"
                href="#dinner"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample"
                style={{color:"#01579b"}}
              >
                Pudding
                <span style={{ float: "right" }}>
                  <i class="fas fa-angle-down"></i>
                </span>
              </a>
            </p>
            <div class="collapse" id="dinner">
              <div class="card card-body">
                <div className="row">
                  <div className="col-lg-6">
                    {/* filter */}
                    {MenuData.filter(data => data.category === 'Pudding' && data.restaurant_id === 2 && data.dish_id < 76).map(filteredPudding =>
                      <div className="row">
                        <div className="col-lg-8">
                          <a href="#chicken" onClick={()=>(setModalShow(true),
                            setdishDetail(
                              {
                                dish_name:filteredPudding.dish_name,
                                price: filteredPudding.dish_price,
                                dish_id:filteredPudding.dish_id
                              }
                            ))}>
                            {filteredPudding.dish_name}
                          </a>
                          <div style={{ color: "grey" }}>{filteredPudding.dish_description}</div>
                        </div>
                        <div className="col-lg-4">
                          <p>₹{filteredPudding.dish_price}</p>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="col-lg-6">
                    {MenuData.filter(data => data.category === 'Pudding' && data.restaurant_id === 2 && data.dish_id > 75).map(filteredPudding =>
                      <div className="row">
                        <div className="col-lg-8">
                          <a href="#chicken" onClick={()=>(setModalShow(true),
                            setdishDetail(
                              {
                                dish_name:filteredPudding.dish_name,
                                price: filteredPudding.dish_price,
                                dish_id:filteredPudding.dish_id
                              }
                            ))}>
                            {filteredPudding.dish_name}
                          </a>
                          <div style={{ color: "grey" }}>{filteredPudding.dish_description}</div>
                        </div>
                        <div className="col-lg-4">
                          <p>₹{filteredPudding.dish_price}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <p>
              <a
                data-toggle="collapse"
                href="#mapp"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample"
                style={{color:"#01579b"}}
              >
                View Map and Hours
                <span style={{ float: "right" }}>
                  <i class="fas fa-angle-down"></i>
                </span>
              </a>
            </p>
            <div class="collapse" id="mapp">
              <div class="card card-body">
                <div className="row">
                  <div className="col-lg-12">
                      <p>Phone: <span style={{color:"blue"}}>9876543210</span></p>
                    <div className="row">
                      <div className="col-lg-6">
                        <p style={{textAlign:"center"}}>Delivery Hours</p>
                        <div className="row">
                          <div className="col-lg-3">Mon</div>
                          <div className="col-lg-9">12:00 pm - 12:00 am</div>
                        </div>
                        <br/>
                        <div className="row">
                          <div className="col-lg-3">Tue</div>
                          <div className="col-lg-9">12:00 pm - 12:00 am</div>
                        </div>
                        <br/>
                        <div className="row">
                          <div className="col-lg-3">Wed</div>
                          <div className="col-lg-9">12:00 pm - 12:00 am</div>
                        </div>
                        <br/>
                        <div className="row">
                          <div className="col-lg-3">Thu</div>
                          <div className="col-lg-9">12:00 pm - 12:00 am</div>
                        </div>
                        <br/>
                        <div className="row">
                          <div className="col-lg-3">Fri</div>
                          <div className="col-lg-9">12:00 pm - 12:00 am</div>
                        </div>
                        <br/>
                        <div className="row">
                          <div className="col-lg-3">Sat</div>
                          <div className="col-lg-9">12:00 pm - 12:00 am</div>
                        </div>
                        <br/>
                        <div className="row">
                          <div className="col-lg-3">Sun</div>
                          <div className="col-lg-9">12:00 pm - 12:00 am</div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <p style={{textAlign:"center"}}>Pickup Hours</p>
                        <div className="row">
                          <div className="col-lg-3">Mon</div>
                          <div className="col-lg-9">12:00 pm - 12:00 am</div>
                        </div>
                        <br/>
                        <div className="row">
                          <div className="col-lg-3">Tue</div>
                          <div className="col-lg-9">12:00 pm - 12:00 am</div>
                        </div>
                        <br/>
                        <div className="row">
                          <div className="col-lg-3">Wed</div>
                          <div className="col-lg-9">12:00 pm - 12:00 am</div>
                        </div>
                        <br/>
                        <div className="row">
                          <div className="col-lg-3">Thu</div>
                          <div className="col-lg-9">12:00 pm - 12:00 am</div>
                        </div>
                        <br/>
                        <div className="row">
                          <div className="col-lg-3">Fri</div>
                          <div className="col-lg-9">12:00 pm - 12:00 am</div>
                        </div>
                        <br/>
                        <div className="row">
                          <div className="col-lg-3">Sat</div>
                          <div className="col-lg-9">12:00 pm - 12:00 am</div>
                        </div>
                        <br/>
                        <div className="row">
                          <div className="col-lg-3">Sun</div>
                          <div className="col-lg-9">12:00 pm - 12:00 am</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <MapBox lat={lat} lon={lon} restaurant_name={restaurant_name}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ItemModal show={modalShow} onHide={()=>setModalShow(false)} dishdetail={dishDetail}/>
    </>
  );
}

export default MenuDisplay;
