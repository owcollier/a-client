import React from 'react';

export function TopNav(props) {
  return (
    <header className="app-header">
      <a className="app-nav-logo"><span className="app-nav-bubble">&nbsp;Hi&nbsp;</span> thoughtbot! My name is Wade Collier</a>
      <nav className="app-nav">
        <ul>
          <li className="app-nav-item">
            <a className="app-nav-link">Portfolio</a>
          </li>
          <li className="app-nav-item">
            <a className="app-nav-link">LinkedIn</a>
          </li>
          <li className="app-nav-item">
            <a className="app-nav-link">GitHub</a>
          </li>
          <li className="app-nav-item">
            <a className="app-nav-link app-nav-contact-me">Contact me</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default TopNav;