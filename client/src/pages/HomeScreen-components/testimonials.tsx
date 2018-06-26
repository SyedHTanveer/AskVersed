import * as React from 'react';
import './testimonials.css';


export default class Testimonials extends React.Component {
  public render() {
        return (
        <div className="container block">
          <h1 className="text-center display-4 pb-4">Testimonials</h1>
            <div className="carousel slide" data-ride="carousel" data-interval="5000">
              <div className="carousel-inner container">
                <blockquote className="blockquote text-left carousel-item active">
                  <p>Talking to Nora was very eye opening.  She was frank, straight to the point, and very informative.  The fact that she just went through the admissions cycle this past year, and was in the thick of things, she knew it so well.
                  <p className=" blockquote-footer text-right">Dina, mom of 8th and 11th grader</p></p>
                </blockquote>
                <blockquote className="blockquote text-left carousel-item">
                  <p>Bob was incredibly thorough in explaining the entire admissions process and especially the early action/admission options. He was also able to recommend great summer writing programs for my daughter that I never heard of. A half hour call with Bob gave me a far clearer picture of what we need to prepare than all of the online research I have done for the last several months.
                  <p className="blockquote-footer text-right">Sue, mom of 11th grader</p></p>
                </blockquote>
                <blockquote className="blockquote text-left carousel-item">
                  <p>Talking to Susan about her son’s transition from Tennis to Squash gave me a lot of good insights into the level of competition for each sport. It was amazing to be able to find someone that can specifically share that transition experience.
                  <p className="blockquote-footer text-right">Jen, Greenwich, CT</p></p>
                </blockquote>
                <blockquote className=" blockquote text-left carousel-item">
                  <p>All I can say is that Maureen had great wisdom. We talked a lot about how to prioritize activities and how to think about summers. I was struggling with whether I should allow my son to quit swimming, a sport he was good at but did not love, and Maureen’s perspective helped me think through the decision.
                  <p className="blockquote-footer text-right">Christine, New York, NY</p></p>
                </blockquote>
              </div>
            </div>
        </div>


        )
      }
    }
