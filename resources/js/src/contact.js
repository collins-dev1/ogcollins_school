import school_building from "./asset/school_building.jpeg";

const Contact = () => {
    return (
        <div className="contact-container">
            <div className="contact-pic">
                <div className="contact-text">
                    <h1 className="display-5">Contact Us</h1>
                    <p>Have questions or need assistance? Get in touch with us! We're here to help and look forward to hearing from you.</p>
                </div>
            </div>
            <div className="main-contact">
                <div>
                    <img src={school_building} />
                </div>
                <div className="contact-texting">
                    <div>
                        <h1>Contact Us</h1>
                        <p>Your "Contact Us" header text should be clear, inviting, and professional. It sets the tone for how visitors reach out to you. Here’s a short description:

                            "Have questions or need assistance? Get in touch with us! We're here to help and look forward to hearing from you."

                            Let me know if you want something more formal, friendly, or tailored to your business </p>
                    </div>
                    <div className="mt-4">
                        <form>
                            <div className="full-name">
                                <div>
                                    <label>Full Name</label>
                                    <input type="text" placeholder="Full Name" className="form-control"/>
                                </div>
                                <div>
                                    <label>Email Address</label>
                                    <input type="email" placeholder="Email Address" className="form-control"/>
                                </div>
                            </div>
                            <div className="mt-4">
                                <label>Text Message</label>
                                <textarea className="form-control" rows={6}></textarea>
                            </div>
                            <div className="form-button mt-4">
                                <button>Get in Touch</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {/* Unit Location */}
            <div className="container mt-5">
                <div className="row row-cols-1 row-cols-md-5 row-cols-lg-5 g-3">
                    <div className="col">
                        <div>
                            <h3>Unit 1</h3>
                            <hr/>
                            <p>MM Jessor</p>
                            <p>Jessor</p>
                            <span>Phone 090884844</span>
                        </div>
                    </div>
                    <div className="col">
                        <div>
                            <h3>Unit 1</h3>
                            <hr/>
                            <p>MM Jessor</p>
                            <p>Jessor</p>
                            <span>Phone 090884844</span>
                        </div>
                    </div>
                    <div className="col">
                        <div>
                            <h3>Unit 1</h3>
                            <hr/>
                            <p>MM Jessor</p>
                            <p>Jessor</p>
                            <span>Phone 090884844</span>
                        </div>
                    </div>
                    <div className="col">
                        <div>
                            <h3>Unit 1</h3>
                            <hr/>
                            <p>MM Jessor</p>
                            <p>Jessor</p>
                            <span>Phone 090884844</span>
                        </div>
                    </div>
                    <div className="col">
                        <div>
                            <h3>Unit 1</h3>
                            <hr/>
                            <p>MM Jessor</p>
                            <p>Jessor</p>
                            <span>Phone 090884844</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;