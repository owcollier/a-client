import React from 'react';

export function Footer(props) {
  return (
    <footer className="app-footer">
      <div className="footer-content">
        <ul className="footer-nav-groups">
          <li className="footer-nav-group">
            <h3 className="footer-nav-group-title">Footer stuff</h3>
            <ul className="footer-nav-list">
              <li><a>Something</a></li>
              <li><a>Something</a></li>
              <li><a>Something</a></li>
            </ul>
          </li>
          <li className="footer-nav-group">
            <h3 className="footer-nav-group-title">Footer stuff</h3>
            <ul className="footer-nav-list">
              <li><a>Something</a></li>
              <li><a>Something</a></li>
              <li><a>Something</a></li>
            </ul>
          </li>
          <li className="footer-nav-group">
            <h3 className="footer-nav-group-title">Footer stuff</h3>
            <ul className="footer-nav-list">
              <li><a>Something</a></li>
              <li><a>Something</a></li>
              <li><a>Something</a></li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="footer-bottom">
        <strong>Created with React.js</strong>
        <p>Thanks for taking a look :)</p>
      </div>
    </footer>
  )
}

export default Footer;