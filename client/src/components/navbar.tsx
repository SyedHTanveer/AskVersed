import * as React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/versedlogo5_2.png';
import './navbar.css';

export default class Navbar extends React.Component {
  public render() {
    return (
      <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/"><img className="logo-img" src={logo}/></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span className="navbar-toggler-icon" />
            </button>

            <div className="collapse navbar-collapse" id="collapsibleNavbar">
              <ul className="navbar-nav ml-auto row align-items-center">
                <li>
                  <Link className="nav-item active col-auto" to="/advisors">
                    Advisors
                  </Link>
                </li>
                <li>
                  <Link className="nav-item active col-auto" to="/blog">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link className="nav-item active col-auto" to="/mycart">
                    My Cart
                  </Link>
                </li>
                <li>
                  <Link className="nav-item active col-auto" to="/signup">
                    <button className="btn btn-sm btn-outline-secondary">Sign Up</button>
                  </Link>
                </li>
                <li>
                  <Link className="nav-item active col-auto" to="/login">
                    <button className="btn btn-outline-primary">Log In</button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    )
  }
}
