import * as React from 'react';

interface ISearchProps {
  search(data: any): void;
}

export default class SearchBar extends React.Component <ISearchProps, {value: string}> {
  public constructor(props: any) {
    super(props);
    this.state = {
      value: ''
    };
    this.onChange = this.onChange.bind(this);
    this.onSearch = this.onSearch.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  public onChange = (event: any) => {
    this.setState({value: event.target.value });
  }
  public onSearch = (event: any) => {
    // tslint:disable-next-line:no-console
    console.log(this.state.value);
    this.props.search(this.state.value);
  }

  public handleKeyPress = (event: any) => {
    if(event.key === 'Enter') {
      this.props.search(this.state.value);
    }
  }
  public render() {
    return(
      <div className ="container pt-5">
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text"><i className="fa fa-search" /></span>
          </div>
          <input type="text" className="form-control" onKeyPress={this.handleKeyPress} value={this.state.value} onChange={this.onChange} placeholder="" aria-label="" aria-describedby="basic-addon1" />
          <div className="input-group-append">
            <button className="btn btn-outline-secondary" onClick={this.onSearch} type="submit">Search</button>
          </div>
        </div>
      </div>

    )
  }
}
