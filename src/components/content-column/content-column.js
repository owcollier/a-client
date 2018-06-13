import React from 'react';
import PhotoGrid from '../photo-grid/photo-grid';

export function ContentColumn(props) {
  return (
    <section className="single-column-layout" id="meat">
      <p className="view-content-column">
       <a>Check out my portfolio</a>
      </p>
      <h1 className="title-section">Full Stack Web Developer in New York</h1>
      <div className="content-show-description">
        <p>I'm looking to join a high quality team of designers and developers to apply my skills, continue learning, and begin meaningful relationships with clients to provide professional-grade digital products.</p>
        <p>Thoughtbot seems like a wonderful place to continue my career as a developer.</p>
        <h3>What I can offer</h3>
        <p>As a recent graduate of Thinkful's full time Engineering Immersion program, I have acquired working experience building front end web clients with JavaScript, HTML, and CSS. I also have experience running web servers and writing RESTFUL APIs on the back end using Node.js/Express, and integrating both relational and non-relational databases using MongoDB, and PostgreSQL respectively. Beyond this full stack foundation, I have worked intensively with and continue to build web applications using MVC frameworks such as React.</p>
      </div>
      <h3>On a more personal note</h3>
      <p>Some stuff about me</p>
      <p>A concluding statement about me :)</p>
      <PhotoGrid />
      <h3>My Benefits</h3>
      <p>A quick statement</p>
      <ul className="icon-list">
        <li className="icon-item">
          <h4 className="title-secondary">An item</h4>
          <p>This will be a paragraph with text that says something and communicates an idea. It will be nice little chunk of text so I'm gonna pad out this filler text real nice. In a pitched battle, who do you think would win? The Dwarves of Erebor or Saruman's Orcs? Let's assume the men of Dale would assist our Dwarf friends.</p>
        </li>
        <li className="icon-item">
          <h4 className="title-secondary">Another item</h4>
          <p>This will be a paragraph with text that says something and communicates an idea. It will be nice little chunk of text so I'm gonna pad out this filler text real nice. In a pitched battle, who do you think would win? The Dwarves of Erebor or Saruman's Orcs? Let's assume the men of Dale would assist our Dwarf friends.</p>
        </li>
        <li className="icon-item">
          <h4 className="title-secondary">Another item</h4>
          <p>This will be a paragraph with text that says something and communicates an idea. It will be nice little chunk of text so I'm gonna pad out this filler text real nice. In a pitched battle, who do you think would win? The Dwarves of Erebor or Saruman's Orcs? Let's assume the men of Dale would assist our Dwarf friends.</p>
        </li>
        <li className="icon-item">
          <h4 className="title-secondary">Another item</h4>
          <p>This will be a paragraph with text that says something and communicates an idea. It will be nice little chunk of text so I'm gonna pad out this filler text real nice. In a pitched battle, who do you think would win? The Dwarves of Erebor or Saruman's Orcs? Let's assume the men of Dale would assist our Dwarf friends.</p>
        </li>
      </ul>
      <p></p>
      <p></p>
    </section>
  )
}

export default ContentColumn;