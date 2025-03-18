import {Link} from "react-router-dom";

const Login = () => {
    return (
        <div className="login-main">
            <div className="login-text">
                <h1>Hello!</h1>
                <p>Welcome to OG COLLINS College</p>
            </div>
            <div className="login-container">
                <h3>Login</h3>
                <div>
                    <input type="email" className="form-control" placeholder="Email" />
                </div>
                <div>
                    <input type="password" className="form-control" placeholder="Password" />
                </div>
                <div className="forget">
                    <Link>Forget Password</Link>
                </div>
                <div className="login-button">
                    <button>Login</button>
                </div>
                <div className="signingup">
                    <p>Don't have account? <Link>Sign Up</Link></p>
                </div>
            </div>
        </div>
    );
}

export default Login;