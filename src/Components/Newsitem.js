import React, { Component } from 'react'

export class Newsitems extends Component {


  render() {
    // this is the syntax used to obtain the props(here its two props)
    let {title, description, imageurl, newsurl }=this.props;
    return (
      <div className="card" style={{width: "23rem"}}>
        <img src={imageurl} style={{height:"13rem",width: "23rem"}} className="card-img-top" alt="nothing to display"/>
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <a href={newsurl} target="_blank" rel="noopener noreferrer" className="btn btn-md btn-primary">Read More</a>
          {/* rel="noopener noreferrer": This attribute is important for security reasons when using target="_blank". It prevents the new page from having access to the window.opener object, which could potentially be exploited for security vulnerabilities (e.g., phishing attacks).
          Without rel="noopener noreferrer", the site you open could manipulate the original page */}
        </div>
      </div>
    )
  }
}
export default Newsitems;

//after this create sampleoutput.json file and go to news api->get started->top headlines->copy the defination and paste in new tab->right click and view page source-> copy that and paste it there for raw data(writing this here coz comments were not allowed in json file)