import * as moment from 'moment';
import * as React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import { Elements } from 'react-stripe-elements';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import './Buy-components/Buy.css';
import InjectedCheckoutForm from './Buy-components/Checkoutform';

export default class Buy extends React.Component<{}, any> {

  constructor (props: any) {
    super(props)
    this.state = {
      startDate: moment(),
    };

    this.handleChange = this.handleChange.bind(this);
  }

  public handleChange(date: any) {
    this.setState({
      startDate: date
    });
  }


  public render() {
    return (
    <Elements>
    <div>
      <Navbar />
        <div className="container m-5">
          <form className="col-12">
            <div className="mr-5 mb-5 mt-5 buy-header">
              <h3><span className="number">1</span> Provide Call Information</h3>
            </div>
            <div className="form-group row">
              <label htmlFor="" className="col-12 col-form-label">Personal Message for Advisor</label>
              <div className="col-6">
                <textarea id="" name="" className="form-control" />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="select" className="col-6 col-form-label">Select time</label>
              <div className="col-10">
                <select id="select" name="select" aria-describedby="selectHelpBlock" required={true} className="custom-select">
                  <option value="30">30 minutes Consultation</option>
                  <option value="45">45 minutes Consultation</option>
                </select>
                <span id="selectHelpBlock" className="form-text text-muted">Choose the total length of your consultation</span>
              </div>
            </div>
            <div className="mr-5 mb-5 mt-5 buy-header">
              <h3><span className="number">2</span> Suggest Times When You're Free to Talk</h3>
            </div>
            <div className="row">
              <div className="col-12">
                <DatePicker
                  selected={this.state.startDate}
                  onChange={this.handleChange}
                  showTimeSelect={true}
                  timeFormat="HH:mm"
                  timeIntervals={45}
                  dateFormat="LLLL"
                  timeCaption="time"
              />
              <DatePicker
                selected={this.state.startDate}
                onChange={this.handleChange}
                showTimeSelect={true}
                timeFormat="HH:mm"
                timeIntervals={45}
                dateFormat="LLLL"
                timeCaption="time"
              />
              <DatePicker
                selected={this.state.startDate}
                onChange={this.handleChange}
                showTimeSelect={true}
                timeFormat="HH:mm"
                timeIntervals={45}
                dateFormat="LLLL"
                timeCaption="time"
              />
              </div>
            </div>
            <div className="mr-5 mb-5 mt-5 buy-header">
              <h3><span className="number">3</span> Payment Information</h3>
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
