import * as React from 'react';

export default class SearchBar extends React.Component {
  public onChange = () => {
          fetch("http://localhost:8000/advisors", {
            credentials: 'include',
            method:'POST',

          }).then(() => {
            // tslint:disable-next-line:no-console
            console.log("posted to advisors");
          });
  }
  
  public render() {
    return(
      <div className ="container pt-5 w-50">
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text"><i className="fa fa-search" /></span>
          </div>
          <input type="text" className="form-control" placeholder="" aria-label="" aria-describedby="basic-addon1" />
          <div className="input-group-append">
            <button className="btn btn-outline-secondary" type="submit">Search</button>
          </div>
        </div>
      </div>

    )
  }
}
