import * as React from 'react';
import { Link } from 'react-router-dom';
import './jumbotron.css';

export default class Jumbotron extends React.Component {
  public render() {
    return (
      <div className="jumbotron jumbotron-fluid">
          <h1 className="display-4">College admissions advice from <p>parents you trust</p></h1>
          <p className="lead">Find and connect with parents who have been in your shoes.</p>
          <div className="lead">
            <p> Access credible, timely information from parents who have helped their children navigate </p>
            <p> the college admissions process and gain admissions to top universities.</p>
          </div>
            <div className="container-btn">
              <Link className="btn btn-outline-primary btn-lg" to="/advisors">Find Your Advisor</Link>
            </div>
      </div>
      )
    }
  }
