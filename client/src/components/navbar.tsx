import * as React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/versedlogo5_2.png';
import './navbar.css';


export default class Navbar extends React.Component {
  public render() {
    return (
      <nav className="navbar navbar-expand-md navbar-light bg-light shadow">
        <div className="container">
          <Link className="navbar-brand" to="/"><img className="logo-img" src={logo}/></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span className="navbar-toggler-icon" />
            </button>

            <div className="collapse navbar-collapse" id="collapsibleNavbar" aria-expanded="false" aria-controls="nav-collapse">
              <ul className="navbar-nav ml-auto align-items-center mt-2 mt-md-0">
                <li className="nav-item nav-item-text p-2">
                  <Link to="/about" style={{ textDecoration: 'none' }}>About</Link>{/* had to this textDecoration through inline style because it was not working in CSS */}
                </li>
                <li className="nav-item nav-item-text p-2">
                  <Link to="/advisors" style={{ textDecoration: 'none' }}>Advisors</Link>
                </li>
                <li className="nav-item nav-item-text p-2">
                  <Link to="/blog" style={{ textDecoration: 'none' }}>Blog</Link>
                </li>
                <li className="nav-item nav-item-text p-2">
                  <Link to="/checkout" style={{ textDecoration: 'none' }}>My Cart</Link>
                </li>


                <li className="nav-item p-2 d-none d-md-inline" style={{ textDecoration: 'none' }}>
                  <Link to="/login" style={{ textDecoration: 'none' }}>
                  <button className="btn btn-sm btn-outline-secondary btn-navbar">Log In</button>
                  </Link>
                </li>
                <li className="nav-item p-2 d-md-none">
                  <Link to="/login" style={{ textDecoration: 'none' }}>
                  <button className="btn btn-sm btn-outline-secondary btn-block px-5 btn-navbar">Log In</button>
                  </Link>
                </li>
                  <li className="nav-item d-none d-md-inline">
                    <Link to="/signup" style={{ textDecoration: 'none' }}>
                      <button className="btn btn-outline-primary btn-navbar" >Sign Up</button>
                    </Link>
                  </li>
                <li className="nav-item p-2 d-md-none">
                  <Link to="/signup" style={{ textDecoration: 'none' }}>
                      <button className="btn btn-sm btn-outline-primary btn-block px-5 btn-navbar">Sign Up</button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
      </nav>
    )
  }
}
