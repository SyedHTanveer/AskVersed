import * as React from 'react';
import { Link } from 'react-router-dom';
import './jumbotron.css';

export default class Jumbotron extends React.Component {
  public render() {
    return (
        <div className="main-background">
          <div className="container text-center d-flex flex-wrap align-items-center">
            <div className="flex-row m-3 p-5">
              <h1 className="display-4 row main-header">
                College admissions advice from parents you trust
              </h1>

              <p className="lead text-center d-none d-sm-block col-12">
                Find and connect with parents who have been in your shoes.
              </p>
              <p className="lead text-center col-12">
                Access credible, timely information from parents who have helped their children navigate the college admissions process and gain admissions to top universities.
              </p>
              <div className="justify-content-center">
                <div className="p-2">
                  <Link className="btn btn-primary btn-md" to="/advisors">Find Your Advisor</Link>
                </div>
                <div className="p-2">
                  <Link className="btn btn-light btn-md" to="/signup">Sign up to be an Advisor</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
