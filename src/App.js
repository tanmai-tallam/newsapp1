// rcc:react class based components. if u want along with properties, use rccp

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';


export default class App extends Component {
  // what is this render function okay so I will tell you this render function will render the different methods inside of this okay render means loading the different methods or executing the different method that is inside of render method. basically, render will execute the different HTML tags.

  // using API we can do fetch,get,set operations
  
  name="tanmai"; //creating an object
  render() {
    return (
      <>
        <Navbar/>
        <News/>
      </>
    )
  }
}