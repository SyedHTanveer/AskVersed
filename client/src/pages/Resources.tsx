import * as React from "react";
import * as compJSON from './Resources-components/av_comp.json';
import * as progJSON from './Resources-components/av_prog.json';

export default class Resources extends React.Component<any, any>{
  public constructor(props: any) {
    super(props);
    
    this.state = {
      prog: progJSON,
      comp: compJSON
    }
  }


  public render(){
  	// tslint:disable-next-line:no-console
  	console.log(this.state.prog)
  	// tslint:disable-next-line:no-console
  	console.log(this.state.comp)
  	return(
  		<p>Hello</p>
  	)
  }
}