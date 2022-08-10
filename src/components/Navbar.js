import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}> 
  <a className="navbar-brand" href="/">{props.title}</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item ">
        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about">{props.About}</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/contact">{props.contact}</Link>
      </li>
    </ul>
  </div>

  <form>
  <div className={`custom-control custom-switch text-${props.color}`}>
    <input type="checkbox" onClick={props.toggleMode} className="custom-control-input" id="switch1"/>
    <label className="custom-control-label" htmlFor="switch1">{props.value}</label>
  </div>
</form>
</nav>
    </div>
  )
  Navbar.propTypes={title:PropTypes.string.isRequired,  //These are the propTypes for the props DataType 
                   About:PropTypes.string };

 Navbar.defaultProps={title:'Set title here',  // These are the default props which will be used if we forget to send the prop names
                    About:'About text here' };  
}


