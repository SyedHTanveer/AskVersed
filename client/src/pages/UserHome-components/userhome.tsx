import * as React from "react";
import './userhome.css';

export default class UserHome extends React.Component <any, any> {
  public constructor(props: any) {
    super(props);
    this.state = {
      email: "",
      password: ""
    }
  }
  public componentWillMount() {
    fetch("http://localhost:8000/newParent", {
      body: JSON.stringify({
        email: "littlefe2000@gmail.com"
      }),
      credentials: 'include',
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      method:"POST",

      // tslint:disable-next-line:no-console
    }).then((val) => console.log(val));
  }
  public render() {
    return (
      <div id="accordion" role="tablist">
        <div className="card">
          <div className="card-header" role="tab" id="headingOne">
            <h5 className="mb-0">              <a data-toggle="collapse" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Edit Account
              </a>
            </h5>
          </div>

          <div id="collapseOne" className="collapse show" role="tabpanel" aria-labelledby="headingOne">
            <div className="card-body">
              {this.state.email}
              {this.state.password}
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

          <div id="collapseTwo" className="collapse show" role="tabpanel" aria-labelledby="headingTwo">
            <div className="card-body">
              UserName
              Password
            </div>
          </div>
        </div>
      </div>
    );
  }
}
