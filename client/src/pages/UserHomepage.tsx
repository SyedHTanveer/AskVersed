import * as React from "react";


import Footer from '../components/footer';
import AdvisorForm from './UserHome-components/AdvisorForm';
// import UserAdvisor from './UserHome-components/useradvisor';


import UserHome from './UserHome-components/userhome';
import UserNav from './UserHome-components/usernav';
import UserStudent from './UserHome-components/userstudent';



export default class UserHomepage extends React.Component<any,any> {
  constructor(props: any) {
    super(props);
    this.state = {
      page: <UserHome />,
      userName: 'Person'

    }
    this.handleClick = this.handleClick.bind(this);
  }

  public handleClick = (name: any) => {

    if(name === 'home') {
      this.setState({ page: <UserHome /> });

    } else if (name ==='student') {
      this.setState({ page: <UserStudent /> });

    } else if (name==='advisor') {
      this.setState(
        {
          page: <AdvisorForm />
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
        <div className="container">
          <div className="row">
            <h2 className="col-12 text-left pt-5 pl-4 ml-4">Welcome back {this.state.userName}!</h2>
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
