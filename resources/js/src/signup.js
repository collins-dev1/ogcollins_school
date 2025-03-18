import { Link } from "react-router-dom";
import React, { useState } from 'react';
import {
    CountryDropdown,
    StateDropdown,
} from 'react-country-state-dropdown';

const Signup = () => {
    const [country, setCountry] = useState('');
    const [state, setState] = useState('');
    return (
        <div className="signup-main">
            <div className="signup-text">
                <h1>Hello!</h1>
                <p>Welcome to OG COLLINS College</p>
            </div>
            <div className="signup-container">
                <h3>Register</h3>
                <div>
                    <input type="text" className="form-control" placeholder="Full Name" />
                </div>
                <div>
                    <input type="tel" className="form-control" placeholder="Phone Number" />
                </div>
                <div>
                    <input type="email" className="form-control" placeholder="Email" />
                </div>
                <div>
                    <input type="date" className="form-control" placeholder="Date of Birth" />
                </div>
                <div>
                    <select className="form-control">
                        <option selected disabled>--Select your Gender--</option>
                        <option>Male</option>
                        <option>Female</option>
                    </select>
                </div>
                <div>
                    <CountryDropdown className="country1"
                        value={country}
                        onChange={(e, value) => setCountry(value)}
                        placeholder="Select Country" 
                    />
                </div>
                <div>
                    <StateDropdown id="state1"
                        country={country}
                        value={state}
                        onChange={(e, value) => setState(value)}
                        placeholder="Select State"
                    />
                </div>
                <div>
                    <input type="text" className="form-control" placeholder="Home Address" />
                </div>
                <div>
                    <input type="password" className="form-control" placeholder="Password" />
                </div>
                <div>
                    <input type="password" className="form-control" placeholder="Confirm Password"/>
                </div>
                <div>
                    <input type="checkbox"/>
                    <span className="px-2">I Agree with the <Link>Terms</Link> and <Link>Condition</Link></span>
                </div>
                <div className="signup-button">
                    <button>Register</button>
                </div>
                <div className="logining">
                    <span>Already have an Account? <Link>Login</Link></span>
                </div>
            </div>
        </div>
    );
}

export default Signup;