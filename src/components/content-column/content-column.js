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
    </section>
  )
}

export default ContentColumn;