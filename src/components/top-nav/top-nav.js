import React from 'react';

export function TopNav(props) {
  return (
    <header className="app-header">
      <a className="app-nav-logo"> This will be the logo :) </a>
      <nav className="app-nav">
        <ul>
          <li className="app-nav-item">stuff</li>
          <li className="app-nav-item">stuff</li>
          <li className="app-nav-item">stuff</li>
          <li className="app-nav-item">stuff</li>
          <li className="app-nav-item">
            <a className="app-nav-link app-nav-contact-me">Contact me</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default TopNav;