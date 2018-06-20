import * as React from 'react';
import './perks.css';

export default class Perks extends React.Component {
  public render() {
        return (
          <div className="content-about plugin-content" id="content-about">
            <div className="container py-5">
              <div className="block-content">
                <div className="row content-boxes padding-btm-199">

                  <div className="col-sm-6 col-md-3 col-xs-12 content-box">
                    <h4 className="title">
                      <span className="fa-stack fa-2x">
                        <i className="fa fa-circle fa-stack-2x" />
                        <i className="fa fa-graduation-cap fa-stack-1x fa-inverse" aria-hidden="true" /></span></h4>
                    <h4 className="title">Navigating early admissions</h4>
                  </div>

                  <div className="col-sm-6 col-md-3 col-xs-12 content-box">
                    <h4 className="title">
                      <span className="fa-stack fa-2x">
                       <i className="fa fa-circle fa-stack-2x" />
                       <i className="fa fa-university fa-stack-1x fa-inverse" aria-hidden="true" /></span></h4>
                    <h4 className="title">Narrowing down college choices</h4>
                  </div>

                  <div className="col-sm-6 col-md-3 col-xs-12 content-box">
                    <h4 className="title"><span className="fa-stack fa-2x">
                      <i className="fa fa-circle fa-stack-2x" />
                      <i className="fa fa-dumbbell fa-stack-1x fa-inverse" aria-hidden="true" /></span></h4>
                    <h4 className="title">Insights into athletic recruiting</h4>
                  </div>

                  <div className="col-sm-6 col-md-3 col-xs-12 content-box">
                    <h4 className="title"><span className="fa-stack fa-2x">
                      <i className="fa fa-circle fa-stack-2x" />
                      <i className="fa fa-hands-helping fa-stack-1x fa-inverse" aria-hidden="true" /></span></h4>
                    <h4 className="title">Tips on competitive summer programs for scientific research</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      }
    }
