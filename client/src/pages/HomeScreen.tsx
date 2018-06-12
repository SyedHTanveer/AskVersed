import * as React from "react";
import Jumbotron from '../components/jumbotron';
import './HomeScreen.css';
import Perks from './HomeScreen/perks';

export default class HomeScreen extends React.Component {
  public render() {
    return (
      <div>
        <div>
          <Jumbotron />
        </div>
        <div>
        <Perks />
        </div>
      </div>
    );
  }
}
