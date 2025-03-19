import AboutUs from '../Pages/about';
import Blog from './src/blog';
import Contact from './src/contact';
import Footer from './src/footer';
import Home from './src/home';
import Login from './src/login';
import Navbar from '../Pages/navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Signup from './src/signup';
import './src/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import "remixicon/fonts/remixicon.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <AboutUs />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/blog">
              <Blog />
            </Route>
            <Route path="/login">
            <Login/>
            </Route>
            <Route path="/signup">
              <Signup/>
            </Route>
          </Switch>
        </div>
        <Footer />

      </div>

    </Router>
  );
}
export default App;
