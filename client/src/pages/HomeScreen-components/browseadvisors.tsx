import * as React from 'react';
import './browseadvisors.css';

export default class BrowseAdvisors extends React.Component {
  public render() {
        return (
          <div className="container text-center py-5">
            <h1>Browse Our Advisors</h1>
            <table>
              <tr>
                <th>BY ACADEMIC FOCUS</th>
                <th>BY EXTRACURRICULAR FOCUS</th>
                <th>BY SCHOOLS</th>
              </tr>
              <tr>
                <td>STEM</td>
                <td>Art</td>
                <td>Brown</td>
              </tr>
            </table>
          </div>
        )
      }
    }
