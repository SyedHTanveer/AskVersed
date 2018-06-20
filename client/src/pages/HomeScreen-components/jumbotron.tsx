import * as React from 'react';
import { Link } from 'react-router-dom';
import './jumbotron.css';

export default class Jumbotron extends React.Component {
  public render() {
    return (
      <div className="main-background">
        <div className="container text-center w-50 pt-5">
          <h1 className="display-4 row text-center flex-wrap">
            College admissions advice from parents you trust
          </h1>
          <p className="lead row justify-content-center flex-wrap">
            Find and connect with parents who have been in your shoes.
          </p>
          <p className="lead row justify-content-center flex-wrap">
            Access credible, timely information from parents who have helped their children navigate the college admissions process and gain admissions to top universities.
          </p>
            <div className="row justify-content-center flex-wrap">
              <Link className="btn btn-outline-light btn-lg" to="/advisors">Find Your Advisor</Link>
            </div>
          </div>
      </div>
      )
    }
  }
