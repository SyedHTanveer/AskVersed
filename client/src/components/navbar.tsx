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
                  <Link to="/mycart" style={{ textDecoration: 'none' }}>My Cart</Link>
                </li>


                <li className="nav-item p-2 d-none d-md-inline" style={{ textDecoration: 'none' }}>
                    <button className="btn btn-sm btn-outline-secondary" data-toggle="modal" data-target="#signinModal">Log In</button>
                </li>
                <li className="nav-item p-2 d-md-none">
                  <Link to="/login" style={{ textDecoration: 'none' }}>
                  <button className="btn btn-sm btn-outline-secondary btn-block px-5">Log In</button>
                  </Link>
                </li>
                  <li className="nav-item d-none d-md-inline">
                    <Link to="/signup" style={{ textDecoration: 'none' }}>
                      <button className="btn btn-outline-primary" >Sign Up</button>
                    </Link>
                  </li>
                <li className="nav-item p-2 d-md-none">
                  <Link to="/signup" style={{ textDecoration: 'none' }}>
                      <button className="btn btn-sm btn-outline-primary btn-block px-5">Sign Up</button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="modal fade" id="signinModal" role="dialog" aria-labelledby="SigninModal" aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title justify" id="signinModalLabel">Sign In</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <form className="form-group">
                    <div className="input-group my-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text">@</span>
                      </div>
                      <input type="text" className="form-control" placeholder="versed@askversed.com"/>
                    </div>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text"><i className="fas fa-lock" /></span>
                      </div>
                      <input type="password" className="form-control" placeholder="Password"/>
                    </div>
                  </form>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-outline-secondary" data-dismiss="modal">Close</button>
                  <button type="button" className="btn btn-outline-primary">Log In</button>
                </div>
              </div>
            </div>
          </div>

      </nav>
    )
  }
}
