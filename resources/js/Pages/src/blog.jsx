import blog1 from "./asset/course1.jpeg";
import { Link } from "react-router-dom";

const Blog = () => {
    return (
        <div className="blog-container">
            <div className="blog-header">
                <div className="blog-text">
                    <h1>Blog</h1>
                    <p>lormfcooncqcnr jjnv ogcollinscollegemaini ndirfnirn</p>
                </div>
            </div>
            {/* Blog Cards */}

            <div className="container mt-5">
                <h3 className="d-flex flex-row justify-content-center align-items-center">My Blog</h3>
                <div className="blog-card mt-3">
                    <div className="row row-cols-1 row-cols-md-3 row-cols-lg-3 g-3">
                        <div className="col">
                            <div className="card">
                                <div className="card-header">
                                    <img src={blog1} />
                                </div>
                                <div className="card-body">
                                    <h4>Who we are</h4>
                                    <p>loxveyuvxgjevxveveyxvyuevxcy</p>
                                </div>
                                <div className="card-footer">
                                    <Link>
                                        <button>View More</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <div className="card-header">
                                    <img src={blog1} />
                                </div>
                                <div className="card-body">
                                    <h4>Who we are</h4>
                                    <p>loxveyuvxgjevxveveyxvyuevxcy</p>
                                </div>
                                <div className="card-footer">
                                    <Link>
                                        <button>View More</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <div className="card-header">
                                    <img src={blog1} />
                                </div>
                                <div className="card-body">
                                    <h4>Who we are</h4>
                                    <p>loxveyuvxgjevxveveyxvyuevxcy</p>
                                </div>
                                <div className="card-footer">
                                    <Link>
                                        <button>View More</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <div className="card-header">
                                    <img src={blog1} />
                                </div>
                                <div className="card-body">
                                    <h4>Who we are</h4>
                                    <p>loxveyuvxgjevxveveyxvyuevxcy</p>
                                </div>
                                <div className="card-footer">
                                    <Link>
                                        <button>View More</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <div className="card-header">
                                    <img src={blog1} />
                                </div>
                                <div className="card-body">
                                    <h4>Who we are</h4>
                                    <p>loxveyuvxgjevxveveyxvyuevxcy</p>
                                </div>
                                <div className="card-footer">
                                    <Link>
                                        <button>View More</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <div className="card-header">
                                    <img src={blog1} />
                                </div>
                                <div className="card-body">
                                    <h4>Who we are</h4>
                                    <p>loxveyuvxgjevxveveyxvyuevxcy</p>
                                </div>
                                <div className="card-footer">
                                    <Link>
                                        <button>View More</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Blog;