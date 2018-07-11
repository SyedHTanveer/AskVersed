import * as React from "react";
import { Link, Redirect } from 'react-router-dom';
import logo from '../../assets/versedlogo5_2.png';
import './login.css';

export default class Login extends React.Component<{}, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      email: '',
      password: '',
      rememberMe: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  public handleChange = (e: any) => {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  public handleSubmit = (e: any) => {
    e.preventDefault();
    return <Redirect to='/userHomepage' />;
  }

  public render() {
    return (
      <div className="bg-light">
        <div className="d-flex justify-content-center align-items-center">
          <form className="form-login text-center container" onSubmit={this.handleSubmit}>
            <Link to='/'><img className="m-4" src={logo} alt="" width="75%" /></Link>
            <h1 className="h3 mb-3 font-weight-light">Please sign in</h1>
            <div className="floating-label-form-group">
              <label className="sr-only">Email address</label>
              <input name="email" className="form-control mb-2" placeholder="Email address" value={this.state.email} onChange={this.handleChange} autoFocus={true}/>
            </div>

            <div className="floating-label-form-group">
              <label className="sr-only">Password</label>
              <input name="password" className="form-control" placeholder="Password" value={this.state.password} onChange={this.handleChange}/>
            </div>
            <div className="checkbox mb-3">
              <label>
                <input type="checkbox" name="checkbox" value={this.state.rememberMe} onChange={this.handleChange}/> Remember me
              </label>
            </div>
            <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>

            <div> Dont have an account? <Link to='/signup'>Signup here!</Link></div>
            <div className=" mt-5 mb-3 container container-footer">
              <span className="text-muted"> &#169; Copyright {new Date().getFullYear()} Versed, Inc.</span>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
