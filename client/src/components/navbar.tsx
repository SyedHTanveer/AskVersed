import * as React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/versedlogo5_2.png';
import './navbar.css';

export default class Navbar extends React.Component {
  public render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand ml-5 pl-5" to="/"><img className="logo-img" src={logo}/></Link>
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"/>
        </button>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link className="nav-item active pr-5" to="/advisors">Advisors</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-item active pr-5" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-item active pr-5" to="/blog">Blog</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-item active pr-5" to="/mycart">My Cart</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-item active pr-5" to="/signup">Sign Up</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-item active pr-5" to="/login">Log In</Link>
            </li>
          </ul>
        </div>
      </nav>
  )
  }
}
