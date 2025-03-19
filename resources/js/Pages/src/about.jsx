import graduated from "./asset/graduated_student.jpeg"

const AboutUs = () => {
    return (
        <div className="about-container">
            <div className="about-pic">
                <div className="about-text">
                    <h1 className="display-5">About Us</h1>
                    <p>Our school is dedicated to providing a nurturing learning environment that fosters academic success, creativity, and character development.</p>
                </div>
            </div>
            <div className="container">
                <div className="about-second">
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2 g-3">
                        <div className="col">
                            <div className="card">
                                <h4>Who we are</h4>
                                <p>loxveyuvxgjevxveveyxvyuevxcy</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <h4>Who we are</h4>
                                <p>loxveyuvxgjevxveveyxvyuevxcy</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <h4>Who we are</h4>
                                <p>loxveyuvxgjevxveveyxvyuevxcy</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <h4>Who we are</h4>
                                <p>loxveyuvxgjevxveveyxvyuevxcy</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <h4>Who we are</h4>
                                <p>loxveyuvxgjevxveveyxvyuevxcy</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <h4>Who we are</h4>
                                <p>loxveyuvxgjevxveveyxvyuevxcy</p>
                            </div>
                        </div>
                    </div>
                    <div className="about-second-img">
                        <img src={graduated} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
