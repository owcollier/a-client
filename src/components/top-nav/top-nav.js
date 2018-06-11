import React from 'react';

export function TopNav(props) {
  return (
    <header className="app-header">
      <a className="app-nav-logo">Wade Collier</a>
      <nav className="app-nav">
        <ul>
          <li className="app-nav-item">Portfolio</li>
          <li className="app-nav-item">LinkedIn</li>
          <li className="app-nav-item">GitHub</li>
          <li className="app-nav-item">
            <a className="app-nav-link app-nav-contact-me">Contact me</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default TopNav;