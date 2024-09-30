import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
      <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" to="/">NEWS APP</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" to="/">Home</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Category
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" to="/General">General</a></li>
            <li><a className="dropdown-item" to="/Sports">Sports</a></li>
            <li><a className="dropdown-item" to="/Business">Business</a></li>
            <li><a className="dropdown-item" to="/Entertainment">Entertainment</a></li>
            <li><a className="dropdown-item" to="/Health">Health</a></li>
            <li><a className="dropdown-item" to="/Science">Science</a></li>
            <li><a className="dropdown-item" to="/Technology">Technology</a></li>
          
          </ul>
        </li>
    </ul>
    </div>
  </div>
</nav>
      </div>
    )
  }
}



