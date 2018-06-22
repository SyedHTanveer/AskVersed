import * as React from 'react';
import { Link } from 'react-router-dom';
import './prefooter.css';

export default class PreFooter extends React.Component {
  public render() {
    return (
      <div className="container-prefooter">
        <div className="container-btn">
          <Link className="btn btn-primary btn-lg" to="/advisors">Find Your Advisor</Link>
        </div>
      </div>
    )
  }
}
