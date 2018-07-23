import * as React from "react";

import update from 'immutability-helper';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import AdvisorForm from './UserHome-components/AdvisorForm';
import * as AdvisorFormJSON from './UserHome-components/AdvisorFormJSON.js';
import StudentForm from './UserHome-components/StudentForm';
import * as StudentFormJSON from './UserHome-components/StudentFormJSON.js';
import UserHome from './UserHome-components/userhome';
import UserNav from './UserHome-components/usernav';

export default class UserHomepage extends React.Component<any,any> {
  constructor(props: any) {
    super(props);
    this.state = {
      advisor_answered: AdvisorFormJSON.answered,
      advisor_page: AdvisorFormJSON.page,
      advisor_page_max: AdvisorFormJSON.page_max,
      advisor_questions: AdvisorFormJSON.questions,

      student_answered: StudentFormJSON.answered,
      student_page: StudentFormJSON.page,
      student_page_max: StudentFormJSON.page_max,
      student_questions: StudentFormJSON.questions,

      page: <UserHome />,
      userName: 'Person'

    }
    this.handleClick = this.handleClick.bind(this);
  }

  public handleClick = (name: any) => {

    if(name === 'home') {
      this.setState({ page: <UserHome /> });

    } else if (name ==='student') {
      this.setState({
        page: <StudentForm data={this.state} page={this.state.advisor_page} handleSubmit={this.handleSubmit} handleNextPage={this.handleNextPage} handleChange={this.handleChange}/> });

    } else if (name==='advisor') {
      this.setState(
        {
          page: <AdvisorForm data={this.state} page={this.state.student_page} handleSubmit={this.handleSubmit} handleNextPage={this.handleNextPage} handleChange={this.handleChange}/>
        }
      )
    }
  }

  public handleChange = (event: any) =>{
    // tslint:disable-next-line:no-console
    console.log("********");
    // tslint:disable-next-line:no-console
    console.log(event);
    // tslint:disable-next-line:no-console
    // tslint:disable-next-line:no-console
    // console.log(event.target.value);


    if(!Array.isArray(event)){
      this.setState({
        advisor_answered: update(this.state.advisor_answered, {
          [this.state.advisor_page]:{
            [event.target.id]:{
              $set: event.target.value
            }
          }
        })
      });
    }
    else{
      this.setState({
        advisor_answered: update(this.state.advisor_answered, {
          [this.state.advisor_page]:{
            [event[0].value]:{
              $push: event
            }
          }
        })
      });
      // tslint:disable-next-line:no-console
      console.log(event[0].value);
    }

    // tslint:disable-next-line:no-console
    console.log(this.state);

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
    this.setState({
      advisor_page: (this.state.advisor_page < this.state.advisor_page_max) ? this.state.advisor_page + 1 : 0,
      page: <AdvisorForm data={this.state} page={this.state.advisor_page} handleSubmit={this.handleSubmit} handleNextPage={this.handleNextPage} handleChange={this.handleChange}/>
    });

  }

  public render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <div className="row">
            <h2 className="col-12 text-left pt-5 pl-4 ml-4">Welcome back {this.state.userName}!</h2>
            <div className="d-flex flex-row col-12 mt-5">
              <div className="col-3 mb-5 pb-5">
                <UserNav
                  handleClick = {this.handleClick}
                />
              </div>
              <div className="col-9 m-5">
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
