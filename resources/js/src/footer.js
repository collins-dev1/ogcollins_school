import { Link } from "react-router-dom/cjs/react-router-dom.min";
import logo from "./asset/ogcollinscollegemain.png";

const Footer = () => {
    return (
        <div className="mt-5" id="footer">
            <div className="container">
                <div id="footer1">
                    <div>
                        <div className="footer-logo">
                            <Link to="/">
                                <img src={logo} width="100px" height="100px" />
                            </Link>
                            <p className="text-center">Contrary to popular is not<br /> simply random text it has</p>
                            <div className="footer-icons">
                                <div>
                                    <i class="ri-facebook-fill"></i>
                                </div>
                                <div>
                                    <i class="ri-instagram-line"></i>
                                </div>
                                <div>
                                    <i class="ri-twitter-x-fill"></i>
                                </div>
                                <div>
                                    <i class="ri-youtube-fill"></i>
                                </div>
                                <div>
                                    <i class="ri-linkedin-fill"></i>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="foot-hold">
                        <div>
                            <div className="footer-text">
                                <h3>About</h3>
                                <ul>
                                    <li>
                                        <Link to="">Our Story</Link>
                                    </li>
                                    <li>
                                        <Link to="">Open Position</Link>
                                    </li>
                                    <li>
                                        <Link>Empower Us</Link>
                                    </li>
                                    <li>
                                        <Link>How it Work</Link>
                                    </li>
                                    <li>
                                        <Link>Blog</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <div className="footer-text">
                                <h3>Learning</h3>
                                <ul>
                                    <li>
                                        <Link to="">Get App</Link>
                                    </li>
                                    <li>
                                        <Link to="">Testimonial</Link>
                                    </li>
                                    <li>
                                        <Link to="">FAQ</Link>
                                    </li>
                                    <li>
                                        <Link to="">Contact</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <div className="footer-text">
                                <h3>More</h3>
                                <ul>
                                    <li>
                                        <Link to="">Inbox</Link>
                                    </li>
                                    <li>
                                        <Link to="">News Press</Link>
                                    </li>
                                    <li>
                                        <Link>Free Personality Test</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;