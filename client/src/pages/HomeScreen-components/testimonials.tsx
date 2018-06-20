import * as React from 'react';
import './testimonials.css';


export default class Testimonials extends React.Component {
  public render() {
        return (
        <div className="container testimonials-block">
          <h1 className="text-center">Testimonials</h1>
            <div className="carousel slide carousel-fade" data-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <p>Talking to Nora was very eye opening.  She was frank, straight to the point, and very informative.  The fact that she just went through the admissions cycle this past year, and was in the thick of things, she knew it so well.
                  <p>Dina, mom of 8th and 11th grader</p></p>
                </div>
                <div className="carousel-item">
                  <p>Bob was incredibly thorough in explaining the entire admissions process and especially the early action/admission options. He was also able to recommend great summer writing programs for my daughter that I never heard of. A half hour call with Bob gave me a far clearer picture of what we need to prepare than all of the online research I have done for the last several months.
                  <p>Sue, mom of 11th grader</p></p>
                </div>
                <div className="carousel-item">
                  <p>Talking to Susan about her son’s transition from Tennis to Squash gave me a lot of good insights into the level of competition for each sport. It was amazing to be able to find someone that can specifically share that transition experience.
                  <p>Jen, Greenwich, CT</p></p>
                </div>
                <div className="carousel-item">
                  <p>All I can say is that Maureen had great wisdom. We talked a lot about how to prioritize activities and how to think about summers. I was struggling with whether I should allow my son to quit swimming, a sport he was good at but did not love, and Maureen’s perspective helped me think through the decision.
                  <p>Christine, New York, NY</p></p>
                </div>
              </div>
            </div>
        </div>
        )
      }
    }
