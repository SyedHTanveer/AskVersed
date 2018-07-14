import * as React from "react";
import defaultProfile from '../../assets/default_profile.jpg';
import './usernav.css';

interface IHandleProps {
  handleClick(name: any): void;
}

export default class UserNav extends React.Component<IHandleProps, {}, any>  {
  constructor(props: any) {
    super(props);
    this.navClick = this.navClick.bind(this);
  }

  public navClick = (e: any) => {
    this.props.handleClick(e.target.name);
  }

  public render() {
    return (
      <nav className="container">
        <img className="card-img-top" src={defaultProfile} alt="Card image cap" />
        <div className="list-group list-group-flush btn-group-vertical card mt-4">
          <button name="home" className="btn btn-outline-secondary list-group-item" onClick={this.navClick}>Home</button>
          <button name="student" className="btn btn-outline-secondary list-group-item" onClick={this.navClick}>Student Information</button>
          <button name="advisor" className="btn btn-outline-secondary list-group-item" onClick={this.navClick}>Advisor</button>
        </div>
      </nav>
    );
  }
}
