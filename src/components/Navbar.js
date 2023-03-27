// export default function Navbar()
// {
//     return("Hello this is a Navbar Component");
// }
import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'
export default function Navbar(props) {
  return (
    <div style={{border:1+'px solid grey'}} >
        <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark">
  <div className={`container-fluid bg-${props.mode} text-${(props.mode==="dark")?'light':'dark'}`}>
    <a className={`navbar-brand  text-${(props.mode==="dark")?'light':'dark'}`} href="/TextForm">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className={` nav-link active navbar-brand  text-${(props.mode==="dark")?'light':'dark'}`} aria-current="page" href="/About">{props.aboutText}</a>
           </li>
        <li className="nav-item">
          <a className={`nav-link disabled nav-link active navbar-brand  text-${(props.mode==="dark")?'light':'dark'}`} href="#">Disabled</a>
        </li>
      </ul>
      <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault"/>
  <label className={`form-check-label text-${(props.mode==="dark")?'light':'dark'}`} htmlfor="flexSwitchCheckDefault">Dark Mode</label>
</div>
    </div>
  </div>
</nav>
    </div>
  )
}

Navbar.propType={
    title:"PropTypes.string",
    aboutText:"PropTypes.string"
}
Navbar.defaultProps={
    title:"hello title",
    aboutText:"About Us"
}