import * as React from 'react';
import './OurVision.css';

export default class OurVision extends React.Component {
  public render() {
    return (
      <div className="white-panel">
        <div className="container text-center w-50 pt-5">
            <h1 className="text-center">
              Our Vision
            </h1>
            <h2 className="text-center">
              To make the wisdom and knowledge of an extraordinary community of parents available to all parents
            </h2>
            <br/>
            <p className="text-center">
              Parents spend countless hours researching and communicating with other parents to find the best educational opportunities for their children. Frequently, the best advice comes from parents who have successfully navigated the same process with their own children. If we are lucky, that experienced parent is in our network of friends or contacts. But for most of us, it would take considerable amount of time to research and network to find good information, if we do at all.
            </p>
            <p className="text-center">
              Versed was created to make finding good credible information on education and enrichment resources effortless. We have brought together a community of parents who have been through a broad array of educational experiences with their children and are excited to share their experience and knowledge.
            </p>
            <p className="text-center">
              Stop recreating the wheel, and access credible, timely information from experienced parents who have just been through it.
            </p>
        </div>
      </div>
      )
    }
  }