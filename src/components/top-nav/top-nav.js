import React from 'react';
import Media from "react-media";

export class TopNav extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isModalVisible: false
    }

    this.toggleModal = this.toggleModal.bind(this);

  }

  toggleModal() {
    this.setState((prevState) => ({
      isModalVisible: !prevState.isModalVisible
    }));
  }

  render() {

    const isModalVisible = this.state.isModalVisible;
    let mobileNav;

    if (isModalVisible) {
      mobileNav =
      <header className="app-header app-header-light-bg">
        <a className="app-nav-mobile-logo">
          <div className="app-nav-mobile-span-container">
            <span className="app-nav-mobile-span app-nav-mobile-span-light-bg">&nbsp;Hi!&nbsp;</span>
          </div>
          <svg className="app-nav-mobile-svg">
            <circle className="app-nav-mobile-svg-circ app-nav-mobile-svg-circ-light-bg" cx="25" cy="25" r="25"/>
          </svg>
        </a>
        <a className="app-nav-mobile-icon app-nav-mobile-icon-light-bg" onClick={this.toggleModal}>☰</a>
        <a className="app-nav-mobile-contact-me app-nav-mobile-contact-me-light-bg" href="http://wadecollier.com/" target="_blank" rel="noopener noreferrer">Contact me</a>
        <nav className="app-nav-mobile-menu">
          <ul>
            <li className="app-nav-mobile-menu-item">
              <a className="app-nav-mobile-menu-link" href="http://wadecollier.com/" target="_blank" rel="noopener noreferrer">Portfolio</a>
            </li>
            <li className="app-nav-mobile-menu-item">
              <a className="app-nav-mobile-menu-link" href="https://www.linkedin.com/in/osipwadecollier/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </li>
            <li className="app-nav-mobile-menu-item">
              <a className="app-nav-mobile-menu-link" href="https://github.com/owcollier" target="_blank" rel="noopener noreferrer">GitHub</a>
            </li>
          </ul>
        </nav>
      </header>
    } else {
      mobileNav =
      <header className="app-header">
        <a className="app-nav-mobile-logo">
          <div className="app-nav-mobile-span-container">
            <span className="app-nav-mobile-span app-nav-mobile-span-dark-bg">&nbsp;Hi!&nbsp;</span>
          </div>
          <svg className="app-nav-mobile-svg">
            <circle className="app-nav-mobile-svg-circ" cx="25" cy="25" r="25"/>
          </svg>
        </a>
        <a className="app-nav-mobile-icon app-nav-mobile-icon-dark-bg" onClick={this.toggleModal}>☰</a>
        <a className="app-nav-mobile-contact-me app-nav-mobile-contact-me-dark-bg" href="http://wadecollier.com/" target="_blank" rel="noopener noreferrer">Contact me</a>
      </header>
    }

    return (
      <div>
        <Media query="(max-width: 890px)">
          {matches =>
            matches ? (
              <div>
                {mobileNav}
              </div>
            ) : (
              <header className="app-header">
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
              </header>
            )}
        </Media>
      </div>
    )
  }
}

export default TopNav;