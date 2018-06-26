import * as React from 'react';
import './browseadvisors.css';

export default class BrowseAdvisors extends React.Component {
  public render() {
        return (
          <div className="container text-center block table-responsive">
            <h1 className="display-4 pb-4">Browse Our Advisors</h1>
            <table className="table table-borderless table-sm">
              <thead>
                <th>BY ACADEMIC FOCUS</th>
                <th>BY EXTRACURRICULAR FOCUS</th>
                <th>BY SCHOOLS</th>
              </thead>
              <tbody>
                <tr>
                  <td>STEM</td>
                  <td>Art</td>
                  <td>Brown</td>
                </tr>

                <tr>
                  <td>Humanities</td>
                  <td>Dance</td>
                  <td>Carnegie Mellon</td>
                </tr>

                <tr>
                  <td>Social Sciences</td>
                  <td>Debate/ Speech</td>
                  <td>Cornell</td>
                </tr>

                <tr>
                  <td>Language Arts</td>
                  <td>Journalism/ Publication</td>
                  <td>Columbia</td>
                </tr>

                <tr>
                  <td />
                  <td>Music</td>
                  <td>Georgetown</td>
                </tr>

                <tr>
                  <td />
                  <td>Research</td>
                  <td>Harvard</td>
                </tr>

                <tr>
                  <td />
                  <td>Science/ Math</td>
                  <td>MIT</td>
                </tr>

                <tr>
                  <td />
                  <td>Sports</td>
                  <td>Princeton</td>
                </tr>

                <tr>
                  <td />
                  <td>Theater/ Drama</td>
                  <td>Stanford</td>
                </tr>
                <tr>
                  <td/>
                  <td/>
                  <td>Yale</td>
                </tr>

              </tbody>
            </table>
          </div>
        )
      }
    }
