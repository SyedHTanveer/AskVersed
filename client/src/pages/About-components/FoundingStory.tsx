import * as React from 'react';
import './FoundingStory.css';

export default class FoundingStory extends React.Component {
  public render() {
    return (
      <div className="white-panel">
        <div className="container text-center w-50 pt-5">
            <h1 className="text-center">
              Founding Story
            </h1>
            <h2 className="text-center">
              Min Kim, Founder
            </h2>
            <br/>
            <p className="text-center">
              Growing up in Queens, New York, my mother made education a central priority in my life. Despite being new to the country, and having limited English, she did everything she could to provide me with the best educational opportunities available. With her support and guidance, I was able to pursue education at the highest levels: I studied music at the Juilliard Pre-College Division, attended Stuyvesant High School, placed in the Westinghouse (now Regeneron) Science Competition, and attended Yale. My mom would have been the first Parent Advisor I would have recruited! Now, with three children of my own, I created Versed to help every parent gain access to the best information and advice, so that we all can provide our children with the best educational opportunities possible.
            </p>
        </div>
      </div>
      )
    }
  }