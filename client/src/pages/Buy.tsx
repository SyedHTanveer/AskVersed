import * as React from 'react';

export default class Buy extends React.Component {
  public render() {
    return (
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
          <div className="form-group row">
            <label className="col-4" />
            <div className="col-8">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">Email</span>
                </div>
                <input id="" name="" placeholder="example@askversed.com" type="text" className="form-control here" />
              </div>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-4" />
            <div className="col-8">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">Cell Phone</span>
                </div>
                <input id="" name="" placeholder="+1 234-567-8900" type="text" className="form-control here" required={true} />
              </div>
            </div>
          </div>
          <div className="form-group row">
            <div className="offset-4 col-8">
              <button name="submit" type="submit" className="btn btn-primary">Submit</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
