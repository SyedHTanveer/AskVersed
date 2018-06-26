import * as React from 'react';
import './PlatformInfo.css';

export default class PlatformInfo extends React.Component {
  public render() {
    return (
      <div className="grey-panel">
        <div className="container text-center w-50 pt-5">
            <h1 className="text-center">
              A Platform for Sharing Educational Advice
            </h1>
            <h2 className="text-center">
              Democratizing Knowledge
            </h2>
            <br/>
            <p className="text-center">
              Versed was created to connect parent who are looking for information and guidance with parents who have first hand experience and knowledge to share. Our platform brings you the intellectual capital and knowledge base of our most important educators – Parents. Each Parent Advisor on our platform shares a rich set of experiences uniquely relevant to other parents on a similar journey. The power of our search capability enables you to tap into this knowledge base to find the answers to your unique set of questions.
            </p>
        </div>
      </div>
      )
    }
  }