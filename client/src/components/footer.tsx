import * as React from 'react';
import './footer.css';

export default class Footer extends React.Component {
  public render() {
    return (
      <footer className="footer bg-light">
        <div className="container-footer">
          <span className="text-muted"> &#169; Copyright {new Date().getFullYear()} Versed, Inc.</span>
        </div>
      </footer>
    );
  }
}
