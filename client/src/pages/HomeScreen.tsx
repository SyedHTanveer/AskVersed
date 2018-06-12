import * as React from "react";
import './HomeScreen.css';
import BrowseAdvisors from './HomeScreen/browseadvisors';
import HowItWorks from './HomeScreen/howitworks';
import Jumbotron from './HomeScreen/jumbotron';
import Perks from './HomeScreen/perks';
import PreFooter from './HomeScreen/prefooter';
import Testimonials from './HomeScreen/testimonials';

export default class HomeScreen extends React.Component {
  public render() {
    return (
      <div>
        <div>
          <Jumbotron />
        </div>
        <div className="bg-light">
          <Perks />
        </div>
        <div>
          <HowItWorks />
        </div>
        <div className="bg-light">
          <Testimonials />
        </div>
        <div>
          <BrowseAdvisors />
        </div>
        <div className="bg-light">
          <PreFooter />
        </div>
      </div>
    );
  }
}
