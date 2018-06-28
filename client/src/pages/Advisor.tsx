import * as React from 'react';

export default class Advisor extends React.Component <IAdvisorProps> {

  public constructor(props) {
    super(props);
    this.state = {
      advisors: [],
      selected_advisor:{}
    }
  }
  public render() {
    return (
     <div className="modal fade" id="signinModal" role="dialog" aria-labelledby="SigninModal" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title justify" id="signinModalLabel">{this.state.selected_advisor.body.name}</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p className="city-state">{this.state.selected_advisor.body.city+","+this.state.selected_advisor.body.state} </p>
              {
             this.state.selected_advisor.body.colleges.map((college, index) => {
                  return (
                    <p key={index} className="college">{college}</p>
                  )
                })
              }
            </div>
            <div className="modal-body">
              <h6>About Me</h6>


            </div>
            <div className="modal-body"/>
            <div className="modal-footer">
              <button type="button" className="btn btn-outline-primary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      }
      }
      </div>
    )
  }
}
