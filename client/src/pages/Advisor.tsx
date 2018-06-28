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
              <h4 className="modal-title justify" id="signinModalLabel">{this.state.selected_advisor.body.name}</h4>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p>{this.state.selected_advisor.body.city+","+this.state.selected_advisor.body.state} </p>
              {
             this.state.selected_advisor.body.colleges.map((college, index) => {
                  return (
                    <p key={index}>{college}</p>
                  )
                })
              }
            </div>
            <div className="modal-body">
              <h5>About Me</h5>
              <p>{this.state.selected_advisor.body.about}</p>
            </div>
            <div className="modal-body">
              <h5>Reach out to me for advice on</h5>
              <h6>College Admissions Process</h6>
              {
                this.state.selected_advisor.body.admissions.map((el, index) => {
                  return (
                    <p>{el}</p>
                  )
                })
               }
               <h6>General High School Guidance</h6>
               {
                this.state.selected_advisor.body.highschool.map((el, index) => {
                  return (
                    <p>{el}</p>
                  )
                })
               }
            </div>
            <div className="modal-body">
              <h5>Academic & Extracurricular Highlights</h5>
              {
                this.state.selected_advisor.body.highlights.map((el, index) => {
                  return (
                    <p>{el}</p>
                  )
                })
               }
            </div>
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
