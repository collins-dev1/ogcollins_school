import school_pic from "./asset/school_picture1.jpeg";
import school_pic1 from "./asset/school_picture2.jpeg";
import school_pic2 from "./asset/school_picture3.jpeg";
import line from "./asset/line.png";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import course1 from "./asset/course1.jpeg";
import course2 from "./asset/course2.jpeg";
import course3 from "./asset/course3.jpeg";
import course4 from "./asset/course4.jpeg";
import course5 from "./asset/course5.jpeg";
import course6 from "./asset/course6.jpeg"; 


const Home = () => {
    return (
        <main>
            <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={school_pic} class="d-block w-100" alt="..." />
                        <div class="carousel-caption">
                            <h5 className="display-5" style={{
                                color: "#FFF605",
                                fontWeight: "bold",

                            }}>A good education is a foundation for better future</h5>
                            <p>A community with high expectation and high academic achievement.</p>
                            <Link to="/login"><button>Get Started</button></Link>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={school_pic1} class="d-block w-100" alt="..." />
                        <div class="carousel-caption">
                            <h5 className="display-5" style={{
                                color: "#FFF605",
                                fontWeight: "bold",

                            }}>A good education is a foundation for better future</h5>
                            <p>A community with high expectation and high academic achievement.</p>
                            <Link to="/login"><button>Get Started</button></Link>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={school_pic2} class="d-block w-100" alt="..." />
                        <div class="carousel-caption">
                            <h5 className="display-5" style={{
                                color: "#FFF605",
                                fontWeight: "bold",

                            }}>A good education is a foundation for better future</h5>
                            <p>A community with high expectation and high academic achievement.</p>
                            <Link to="/login"><button>Get Started</button></Link>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>

            {/* Total section */}
            <div className="total">
                <div>
                    <h5>250+</h5>
                    <p>Total Courses</p>
                </div>
                <div>
                    <h5>300+</h5>
                    <p>Total Instractor</p>
                </div>
                <div>
                    <h5>35k+</h5>
                    <p>Total Students</p>
                </div>
                <div>
                    <h5>42k+</h5>
                    <p>Total Seat</p>
                </div>
            </div>

            {/* Working process section */}
            <div className="working">
                <div className="working-text">
                    <h3>Working Process and Benefits</h3>
                    <img src={line} />
                </div>
                <div className="working-container">
                    <Link>
                        <div>
                            <div className="search"><i className="ri-search-line"></i></div>
                            <h6>Find Course</h6>
                        </div>
                    </Link>
                    <Link>
                        <div>
                            <div className="book"><i class="ri-add-circle-fill"></i></div>
                            <h6>Book Seat</h6>
                        </div>
                    </Link>
                    <Link>
                        <div>
                            <div className="award"><i class="ri-medal-line"></i></div>
                            <h6>Find Course</h6>
                        </div>
                    </Link>
                </div>
            </div>

            {/* Popular Courses */}
            <div className="container">
                <div className="popular_course">
                    <h3>Our Popular Courses</h3>
                    <Link>
                        <button>VIEW ALL</button>
                    </Link>
                </div>

                <div className="row row-cols-1 row-cols-md-4 row-cols-lg-3 g-3 mt-3">
                    <div className="col" id="card-holder">
                        <div className="card">
                            <div>
                                <img src={course1} width="100%"/>
                            </div>
                            <div className="card-body">
                                <span>UI/UX Course</span>
                                <h5>$450</h5>
                            </div>
                            <div className="card-footer">
                                <h4>UI/UX Complete : From Zeo to Hero</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col" id="card-holder">
                        <div className="card">
                            <div>
                                <img src={course2} width="100%"/>
                            </div>
                            <div className="card-body">
                                <span>UI/UX Course</span>
                                <h5>$450</h5>
                            </div>
                            <div className="card-footer">
                                <h4>UI/UX Complete : From Zeo to Hero</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col" id="card-holder">
                        <div className="card">
                            <div>
                                <img src={course3} width="100%"/>
                            </div>
                            <div className="card-body">
                                <span>UI/UX Course</span>
                                <h5>$450</h5>
                            </div>
                            <div className="card-footer">
                                <h4>UI/UX Complete : From Zeo to Hero</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col" id="card-holder">
                        <div className="card">
                            <div>
                                <img src={course4} width="100%"/>
                            </div>
                            <div className="card-body">
                                <span>UI/UX Course</span>
                                <h5>$450</h5>
                            </div>
                            <div className="card-footer">
                                <h4>UI/UX Complete : From Zeo to Hero</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col" id="card-holder">
                        <div className="card">
                            <div>
                                <img src={course5} width="100%"/>
                            </div>
                            <div className="card-body">
                                <span>UI/UX Course</span>
                                <h5>$450</h5>
                            </div>
                            <div className="card-footer">
                                <h4>UI/UX Complete : From Zeo to Hero</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col" id="card-holder">
                        <div className="card">
                            <div>
                                <img src={course6} width="100%"/>
                            </div>
                            <div className="card-body">
                                <span>UI/UX Course</span>
                                <h5>$450</h5>
                            </div>
                            <div className="card-footer">
                                <h4>UI/UX Complete : From Zeo to Hero</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Home;