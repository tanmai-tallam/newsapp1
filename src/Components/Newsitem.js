import React, { Component } from 'react'

export class Newsitems extends Component {
  render() {
    return (
      <div className="card" style={{width: "18rem;"}}>
        <img src="..." className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="/" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    )
  }
}
export default Newsitems;

//after this create sampleoutput.json file and go to news api->get started->top headlines->copy the defination and paste in new tab->right click and view page source-> copy that and paste it there for raw data(writing this here coz comments were not allowed in json file)