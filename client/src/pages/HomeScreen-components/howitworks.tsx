import * as React from 'react';
// import { Link } from 'react-router-dom';
import './howitworks.css';

export default class HowItWorks extends React.Component {
  public render() {
        return (
          <div className="container block">
            <div className="row">
              <div className="col-12">
                <h1 className="text-center display-4 pb-5">How it works</h1>
                <ul className="timeline">
                  <li>
                    <div className="timeline-image">
                      <i className="fas fa-search fn-icon" />
                    </div>
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                        <h4>One</h4>
                        <h4 className="subheading">Search</h4>
                      </div>
                      <div className="timeline-body">
                        <p className="text-muted">
                          Search for Parent Advisors based on any number of criteria, such as children’s academic interests, extracurricular activities and college acceptances
                        </p>
                      </div>
                    </div>
                    <div className="line" />
                  </li>
                  <li className="timeline-inverted">
                    <div className="timeline-image">
                      <i className="fas fa-id-card fn-icon" />
                    </div>
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                        <h4>Two</h4>
                        <h4 className="subheading">Match</h4>
                      </div>
                      <div className="timeline-body">
                        <p className="text-muted">
                          Match with Parent Advisors most suited to your needs, based on your questions and their availability (some Parent Advisors book up quickly)
                        </p>
                      </div>
                    </div>
                    <div className="line" />
                  </li>
                  <li>
                    <div className="timeline-image">
                      <i className="fas fa-phone fn-icon" />
                    </div>
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                        <h4>Three</h4>
                        <h4 className="subheading">Consult</h4>
                      </div>
                      <div className="timeline-body">
                        <p className="text-muted">
                          Learn about your Parent Advisor’s experience helping his/her child with college admissions, and receive recommendations about your own process. Consult over the phone on topics most relevant to your child
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )
      }
    }
