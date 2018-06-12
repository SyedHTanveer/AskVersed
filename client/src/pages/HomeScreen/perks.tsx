import * as React from 'react';
import './perks.css';

export default class Perks extends React.Component {
  public render() {
        return (
          <div className="container-perks">
            <p>
              <i className="perks fas fa-graduation-cap" />
              <p>Navigating early admissions</p>
            </p>

            <p>
              <i className="perks fas fa-university" />
              <p>Narrowing down college choices</p>
            </p>

            <p>
              <i className="perks fas fa-dumbbell"/>
              <p>Insights into athletic recruiting</p>
            </p>

            <p>
              <i className="perks fas fa-hands-helping" />
              <p>Tips on competitive summer<p>programs for scientific research</p>
              </p>
            </p>

          </div>
        )
      }
    }
