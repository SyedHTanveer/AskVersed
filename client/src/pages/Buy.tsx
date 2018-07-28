import * as React from 'react';
import { Elements } from 'react-stripe-elements';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import InjectedCheckoutForm from './Buy-components/Checkoutform';

export default class Buy extends React.Component {
  public render() {
    return (
    <Elements>
    <div>
      <Navbar />
        <div className="container m-5">
          <form>
            <div className="form-group row">
              <label htmlFor="" className="col-4 col-form-label">Personal Message for Advisor</label>
              <div className="col-8">
                <textarea id="" name="" className="form-control" />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="select" className="col-4 col-form-label">Select time</label>
              <div className="col-8">
                <select id="select" name="select" aria-describedby="selectHelpBlock" required={true} className="custom-select">
                  <option value="30">30 minutes Consultation</option>
                  <option value="45">45 minutes Consultation</option>
                </select>
                <span id="selectHelpBlock" className="form-text text-muted">Choose the total length of your consultation</span>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <InjectedCheckoutForm />
              </div>
            </div>
          </form>
        </div>
      <Footer />
    </div>
          </Elements>
    );
  }
}
