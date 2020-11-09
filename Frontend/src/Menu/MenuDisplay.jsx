import React from "react";
import MenuData from './MenuData.json'
function MenuDisplay() {
  const categorySet = ["Appetizer", "Breakfast"]
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
                >
                  Pudding
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
              >
                Appetiser
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
                    {MenuData.filter(data => data.category == 'Appetizer' && data.restaurant_id == 1 && data.dish_id < 6).map(filteredAppetizer =>
                      <div className="row">
                        <div className="col-lg-8">
                          <a href="#chicken">{filteredAppetizer.dish_name}</a>
                          <div style={{ color: "grey" }}>{filteredAppetizer.dish_description}</div>
                        </div>
                        <div className="col-lg-4">
                          <p>{filteredAppetizer.dish_price}</p>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="col-lg-6">
                    {MenuData.filter(data => data.category == 'Appetizer' && data.restaurant_id == 1 && data.dish_id > 5).map(filteredAppetizer =>
                      <div className="row">
                        <div className="col-lg-8">
                          <a href="#chicken">{filteredAppetizer.dish_name}</a>
                          <div style={{ color: "grey" }}>{filteredAppetizer.dish_description}</div>
                        </div>
                        <div className="col-lg-4">
                          <p>{filteredAppetizer.dish_price}</p>
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
                    {MenuData.filter(data => data.category == 'Breakfast' && data.restaurant_id == 2 && data.dish_id < 36).map(filteredBreakfast =>
                      <div className="row">
                        <div className="col-lg-8">
                          <a href="#chicken">{filteredBreakfast.dish_name}</a>
                          <div style={{ color: "grey" }}>{filteredBreakfast.dish_description}</div>
                        </div>
                        <div className="col-lg-4">
                          <p>{filteredBreakfast.dish_price}</p>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="col-lg-6">
                    {MenuData.filter(data => data.category == 'Breakfast' && data.restaurant_id == 2 && data.dish_id > 35).map(filteredBreakfast =>
                      <div className="row">
                        <div className="col-lg-8">
                          <a href="#chicken">{filteredBreakfast.dish_name}</a>
                          <div style={{ color: "grey" }}>{filteredBreakfast.dish_description}</div>
                        </div>
                        <div className="col-lg-4">
                          <p>{filteredBreakfast.dish_price}</p>
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
                    {MenuData.filter(data => data.category == 'Main Course' && data.restaurant_id == 1 && data.dish_id < 46).map(filteredMainCourse =>
                      <div className="row">
                        <div className="col-lg-8">
                          <a href="#chicken">{filteredMainCourse.dish_name}</a>
                          <div style={{ color: "grey" }}>{filteredMainCourse.dish_description}</div>
                        </div>
                        <div className="col-lg-4">
                          <p>{filteredMainCourse.dish_price}</p>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="col-lg-6">
                    {MenuData.filter(data => data.category == 'Main Course' && data.restaurant_id == 1 && data.dish_id > 45).map(filteredMainCourse =>
                      <div className="row">
                        <div className="col-lg-8">
                          <a href="#chicken">{filteredMainCourse.dish_name}</a>
                          <div style={{ color: "grey" }}>{filteredMainCourse.dish_description}</div>
                        </div>
                        <div className="col-lg-4">
                          <p>{filteredMainCourse.dish_price}</p>
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
                    {MenuData.filter(data => data.category == 'Pudding' && data.restaurant_id == 2 && data.dish_id < 76).map(filteredPudding =>
                      <div className="row">
                        <div className="col-lg-8">
                          <a href="#chicken">{filteredPudding.dish_name}</a>
                          <div style={{ color: "grey" }}>{filteredPudding.dish_description}</div>
                        </div>
                        <div className="col-lg-4">
                          <p>{filteredPudding.dish_price}</p>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="col-lg-6">
                    {MenuData.filter(data => data.category == 'Pudding' && data.restaurant_id == 2 && data.dish_id > 75).map(filteredPudding =>
                      <div className="row">
                        <div className="col-lg-8">
                          <a href="#chicken">{filteredPudding.dish_name}</a>
                          <div style={{ color: "grey" }}>{filteredPudding.dish_description}</div>
                        </div>
                        <div className="col-lg-4">
                          <p>{filteredPudding.dish_price}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MenuDisplay;
