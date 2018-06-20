import React from 'react';

export class TopNav extends React.Component {
  render() {
    return (
      <header className="app-header">
        <svg className="app-nav-svg">
          <circle className="app-nav-svg-circ" cx="19" cy="19" r="19"/>
        </svg>
        <a className="app-nav-logo"><span className="app-nav-bubble">&nbsp;Hi&nbsp;</span> thoughtbot! My name is Wade Collier</a>
        <nav className="app-nav">
          <ul>
            <li className="app-nav-item">
              <a className="app-nav-link" href="http://wadecollier.com/" target="_blank" rel="noopener noreferrer">Portfolio</a>
            </li>
            <li className="app-nav-item">
              <a className="app-nav-link" href="https://www.linkedin.com/in/osipwadecollier/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </li>
            <li className="app-nav-item">
              <a className="app-nav-link" href="https://github.com/owcollier" target="_blank" rel="noopener noreferrer">GitHub</a>
            </li>
            <li className="app-nav-item">
              <a className="app-nav-link app-nav-contact-me" href="https://developer.mozilla.org/en-US/" target="_blank" rel="noopener noreferrer">Contact me</a>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default TopNav;