import * as React from "react";

/* All components for homepages  */
import BrowseAdvisors from './HomeScreen-components/browseadvisors';
import HowItWorks from './HomeScreen-components/howitworks';
import Jumbotron from './HomeScreen-components/jumbotron';
import Perks from './HomeScreen-components/perks';
// import PreFooter from './HomeScreen-components/prefooter';
import Testimonials from './HomeScreen-components/testimonials';

import './HomeScreen.css';

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
      </div>
    );
  }
}
