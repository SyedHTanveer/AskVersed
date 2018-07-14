import * as React from "react";
import './userhome.css';

export default class UserHome extends React.Component {
  public render() {
    return (
      <div id="accordion" role="tablist">
        <div className="card">
          <div className="card-header" role="tab" id="headingOne">
            <h5 className="mb-0">
              <a data-toggle="collapse" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Edit Account
              </a>
            </h5>
          </div>

          <div id="collapseOne" className="collapse show" role="tabpanel" aria-labelledby="headingOne">
            <div className="card-body">
              <div>Email: </div>
              <div>Password: </div>
            </div>
          </div>
        </div>

        <div className="card mt-3">
          <div className="card-header" role="tab" id="headingOne">
            <h5 className="mb-0">
              <a data-toggle="collapse" href="#collapseTwo" aria-expanded="true" aria-controls="collapseOne">
                Upload Photo
              </a>
            </h5>
          </div>

          <div id="collapseTwo" className="collapse hide" role="tabpanel" aria-labelledby="headingTwo">
            <div className="card-body">
              Upload photo form here
            </div>
          </div>
        </div>
      </div>
    );
  }
}
