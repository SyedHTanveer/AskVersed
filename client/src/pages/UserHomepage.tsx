import * as React from "react";

import update from 'immutability-helper';
import Footer from '../components/footer';
import AdvisorForm from './UserHome-components/AdvisorForm';
// import UserAdvisor from './UserHome-components/useradvisor';
import * as AdvisorFormJSON from './UserHome-components/AdvisorFormJSON.js';

import UserHome from './UserHome-components/userhome';
import UserNav from './UserHome-components/usernav';
import UserPersonal from './UserHome-components/userpersonal';



export default class UserHomepage extends React.Component<{},any> {
  constructor(props: any) {
    super(props);
    this.state = {
      advisor_answered: AdvisorFormJSON.answered,
      advisor_page: AdvisorFormJSON.page,
      advisor_page_max: AdvisorFormJSON.page_max,
      advisor_questions: AdvisorFormJSON.questions,
      
      page: <UserHome />,
      userName: 'Person'
      
    }
    this.handleClick = this.handleClick.bind(this);
  }

  public handleClick = (name: any) => {
    if(name === 'home') {
      this.setState(
        {
          page: <UserHome />
        }
      );
    }
    else if (name ==='personal') {
      this.setState(
        {
          page: <UserPersonal />
        }
      );
    }

    else if (name==='advisor') {
      this.setState(
        {
          page: <AdvisorForm data={this.state} handleSubmit={this.handleSubmit} handleNextPage={this.handleNextPage}/>
        }
      )
    }
  }

  public handleSubmit = (event: any) =>{
    // tslint:disable-next-line:no-console
    console.log(event);
    event.persist();
    event.preventDefault();
    
    this.setState({
      advisor_answered: update(this.state.advisor_answered, {[this.state.advisor_page]: {$set: event}})
    });
    
  }

  public handleNextPage = () =>{
    // tslint:disable-next-line:no-console
    console.log("Before: "+this.state.advisor_page);
    this.setState({
      advisor_page: (this.state.advisor_page < this.state.advisor_page_max) ? this.state.advisor_page + 1 : 0
    });
  }

  public render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <h2 className="col-12 text-left pt-5 pl-4 ml-4">Welcome {this.state.userName}!</h2>
            <div className="d-flex flex-row col-12 mt-5">
              <div className="col-3 mb-5 pb-5">
                <UserNav
                  handleClick = {this.handleClick}  
                />
              </div>
              <div className="col-9">
                {this.state.page}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
