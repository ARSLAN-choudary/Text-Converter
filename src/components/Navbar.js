import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Aboutus from './Aboutus'


function Navbar(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/Home">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/Home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Contactus">Contact us</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Aboutus">About us</Link>
        </li>
      </ul>
    </div>
    <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label ms-2"htmlFor="flexSwitchCheckDefault">Enable dark mode</label>
</div>
  </div>
  
</nav>


    </div>
  )
}

export default Navbar

// Navbar.PropTypes={title:PropTypes.string}

Navbar.defaultProps={
  title:"set title here"
}