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
        <p>Hi thoughtbot! My name is Wade Collier and I'm looking for an opportunity to apply my skills, continue learning, and contribute in a meaningful way to clients, my community, and a company I can believe in.</p>
        <p>Thoughtbot seems like a wonderful place to continue my career as a developer. I'm impressed by the work you've done - the 3d martial arts visualization app is particularly cool (I love implementing WebGL and 3d animation in HTML5 Canvas) - and am further impressed with the company's mission, benefits, and focus on personal development every week.</p>
        <h3>What I can offer</h3>
        <p>As a recent graduate of Thinkful's full time Engineering Immersion program, I've acquired working experience building front end web clients with JavaScript, HTML, CSS, and React/Redux. I also have experience running web servers and writing RESTFUL APIs on the back end using Node.js/Express, and integrating both relational and non-relational databases using MongoDB, and PostgreSQL respectively.</p>
        <h3>But Wade, we're looking for React Native developers!</h3>
        <p> I see that you are currently hiring for React Native developers, and although my current experience with React and Redux lies in web application territory, I still believe that I can be a great addition to your team. I've worked intensively with React and Redux, and am looking for an opportunity to extend that experience into the realm of React Native. I know that my knowledge of React's component-based architecture, state management, and workflow will translate quite well into React Native if given the opportunity to bring my own ability to learn new technologies/frameworks quickly and efficiently to the table. I've already built several mobile first web applications, and developing native applications is just the next step. I have full confidence that I can productively join a React Native development team and effectively learn from peers.</p>
      </div>
      {/* <h3>On a more personal note</h3>
      <p>Some stuff about me</p>
      <p>A concluding statement about me :)</p> */}
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