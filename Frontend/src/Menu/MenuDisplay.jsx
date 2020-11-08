import React from 'react'
import Scrollspy from 'react-scrollspy'
import MenuData from './MenuData.json'
import './menuDisplay.css'
function MenuDisplay() {
    return (
        <div className="container-fluid" style={{ backgroundColor: "grey" }}>
            <div className="row">
                <div className="App">
                    <Scrollspy
                        className="scrollspy" items={['section-1', 'section-2', 'section-3', 'section-4']}
                        currentClassName="isCurrent">
                        <li><a href="#section-1">Appetizer</a></li>
                        <li><a href="#section-2">Breakfast</a></li>
                        <li><a href="#section-3">Main Course</a></li>
                        <li><a href="#section-4">Pudding</a></li>
                    </Scrollspy>
                    {MenuData.map((e) => (
                        <div
                            key={e.id}
                            onScroll={() => {
                                console.log("working");
                            }}
                        >
                            <section id="section-1">
                                <div className="col-lg-5">
                                    <div className="row">
                                        <div className="col-lg-9" style={{ marginLeft: "200px" }}>
                                            <div>{e.dish_name}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="row">
                                        <div className="col-lg-8" style={{ marginLeft: "200px" }}>
                                            <span>{e.dish_description}</span>
                                        </div>
                                        <div className="col-lg-2" style={{ marginLeft: "200px" }}>
                                            <span>{e.dish_price}</span>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    ))};
        </div>
            </div>
        </div>
    );
}

export default MenuDisplay