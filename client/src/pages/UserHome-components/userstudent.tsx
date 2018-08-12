import * as React from "react";
import './userstudent.css';

export default class UserStudent extends React.Component {
  public render() {
    return (
      <div id="accordion" role="tablist">

        <div className="card">
          <div className="card-header" role="tab" id="headingOne">
            <h5 className="mb-0">
              <a data-toggle="collapse" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Personal Information
              </a>
            </h5>
          </div>

          <div id="collapseOne" className="collapse show" role="tabpanel" aria-labelledby="headingOne">
            <div className="card-body">
              Hello
            </div>
          </div>
        </div>
      </div>
    );
  }
}
