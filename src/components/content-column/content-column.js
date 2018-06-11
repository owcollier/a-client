import React from 'react';

export function ContentColumn(props) {
  return (
    <section className="single-column-layout" id="meat">
      <p className="view-content-column">
       <a>Back to reality</a>
      </p>
      <h1 className="title-section">Full Stack Web Developer in New York</h1>
      <div className="content-show-description">
        <p>What I'm looking for</p>
        <h3>What I can offer</h3>
        <p>Details about what I can offer</p>
      </div>
      <h3>About me</h3>
      <p>Some stuff about me</p>
      <p>A concluding statement about me :)</p>
      <div className="photo-grid"></div>
      <h3>My Benefits</h3>
      <p>A quick statement</p>
      <ul>
        <li>
          <h3></h3>
          <p></p>
        </li>
        <li>
          <h3></h3>
          <p></p>
        </li>
        <li>
          <h3></h3>
          <p></p>
        </li>
        <li>
          <h3></h3>
          <p></p>
        </li>
      </ul>
      <p></p>
      <p></p>

    </section>
  )
}

export default ContentColumn;