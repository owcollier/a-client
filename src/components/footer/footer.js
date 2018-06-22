import React from 'react';

export function Footer(props) {
  return (
    <footer className="app-footer">
      <div className="footer-content">
        <ul className="footer-nav-groups">
          <li className="footer-nav-group">
            <h3 className="footer-nav-group-title">Check out my portfolio</h3>
            <ul className="footer-nav-list">
              <li><a href="http://wadecollier.com/" target="_blank" rel="noopener noreferrer">Portfolio</a></li>
            </ul>
          </li>
          <li className="footer-nav-group">
            <h3 className="footer-nav-group-title">See my LinkedIn profile</h3>
            <ul className="footer-nav-list">
              <li><a href="https://www.linkedin.com/in/osipwadecollier/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            </ul>
          </li>
          <li className="footer-nav-group">
            <h3 className="footer-nav-group-title">Look at my code</h3>
            <ul className="footer-nav-list">
              <li><a href="https://github.com/owcollier" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="footer-bottom">
        <strong>Made with &hearts; in 2018 by Wade Collier</strong>
        <p>
        This site was created with React.js
        <br></br>
        Thanks for taking a look :)
        </p>
      </div>
    </footer>
  )
}

export default Footer;