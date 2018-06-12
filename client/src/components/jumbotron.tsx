import * as React from 'react';
import { Link } from 'react-router-dom';
import './jumbotron.css';

export default class Jumbotron extends React.Component {
  public render() {
    return (
      <div className="jumbotron jumbotron-fluid">
        <div className="container-jumbotron">
          <h1 className="display-4">College admissions advice from parents you trust</h1>
          <p className="lead">Find and connect with parents who have been in your shoes.</p>
          <p className="lead">Access credible, timely information from parents who have helped their children navigate the college admissions process and gain admissions to top universities.</p>
            <div className="container-btn">
              <Link className="btn btn-outline-primary btn-lg" to="/advisors">Find Your Advisor</Link> or <Link className="signup" to="/signup">become an advisor</Link>
            </div>
        </div>
      </div>
      )
    }
  }
