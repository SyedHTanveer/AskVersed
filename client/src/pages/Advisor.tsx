import * as React from 'react';
import SearchBar from './Advisor-componenets/searchbar'

export default class Advisors extends React.Component<{},any>  {

  public constructor(props: any) {
      super(props);
      this.state = {
        advisors: [null],
        selected_advisor: {
          body: {
            "about": "Having gone through the college admissions process with 4 children, I can definitely say that there is so much to learn with each child, based on their interests and the type of schools they are interested in. I am happy to share my perspective on how 4 very different children approached the process. My children can be summed up as scholar-athletes. The challenges of juggling sports and academics cannot be underestimated. My kids played varsity lacrosse, tennis, swimming as Captains and state-ranked athletes. Please reach out to me if you are interested in any of these sports.",
            "admissions": ["Where and when to start?", "Choosing the right school/program for the student", "General admissions process and timeline", "DIY test prep"],
            "city": "Lancaster",
            "colleges": ["Yale University", "Boston College", "Columbia University" ],
            "high-school": ["Helping your child identify his/her interests", "Managing honors/AP class load", "Extracurricular planning"],
            "highlights": ["Economics", "History", "Neuroscience", "Psychology", "Lacrosse", "Swimming"],
            "name": "Kay",
            "state": "Pennsylvania"
          },
          id: '1',
          index: 'users',
          type: 'advisor'
          }
        }
      }

  public userInfo() {
    return (
      <div className="card-deck pb-3">

        <div className="card">
          <div className="card-body align-self-center">
            <h4 className ="card-title">{this.state.selected_advisor.body.name}</h4>
            <p className ="card-subtitle mb-2 text-muted">{this.state.selected_advisor.body.city + ', ' + this.state.selected_advisor.body.state}</p>
            <div className="">
              <button className="btn btn-sm btn-outline-secondary" data-toggle="modal" data-target="#advisorModal">View Profile</button>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-body align-self-center">
            <h4 className ="card-title">{this.state.selected_advisor.body.name}</h4>
            <p className ="card-subtitle mb-2 text-muted">{this.state.selected_advisor.body.city + ', ' + this.state.selected_advisor.body.state}</p>
            <div className="">
              <button className="btn btn-sm btn-outline-secondary" data-toggle="modal" data-target="#advisorModal">View Profile</button>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-body align-self-center">
            <h4 className ="card-title">{this.state.selected_advisor.body.name}</h4>
            <p className ="card-subtitle mb-2 text-muted">{this.state.selected_advisor.body.city + ', ' + this.state.selected_advisor.body.state}</p>
            <div className="">
              <button className="btn btn-sm btn-outline-secondary" data-toggle="modal" data-target="#advisorModal">View Profile</button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  public render() {
    return (
      <div>
        <SearchBar />
        <div className="container">
          <div className="block">
            {this.userInfo()}
            {this.userInfo()}
            {this.userInfo()}
          </div>
        </div>

         <div className="modal fade" id="advisorModal" role="dialog" aria-labelledby="advisorModal" aria-hidden="true">
            <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title justify" id="advisorModalLabel">{this.state.selected_advisor.body.name}</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <p className="city-state">{this.state.selected_advisor.body.city+", "+this.state.selected_advisor.body.state}</p>
                  {
                 this.state.selected_advisor.body.colleges.map((college: any, index: any) => {
                      return (
                        <p className="college" key={college}>{college + ", "}</p>
                      )
                    })
                  }
                </div>
                <div className="modal-body">
                  <h6>About Me</h6>
                    <p className="about">{
                      this.state.selected_advisor.body.about
                    }</p>

                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-outline-primary" data-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
            }
          }
        </div>
      </div>
    )
  }
}
