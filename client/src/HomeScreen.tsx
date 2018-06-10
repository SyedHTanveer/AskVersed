import * as React from "react";

export default class HomeScreen extends React.Component {
  public render() {
    return (
      <div className="home-top d-flex flex-column pt-5">
        <div className="h-50 d-flex flex-column justify-content-between">
          <div className="p-4 bg-white-trans">
            <div className="text-home-big">
              College admissions advice from parents you trust.
            </div>
          </div>
          <div className="d-flex flex-column justify-content-around p-4 bg-white-trans text-home-desc">
            <div>
              Find and connect with parents who have been in your shoes.
            </div>
            <div>
              Access credible, timely information from parents who have helped
              their children navigate the college admissions process and gain
              admissions to top universities.
            </div>
          </div>
          <div />
        </div>
        <div className="mt-auto h-50 mb-5 row">
          <div className="col">
            <div>
              <button type="button" className="btn btn-primary btn-lg"> Find Your Advisor </button>
            </div>
            <div>or become an advisor.</div>
          </div>
        </div>
      </div>
    );
  }
}
