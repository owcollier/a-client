import React from 'react';
import PhotoGrid from '../photo-grid/photo-grid';

import FontAwesome from 'react-fontawesome';

export function ContentColumn(props) {
  return (
    <section className="single-column-layout" id="meat">
      <p className="view-content-column">
       <a href="http://wadecollier.com/" target="_blank" rel="noopener noreferrer">Check out my portfolio</a>
      </p>
      <h1 className="title-section">Full Stack Web Developer in New York</h1>
      <div className="content-show-description">
        <p>Hi thoughtbot! My name is Wade Collier and I'm looking for an opportunity to apply my skills, continue learning, and contribute in a meaningful way to clients, my community, and a company I can believe in. You may have already figured it out, but I'm interested in doing so with you!</p>
        <p>Thoughtbot seems like a wonderful place to continue my career as a developer. Firstly, I'm impressed by the work coming out of thoughtbot – the 3d visualization implented in <a href="https://thoughtbot.com/work/martial_codex" target="_blank" rel="noopener noreferrer">Martial Codex</a> is particularly cool because I'm keen on implementing both 2d and 3d animations in the browser – I love playing around with WebGL and related animation libraries via the HTML5 Canvas API. Beyond the immediate "cool" factor of your WebGl related project, I'm really into the front end design, implementation, and dedication to user flows as exhibited in all of your projects. As a React developer, reading about the process of utilizing React Native to build and ship the <a href="https://thoughtbot.com/work/splitfit" target="_blank" rel="noopener noreferrer">SplitFit</a> mobile app so efficiently is awesome (love that you were able to provide easier access for the designer to contribute directly to the codebase), and its UI and user flows look very polished. Overall, I'm inspired by the presentation of thoughtbot's project strategy and versatility.</p>
        <p> The documentation of thoughtbot's development principles also stands out to me. I've already picked up some useful practices by reading through your playbook. Who knew I could improve the format and clarity of my git commits by casually paging through your website? As a developer looking for an organization and role that will help me improve in my development practices, the quality of documentation about how thoughtbot works in-house speaks volumes. The company's mission, benefits, and focus on personal development send me the message that thoughtbot is an organization worth going out on a limb for.</p>
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
      <p>So I'm totally interested in a developer position with thoughtbot, but I know that it's as much about you as it is about me. I believe I can provide benefits as an asset to the thoughtbot team, but I'd also like to emphasize my interest in the right fit. Here's why I think thoughtbot might be a great fit:</p>
      <ul className="icon-list">
        <li className="icon-item item-green">
          <div>
            <FontAwesome name='seedling' />
          </div>
          <h4 className="title-secondary">Focused on growth</h4>
          <p>Thoughtbot's weekly time investment in learning, creating, and contributing for both self-improvement and the betterment of company/community speaks to me. I'm just as oriented towards self-development as I am towards career development and any opportunity to holistically channel a work environment into experience beyond "just work" is always welcome.</p>
        </li>
        <li className="icon-item item-blue">
          <div>
            <FontAwesome name='book' />
          </div>
          <h4 className="title-secondary">Always Learning</h4>
          <p>My interest in development is rooted in an almost compulsive need to continue learning new ways to work with and build web technologies/software. I believe that a developer's ability to stay learning and flexible with new technologies allows them to better serve their cause, and thoughtbot's willingness to chip in on conference attendance and job-related training for team members seems to reflect my values.</p>
        </li>
        <li className="icon-item item-yellow">
          <div>
            <FontAwesome name='handshake' />
          </div>
          <h4 className="title-secondary">Looking for a team</h4>
          <p>As I continue my career in web development, I seek out a healthy ecosystem of experienced developers and designers to learn from and collaborate with. My most memorable accomplishments as a developer to date have involved extensive collaboration and drawing on the experience of my peers. Thoughtbot seems very well organized in both its internal practices and project management, and I believe that I would benefit from thoughtbot's quality while contributing to its culture.</p>
        </li>
        <li className="icon-item item-pink">
          <div>
            <FontAwesome name='heart' />
          </div>
          <h4 className="title-secondary">Well-being in mind</h4>
          <p>I want to grow as both a developer and an individual, and I'm seeking a solid organization to do that with. The most important goal for me is to find a position in a supportive, growth-oriented environment that will allow me to develop great products – conditions that I believe will foster my well-being as both a developer and a human being. From what I can see, thoughtbot ticks the boxes.</p>
        </li>
      </ul>
      <p className="big-contact-me">
        <a className="primary-button" href="http://wadecollier.com/" target="_blank" rel="noopener noreferrer">Contact me</a>
      </p>
      <p className="outro-bit">My impression is that thoughtbot produces high quality products, is sound in its product development principles, and promotes a growth-oriented work culture that accomodates its team members' needs as people. Of course, I'd love to have an opportunity to learn more about thoughtbot firsthand! So please thoughtbot, don't hesitate to reach out if I seem like I might be a good fit!</p>
    </section>
  )
}

export default ContentColumn;