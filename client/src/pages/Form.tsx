import * as React from "react";

export default class Form extends React.Component<{}, any>{

  public render() {
    return this.state.questions.map( (obj: any)=>
  		{
  			const question = <p key={obj.key}>{obj.key}</p>
  			let field;
	  		switch(obj.type){
	  			case 'text':
	  				field = [<input key={obj.type} type="text"/>]
	  				break;
	  			case 'password':
	  				field = [<input key={obj.type} type="password"/>]
	  				break;
  				case 'dropdown':
  					const options = obj.values.map((val: any) =>
  						<option key={val} value={val}>{val}</option>
  					);
  					field = [<select key="select">,{options},</select>];

  					break;
				case 'checkbox':
					field = obj.values.map((val: any) =>
						<div key={val}>
						<input key={obj.type} type="checkbox" id={val} value={val} />
						<label htmlFor={val}>{val}</label>
						</div>
					);
					break;
				case 'radio':
					field = obj.values.map((val: any, i: number) =>
						<li key={val}>
						<label key={val}>
							<input key={obj.type} type="radio" id={val} value={val}/>
							{val}
						</label>
						</li>
					);
					field = [<ul key={obj.type}>,{field},</ul>];
					break;
	  			default:
	  				return <div>ERROR</div>
	  		}
	  		return(
	  			<div key={obj.key}>
	  				{question}
	  				{field}
	  			</div>
	  		);
  		}
  	);
  }
}
