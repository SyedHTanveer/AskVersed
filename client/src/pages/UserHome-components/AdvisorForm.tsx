import update from 'immutability-helper';
import * as React from "react";
import Select from 'react-select';

// import 'react-select/dist/react-select.js';
import * as AdvisorFormJSON from './AdvisorFormJSON.js';
export default class Form extends React.Component<any, any>{
  public constructor(props: any) {
    super(props);
    // tslint:disable-next-line:no-console
    this.state = {
      advisor_answered: AdvisorFormJSON.answered,
      advisor_page: AdvisorFormJSON.page,
      advisor_page_max: AdvisorFormJSON.page_max,
      advisor_questions: AdvisorFormJSON.questions

    }
  }


  public handleChange = (event: any) =>{
    // tslint:disable-next-line:no-console
    console.log("********");
    // tslint:disable-next-line:no-console
    console.log(event);
    // tslint:disable-next-line:no-console
    // tslint:disable-next-line:no-console
    // console.log(event.target.value);
	  
    this.setState({
	    advisor_answered: update(this.state.advisor_answered, {
	      [this.state.advisor_page]:{
	        [event.target.id]:{
	          $set: event.target.value
	        }
	      }
	    })
	  });
  }

  public handleSelectChange = (event: any, action: any) =>{
       // tslint:disable-next-line:no-console
      console.log(event);
// tslint:disable-next-line:no-console
      console.log(action);
      /*
       
      console.log(event.value);
      // tslint:disable-next-line:no-console
      console.log(this.state.advisor_answered);
      // tslint:disable-next-line:no-console
      console.log(this.state.advisor_answered[this.state.advisor_page]);
      // tslint:disable-next-line:no-console
	  console.log(this.state.advisor_answered[this.state.advisor_page][event.value]);
      */
      if(action.action === "select-option"){
	      this.setState({
	        advisor_answered: update(this.state.advisor_answered, {
	          [this.state.advisor_page]:{
	            [event[0].value]:{
	              $push: event
	            }
	          }
	        })
	      });
	  }
	  else{
	  	const index = this.state.advisor_answered.findIndex((obj: any) => obj.label === action.removedValue.label)
	  	// tslint:disable-next-line:no-console
	  	console.log(index)
	  	this.setState({
	        advisor_answered: update(this.state.advisor_answered, {
	          [this.state.advisor_page]:{
	            [action.removedValue.value]:{
	              $splice: [[index, 1]]
	            }
	          }
	        })
	      });
	  }
	  // tslint:disable-next-line:no-console
	  console.log(this.state.advisor_answered[this.state.advisor_page][event.value]);

  }

  public handleSubmit = (event: any) =>{
    // tslint:disable-next-line:no-console
    console.log(event);
  }

  public handleNextPage = () =>{
    this.setState({
      advisor_page: (this.state.advisor_page < this.state.advisor_page_max) ? this.state.advisor_page + 1 : 0
    });
    // tslint:disable-next-line:no-console
    console.log("Page: "+this.state.advisor_page);
    /*
    this.setState({
      advisor_page: this.state.advisor_page,
      page: <AdvisorForm data={this.state} page={this.state.advisor_page} handleSubmit={this.handleSubmit} handleNextPage={this.handleNextPage} handleChange={this.handleChange}/>
    });
    */
  }



  public render()
 {
	return(
		<form onSubmit={this.handleSubmit}>
		{this.state.advisor_questions[this.state.advisor_page].map( (obj: any)=>
	  		{
	  			const question = <label key={obj.id+"_label"}>{obj.question}</label>
	  			let field;
		  		switch(obj.type){
		  			case 'text':
		  				field = [<input onChange={this.handleChange} key={obj.id} id={obj.id} type="text"/>]
		  				break;
	  				case 'dropdown':
	  					const options = obj.values.map((val: any) =>
	  						<option key={val} value={val}>{val}</option>
	  					);
	  					field = [<select onChange={this.handleChange} key={obj.id} id={obj.id}>,{options},</select>];


	  					break;
					case 'checkbox':
						/*
						field = obj.values.map((val: any) =>
							<div key={val+"_div"} id={obj.id+"_div"}>
							<input onChange={this.props.handleChange} key={obj.id+"|"+val} id={obj.id+"|"+val} type="checkbox" value={val} />
							<label htmlFor={val}>{val}</label>
							</div>
						);
						*/
						const FormOptions = obj.values.map((val: any) => {
							return {value: obj.id, label: val}
						});
						const FormOptionsCopy = FormOptions.slice();
						// tslint:disable-next-line:no-console
						console.log("SELECT");
						// tslint:disable-next-line:no-console
						console.log(FormOptions);
						field = [<Select
					        key={obj.id}
					        name={obj.id}
					        
					        value={this.state.advisor_answered[this.state.advisor_page][obj.id]}
					        // value={[{test: "test1"}]}
					        onChange={this.handleSelectChange}
					        options={FormOptionsCopy}
					        isMulti={true}
					        isClearable={true}
					        // isClearable={true}
					      />]
						break;
		  			default:
		  				return <div>ERROR</div>
		  		}
		  		return(
		  			<div key={obj.id+"_div"}>
		  				{question}
		  				<br/>
		  				{field}
		  				<br/>
		  				<br/>
		  			</div>

		  		);
	  		}
	  	)
		}
		<input type="submit" value="Submit" />
		<input type="button" value="Next Page" onClick={this.handleNextPage}/>
	  	</form>
	);
  }
}
