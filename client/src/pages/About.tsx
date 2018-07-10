import * as React from "react";

/* All components for homepages  */
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import AboutJumbotron from './About-components/about_jumbotron';
import FoundingStory from './About-components/FoundingStory';
import OurVision from './About-components/OurVision';
import PlatformInfo from './About-components/PlatformInfo';
import UseInfo from './About-components/UseInfo';
import WhoWeAre from './About-components/WhoWeAre';


export default class About extends React.Component {
  public render() {
    return (
      <div>
      <Navbar />
        <div>
          <AboutJumbotron />
        </div>
        <div>
          <OurVision />
        </div>
        <div>
          <WhoWeAre />
        </div>
        <div>
          <FoundingStory />
        </div>
        <div>
          <PlatformInfo />
        </div>
        <div>
          <UseInfo />
        </div>
        <Footer />
      </div>
    );
  }
}
