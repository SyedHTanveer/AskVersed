// CardSection.js
import React from 'react';
import {CardElement} from 'react-stripe-elements';

class CardSection extends React.Component {
  render() {
    return (
      <div>
      <label className="col-7">
        <span>Card details</span>
        <CardElement className="form-control" style={{base: {fontSize: '18px'}}} />
      </label>
    </div>
    );
  }
}

export default CardSection;
