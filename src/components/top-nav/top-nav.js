import React from 'react';
import Media from "react-media";

export class TopNav extends React.Component {
  render() {
    return (
      <header className="app-header">
        <Media query="(max-width: 890px)">
          {matches =>
            matches ? (
              <div>
                <a className="app-nav-mobile-logo">
                  <span>&nbsp;Hi!&nbsp;</span>
                  <svg className="app-nav-mobile-svg">
                    <circle className="app-nav-mobile-svg-circ" cx="25" cy="25" r="25"/>
                  </svg>
                </a>
                <a className="app-nav-mobile-icon">☰</a>
                <a className="app-nav-mobile-contact-me" href="http://wadecollier.com/" target="_blank" rel="noopener noreferrer">Contact me</a>
              </div>
            ) : (
              <div>
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
                      <a className="app-nav-link app-nav-contact-me" href="http://wadecollier.com/" target="_blank" rel="noopener noreferrer">Contact me</a>
                    </li>
                  </ul>
                </nav>
              </div>
            )}
        </Media>
      </header>
    )
  }
}

export default TopNav;