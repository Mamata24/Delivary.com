import React from "react";
function MenuDisplay() {
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
                                    Appetiser
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
                                    Lunch
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
                                    Dinner
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
                                Anim pariatur cliche reprehenderit, enim eiusmod high life
                                accusamus terry richardson ad squid. Nihil anim keffiyeh
                                helvetica, craft beer labore wes anderson cred nesciunt sapiente
                                ea proident.
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
                                Anim pariatur cliche reprehenderit, enim eiusmod high life
                                accusamus terry richardson ad squid. Nihil anim keffiyeh
                                helvetica, craft beer labore wes anderson cred nesciunt sapiente
                                ea proident.
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
                                Lunch
                <span style={{ float: "right" }}>
                                    <i class="fas fa-angle-down"></i>
                                </span>
                            </a>
                        </p>
                        <div class="collapse" id="lunch">
                            <div class="card card-body">
                                Anim pariatur cliche reprehenderit, enim eiusmod high life
                                accusamus terry richardson ad squid. Nihil anim keffiyeh
                                helvetica, craft beer labore wes anderson cred nesciunt sapiente
                                ea proident.
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
                                Dinner
                <span style={{ float: "right" }}>
                                    <i class="fas fa-angle-down"></i>
                                </span>
                            </a>
                        </p>
                        <div class="collapse" id="dinner">
                            <div class="card card-body">
                                Anim pariatur cliche reprehenderit, enim eiusmod high life
                                accusamus terry richardson ad squid. Nihil anim keffiyeh
                                helvetica, craft beer labore wes anderson cred nesciunt sapiente
                                ea proident.
              </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MenuDisplay;
