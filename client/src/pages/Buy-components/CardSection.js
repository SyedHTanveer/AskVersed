// CardSection.js
import React from 'react';
import {CardElement} from 'react-stripe-elements';

class CardSection extends React.Component {
  render() {
    return (
      <div className="container">
      <label className="col-6">
        Card details
        <CardElement style={{base: {fontSize: '18px'}}} />
      </label>
    </div>
    );
  }
}

export default CardSection;
