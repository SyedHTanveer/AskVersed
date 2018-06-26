import * as React from 'react';
import './UseInfo.css';

export default class UseInfo extends React.Component {
  public render() {
    return (
      <div className="white-panel">
        <div className="container text-center w-50 pt-5">
            <h1 className="text-center">
              How you can use Versed
            </h1>
            <h2 className="text-center">
              Our Parent Advisors are available to share their experiences in every aspect of the college admission journey. 
            </h2>
            <h2 className="text-center">
              Here are some examples:
            </h2>
            <br/>
            <div className="col-sm-12 col-md-12 col-xs-12 content-box">
              <h4 className="title">
                <span className="fa-stack fa-2x">
                  <i className="fa fa-circle fa-stack-2x" />
                  <i className="fa fa-graduation-cap fa-stack-1x fa-inverse" aria-hidden="true" /></span></h4>
              <h4 className="title">General Admissions Process</h4>
            </div>
            <p className="text-center">
              When should we start thinking about the college admissions process?
              <br/>
              How do we narrow down our college choices?
              <br/>
              Is there an advantage to applying early?
              <br/>
              Should we hire a private college counselor?
              <br/>
              Are test prep programs necessary?
            </p>

            <div className="col-sm-12 col-md-12 col-xs-12 content-box">
              <h4 className="title">
                <span className="fa-stack fa-2x">
                 <i className="fa fa-circle fa-stack-2x" />
                 <i className="fa fa-book fa-stack-1x fa-inverse" aria-hidden="true" /></span></h4>
              <h4 className="title">General High School Guidance</h4>
            </div>
            <p className="text-center">
              Which AP classes should my daughter take?
              <br/>
              Is there a way to help my son improve his study habits?
              <br/>
              My daughter is a good violinist, but how can I help her stand out?
              <br/>
              My son is a great soccer player, but what does it take to be recruited?
              <br/>
              How should my daughter spend her summers?
            </p>

            <div className="col-sm-12 col-md-12 col-xs-12 content-box">
              <h4 className="title"><span className="fa-stack fa-2x">
                <i className="fa fa-circle fa-stack-2x" />
                <i className="fa fa-map-signs fa-stack-1x fa-inverse" aria-hidden="true" /></span></h4>
              <h4 className="title">Special Situations in High School</h4>
            </div>
            <p className="text-center">
              We are considering transferring our son to another high school, how does that impact college admissions? 
              <br/>
              My daughter skipped 2 grades, and will be very young when applying to college – what are some things we should consider?
              <br/>
              What are some good online high schools and homeschooling resources?
            </p>

        </div>
      </div>
      )
    }
  }