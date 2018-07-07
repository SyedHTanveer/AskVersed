import * as React from "react";
import logo from '../../assets/versedlogo5_2.png';
import './login.css';

export default class Login extends React.Component {
  public render() {
    return (
      <div className="container w-25 mb-5">
        <body className="text-center d-flex justify-content-center">
            <form className="form-signin">
              <img className="m-5" src={logo} alt="" width="75%" />
              <h1 className="h3 mb-3 font-weight-light">Please sign in</h1>
              <label className="sr-only">Email address</label>
              <input type="email" id="inputEmail" className="form-control" placeholder="Email address" />
              <label className="sr-only">Password</label>
              <input type="password" id="inputPassword" className="form-control" placeholder="Password" />
              <div className="checkbox mb-3">
                <label>
                  <input type="checkbox" value="remember-me" /> Remember me
                </label>
              </div>
              <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
            </form>
        </body>
      </div>
    )
  }
}
