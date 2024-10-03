// rcc:react class based components. if u want along with properties, use rccp

import React, { Component } from "react"
import Navbar from "./Components/Navbar";
import News from "./Components/News";
// we have not written code for routing in navbar, so we should import some libraries , for tht we should npm install our react router dom
import {BrowserRouter, Routes,Route} from "react-router-dom";


export default class App extends Component {
  // what is this render function okay so I will tell you this render function will render the different methods inside of this okay render means loading the different methods or executing the different method that is inside of render method. basically, render will execute the different HTML tags.

  // using API we can do fetch,get,set operations
  
  name="tanmai"; //creating an object
  render() {
    return (
      <>
        <BrowserRouter>
            {/* to show the navbar for all the pages */}
            <Navbar/>
            <Routes>
              <Route  exact path="/" element={<News key="general" pageSize={5} country="us" category="general" />}> </Route>
              <Route  exact path="/sports" element={<News key="sports" pageSize={5} country="us" category="sports" />}> </Route>
              <Route  exact path="/business" element={<News key="business" pageSize={5} country="us" category="business" />}> </Route>
              <Route  exact path="/entertainment" element={<News key="entertainment" pageSize={5} country="us" category="entertainment" />}> </Route>
              <Route  exact path="/health" element={<News key="health" pageSize={5} country="us" category="health" />}> </Route>
              <Route  exact path="/science" element={<News key="science" pageSize={5} country="us" category="science" />}> </Route>
              <Route exact path="/technology" element={<News key="technology" pageSize={5} country="us" category="technology" />}> </Route>


            </Routes>
        </BrowserRouter>


        {/* <Navbar/> */}
        {/* <News pageSize={5} country="us" category="general" /> */}
      </>
    )
  } 
}