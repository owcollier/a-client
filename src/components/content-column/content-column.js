import React from 'react';
import PhotoGrid from '../photo-grid/photo-grid';

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
      <PhotoGrid />
      <h3>My Benefits</h3>
      <p>A quick statement</p>
      <ul>
        <li>
          <h3>An item</h3>
          <p>This will be a paragraph with text that says something and communicates an idea. It will be nice little chunk of text so I'm gonna pad out this filler text real nice. In a pitched battle, who do you think would win? The Dwarves of Erebor or Saruman's Orcs? Let's assume the men of Dale would assist our Dwarf friends.</p>
        </li>
        <li>
          <h3>Another item</h3>
          <p>This will be a paragraph with text that says something and communicates an idea. It will be nice little chunk of text so I'm gonna pad out this filler text real nice. In a pitched battle, who do you think would win? The Dwarves of Erebor or Saruman's Orcs? Let's assume the men of Dale would assist our Dwarf friends.</p>
        </li>
        <li>
          <h3>Another item</h3>
          <p>This will be a paragraph with text that says something and communicates an idea. It will be nice little chunk of text so I'm gonna pad out this filler text real nice. In a pitched battle, who do you think would win? The Dwarves of Erebor or Saruman's Orcs? Let's assume the men of Dale would assist our Dwarf friends.</p>
        </li>
        <li>
          <h3>Another item</h3>
          <p>This will be a paragraph with text that says something and communicates an idea. It will be nice little chunk of text so I'm gonna pad out this filler text real nice. In a pitched battle, who do you think would win? The Dwarves of Erebor or Saruman's Orcs? Let's assume the men of Dale would assist our Dwarf friends.</p>
        </li>
      </ul>
      <p></p>
      <p></p>
    </section>
  )
}

export default ContentColumn;