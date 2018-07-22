import * as React from 'react';
import default_profile from '../assets/default_profile.jpg';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import SearchBar from './Advisor-componenets/searchbar';

export default class Advisors extends React.Component<{}, any>  {

  public constructor(props: any) {
    super(props);
    this.state = {
      advisors: [],
      rows: 0,
      selected_advisor:
      {
        "_id": "2",
        "_index": "users",
        "_score": 1,
        "_source": {
          "about": "",
          "admissions": [
            "Where and when to start?",
            "How parents can be most helpful in the process",
            "Choosing the right school/program for the student",
            "General admissions process and timeline",
            "Early action",
            "Early decision",
            "Regular decision",
            "Application Essays",
            "Selecting/managing recommenders",
            "Touring schools",
            "Communicating with prospective schools",
            "Majoring and minoring",
            "Helping students cope with stress",
            "Preserving positive parent/child relationship",
            "Athletic recruiting"
          ],
          "city": "Agoura Hills",
          "colleges": [
            "Williams College",
            "Bowdoin College",
            "United States Naval Academy"
          ],
          "highlights": [
            "Humanities - General",
            "Law",
            "Sports",
            "Soccer",
            "Volleyball"
          ],
          "highschool": [
            "Helping your child identify his/her interests", 
            "Choosing classes",
            "Managing honors/AP class load",
            "Study habits and organizational skills",
            "Working with your child's school, teachers, and guidance counselors",
            "Extracurricular planning",
            "Summer planning"
          ],
          "name": "Lee",
          "state": "California",
        },
        "_type": "advisor",
      }
    };
    this.onSearch = this.onSearch.bind(this);
    this.setSelectedAdvisor = this.setSelectedAdvisor.bind(this);
    this.showCards = this.showCards.bind(this);
  }
  
  public componentDidMount() {
    fetch("http://localhost:8000/search", {
      body: JSON.stringify({
        "query": "all"
      }),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      },
      method: 'POST'
    })
      .then((response: Response) => response.json())
      .then((json) => {
        // tslint:disable-next-line:no-console
        console.log(json);
        this.setState({ advisors: json.hits.hits, selected_advisor: json.hits.hits[0], rows: json.hits.hits.length % 3 });
      });
  }


  public setSelectedAdvisor(element: any) {
    // tslint:disable-next-line:no-console
    console.log(element.target);

    this.setState({selected_advisor: this.state.advisors[element.target.id] });
  }

  public onSearch(data: any) {
    this.setState = this.setState.bind(this);
    data.trim() !== '' ?
    fetch("http://localhost:8000/search", {
      body: JSON.stringify({
        "query": data
      }),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      },
      method: 'POST'
    })
      .then((response: Response) => response.json())
      .then((json) => {
        // tslint:disable-next-line:no-console
        console.log(json);
        this.setState({ advisors: json.hits.hits , rows: json.hits.hits.length % 3});
      }) : fetch("http://localhost:8000/search", {
        body: JSON.stringify({
          "query": "all"
        }),
        credentials: 'include',
        headers: {
          'content-type': 'application/json'
        },
        method: 'POST'
      })
        .then((response: Response) => response.json())
        .then((json) => {
          // tslint:disable-next-line:no-console
          console.log(json);
          this.setState({ advisors: json.hits.hits, rows: json.hits.hits.length % 3 });
        });
  }

  public  showCards() {
    const row = [];
    for(let i = 0; i < this.state.rows; i++) {
      const children = [];
      for(let j = 0; j < 3; j++) {
        const advisor = this.state.advisors[this.state.rows * i + j];
        if(this.state.rows * i + j < this.state.advisors.length) {
          children.push(<div key={this.state.rows * i + j} className="card">
            <div className="card-body align-self-center justify-content-center w-100 h-100 flex">
              <div className="text-center">
                <img className="rounded mb-3" src={default_profile}/>
              </div>
              <h3 className="card-title text-center">{advisor._source.name}</h3>
              <p className="card-subtitle mb-2 text-muted text-center">{advisor._source.city + ', ' + advisor._source.state}</p>
              {
                advisor._source.colleges.map((college: any, index: any) => {
                  return (
                    <div className="college font-weight-light text-center card-text" key={college}><small>{college}</small></div>
                  )
                })
              }

            </div>
            <div className="card-footer text-center">
              <button id={`${this.state.rows * i + j}`} className="btn btn-sm btn-outline-secondary" data-toggle="modal" onClick={this.setSelectedAdvisor} data-target="#advisorModal">View Profile</button>
            </div>
          </div>)
        }
      }
      row.push(<div key={i} className="card-deck pb-2"> {children} </div>);
    }
    return row;
  }

  public render() {
    return (
      <div>
        <Navbar />
        <div>
          <SearchBar
            search={this.onSearch}/>
          <div className="container">
            <div className="block">
                {
                  this.state.advisors.length > 0 ? this.showCards() : <div> No matching results. Try broadening your query. </div>
                }
              </div>
          </div>

          <div className="modal fade" id="advisorModal" role="dialog" aria-labelledby="advisorModal" aria-hidden="true">
            <div className="modal-dialog modal-lg modal-dialog-centered" style={{"maxWidth": '80vw'}} role="document">
              <div className="modal-content">
                <div className="modal-header justify-content-center">
                  <h3 className="modal-title justify" id="advisorModalLabel">{this.state.selected_advisor._source.name}</h3>
                  <h5 className="m-0 ml-auto mt-auto mb-auto font-italic">{this.state.selected_advisor._source.city + ", " + this.state.selected_advisor._source.state}</h5>
                  <button type="button" className="close ml-0" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <div><h4> Colleges </h4></div>
                  <div>
                  {
                    this.state.selected_advisor._source.colleges.map((college: any, index: any) => {
                      return (
                        <div className="college font-weight-light" key={college}>{college}</div>
                      )
                    })
                  }
                </div>
                  <h4>About Me</h4>
                  <p className="about font-weight-light">{
                    this.state.selected_advisor._source.about
                  }</p>
                  <div><h4> Reach out for Advice on </h4> </div>
                  <div>
                    {this.state.selected_advisor._source.admissions !== null && <div><h5>College Admissions Process</h5></div>}
                  {
                    (this.state.selected_advisor._source.admissions !== null) ?
                      this.state.selected_advisor._source.admissions.map(
                        (admissions: any, index: any) => {
                          return (<div key={index} className="font-weight-light"> <small> {admissions}</small></div>)
                        }
                      ) : (<div/>)
                  }
                  </div>
                  <div>
                  {this.state.selected_advisor._source.highschool && <div><h5> General High School Guidance</h5> </div>}
                  {
                    this.state.selected_advisor._source.highschool ?
                    this.state.selected_advisor._source.highschool.map((highschool: any, index: any) => {
                      return (<div key={index} className="font-weight-light" ><small> {highschool}</small></div>)
                    }) : <div/>}
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-outline-primary" data-dismiss="modal">close</button>
                </div>
              </div>
            </div>
            }
          }
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}
