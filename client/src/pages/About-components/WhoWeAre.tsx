import * as React from 'react';
import './WhoWeAre.css';

export default class WhoWeAre extends React.Component {
  public render() {
    return (
      <div className="grey-panel">
        <div className="container text-center w-50 pt-5">
            <h1 className="text-center">
              Who We Are
            </h1>
            <h2 className="text-center">
              Resourceful, Thoughtful, and Wise
            </h2>
            <br/>
            <p className="text-center">
              These are some of the words that best describe the Versed community. Our Parent Advisors have proven track records of helping their own children develop their academic, athletic and extracurricular passions, and gain admission into schools of their choice.
            </p>
            <p className="text-center">
              As a community, our Parent Advisors have children studying at highly selective U.S. colleges including Brown, Harvard, MIT, Princeton, Stanford, and Yale. They have raised Presidential Scholars, Regeneron Science Competition winners, Scholastic Arts & Writing Award winners, world-class musicians, nationally ranked athletes, community and civic-minded leaders and more. But more importantly, our Parent Advisors have raised children who love learning and pursue their interests at the highest levels.
            </p>
            <p className="text-center">
              Just as we relied on the sage advice of other experienced parents, we are here to help parents and students navigate the college admission process so that we all can access the most current and relevant information.
            </p>
        </div>
      </div>
      )
    }
  }