import * as React from "react";

import Footer from '../components/footer';
import UserAdvisor from './UserHome-components/useradvisor';
import UserHome from './UserHome-components/userhome';
import UserNav from './UserHome-components/usernav';
import UserStudent from './UserHome-components/userstudent';

export default class UserHomepage extends React.Component<{},any> {
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

    } else if (name ==='advisor') {
      this.setState({ page: <UserAdvisor /> });
    }
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
