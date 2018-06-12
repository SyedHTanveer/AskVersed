import * as React from 'react';
import './footer.css';

export default class Footer extends React.Component {
  public render() {
    return (
      <footer className="footer bg-light">
        <div className="container-footer">
          <span className="text-muted">AskVersed &#169; {new Date().getFullYear()}</span>
        </div>
      </footer>
    );
  }
}
