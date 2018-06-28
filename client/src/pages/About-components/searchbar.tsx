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
      <div>
        <div> test </div>
      </div>

    )
  }
}
