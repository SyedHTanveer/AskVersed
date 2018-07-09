import * as React from "react";

/* All components for homepages  */
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import BrowseAdvisors from './HomeScreen-components/browseadvisors';
import HowItWorks from './HomeScreen-components/howitworks';
import Jumbotron from './HomeScreen-components/jumbotron';
import Perks from './HomeScreen-components/perks';
import Testimonials from './HomeScreen-components/testimonials';

export default class HomeScreen extends React.Component {
  public render() {
    return (
      <div>
      <Navbar />
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
      <Footer />
      </div>
    );
  }
}
