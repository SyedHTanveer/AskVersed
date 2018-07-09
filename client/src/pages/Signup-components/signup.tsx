import * as React from "react";
import { Link, Redirect } from 'react-router-dom';
import logo from '../../assets/versedlogo5_2.png';
import Footer from '../../components/footer';
import './signup.css';

export default class Signup extends React.Component<{}, any> {

  constructor(props: any) {
    super(props);
    this.state = {
      email: '',
      name:'',
      password: '',
      verifyPassword: ''
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
    if(this.state.password === this.state.verifyPassword && (this.state.password.length >= 8)){
      // tslint:disable-next-line:no-console
      console.log("Password: " + this.state.password + "\n" + "Verify: " + this.state.verifyPassword);
      return {...<Redirect to='/userHomepage' />};
    } else {
      // tslint:disable-next-line:no-console
      return alert('password does not match');
    }
  }

    public render() {
      return (
      <div className="bg-light">
        <div className="container">
          <form className="form-signup text-center" onSubmit={this.handleSubmit}>
            <Link to='/'><img className="m-4" src={logo} alt="" width="75%" /></Link>
            <h1 className="h3 mb-3 font-weight-light ">Sign up for Versed</h1>
            <div className="row">
              <p className="col-12 text-left">Gain access into an extraordinary community of Parent Advisors that can help you navigate the college admission process with their firsthand knowledge and experience.</p>
              <p className="col-12 text-left">Create a free account to view Advisor and Student profiles, search and purchase consultations, and receive information and insights into the college admissions process.</p>
            </div>
            <div className="floating-label-form-group">
              <label className="sr-only">Email address</label>
              <input name="email" className="form-control mb-2" placeholder="Email address" value={this.state.email} onChange={this.handleChange} autoFocus={true}/>
            </div>

            <div className="floating-label-form-group">
              <label className="sr-only">Password</label>
              <input type="password" name="password" className="form-control mb-2" placeholder="Password" value={this.state.password} onChange={this.handleChange}/>
            </div>

            <div className="floating-label-form-group">
              <label className="sr-only">Password</label>
              <input type="password" name="verifyPassword" className="form-control mb-2" placeholder="Verify password" value={this.state.verifyPassword} onChange={this.handleChange}/>
            </div>
            <button className="btn btn-lg btn-primary btn-block" type="submit">Submit</button>
          </form>
        <Footer />
      </div>
    </div>
    )
  }
}
