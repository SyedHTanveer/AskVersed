import * as React from 'react';
import logo from './versedlogo5_2.png';


export default class Navbar extends React.Component {
  public render() {
    return (
      <nav className="navbar bg-white-super-trans navbar-expand-lg fixed-top">
        <a className="navbar-brand ml-5 pl-5" href="#"><img className="logo-img" src={logo} /></a>
        <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active pr-5">
              Advisors
            </li>
            <li className="nav-item pr-5">
              About
            </li>
            <li className="nav-item pr-5">
              Blog
            </li>
            <li className="nav-item pr-5">
              My Cart
            </li>
            <li className="nav-item pr-5">
              Sign Up
            </li>
            <li className="nav-item pr-5">
              Log In
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
