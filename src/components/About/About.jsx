import React from 'react';
import githubIcon from '../../assets/profile/Github-Icon.png';
import linkedInIcon from '../../assets/profile/LinkedIn-Icon.png';
import Dakota from '../../assets/profile/Dakota.png';
import Dannie from '../../assets/profile/Dannie.jpg';
import Janelle from '../../assets/profile/Janelle.png';
import Mikey from '../../assets/profile/Mikey.png';
import Will from '../../assets/profile/Will.jpg';
import styles from './About.css';

// create component for duplicate code
const Developer = ({ name, img, bio, linkedIn, github}) => (
  <div className={styles.dev}>
    <img src={img} alt={`${name} Profile Picture`}/>
    <div className={styles.links}>
      <a href={github} target="_blank" rel="noopener noreferrer">
        <img src={githubIcon} alt="github-icon" className={styles.icons}/>
      </a>
      <a href={linkedIn} target="_blank" rel="noopener noreferrer">
        <img src={linkedInIcon} alt="linkedin-icon" className={styles.icons}></img>
      </a>
    </div>
    <p>{bio}</p>
  </div>
)

const About = () => (
  <>
    <main>
      <div className={styles.devs}>
        <div className={styles.teamdev}>
          <a href="https://github.com/Alcherithm" target="_blank" rel="noopener noreferrer">
            <h1 className={styles.alcherithmHeader}>Alcherithm</h1>
            <img src={githubIcon} alt="github-icon" className={styles.icons}/>
          </a>
          <p className={styles.para}>Alcherithm - a code companion. Junior software developers often struggle with the learning process of code challenges. This learning platform combines resources, videos and documentation to help developers build a foundation. Users can not only practice from our library of code challenges, but they can also review past attempts at various problems. We invite you take the Alcherithm challenge; happy coding!
          </p>

        </div>
      </div>

      <div className={styles.devs}>
        <Developer
          name="Dakota"
          img={Dakota}
          github="https://github.com/dakotadruley"
          linkedIn="https://www.linkedin.com/in/dakota-druley/"
          bio="DAKOTA DRULEY enjoys the full stack process and is passionate about problem solving, integrations, and efficient code. She is also a dancer, painter, social justice advocate and proud cat mom."
        />

        <div className={styles.dev}>
          <img src={Dannie} alt="Dannie Profile Picture"/>
          <div className={styles.links}>
            <a href="https://github.com/DannieSchu" target="_blank" rel="noopener noreferrer">
              <img src={githubIcon} alt="github-icon" className={styles.icons}/>
            </a>
            <a href="https://www.linkedin.com/in/dannieschumaker/" target="_blank" rel="noopener noreferrer">
              <img src={linkedInIcon} alt="linkedin-icon" className={styles.icons}></img>
            </a>
          </div>
          <p>DANNIE SCHUMAKER is a lifelong creator with a passion for the intersection of science and art. Whether knitting a sweater or building an app, her favorite part of the creative process is finding an elegant solution to a complex problem.</p>
        </div>

        <div className={styles.dev}>
          <img src={Janelle} alt="Janelle Profile Picture"/>
          <div className={styles.links}>
            <a href="https://github.com/janellemellor" target="_blank" rel="noopener noreferrer">
              <img src={githubIcon} alt="github-icon" className={styles.icons}/>
            </a>
            <a href="https://www.linkedin.com/in/janellemellor/" target="_blank" rel="noopener noreferrer">
              <img src={linkedInIcon} alt="linkedin-icon" className={styles.icons}></img>
            </a>
          </div>
          <p>JANELLE MELLOR is a fullstack developer who enjoys leveraging her technical experience with her community building background to develop meaningful tools. She uses her lived/learned experience and privilege to support the creation of more human-centered teams, processes, and programs and finds grounding in nature and in connection with others.</p>
        </div>

        <div className={styles.dev}>
          <img src={Mikey} alt="Mikey Profile Picture"/>
          <div className={styles.links}>
            <a href="https://github.com/mikeymasonic" target="_blank" rel="noopener noreferrer">
              <img src={githubIcon} alt="github-icon" className={styles.icons}/>
            </a>
            <a href="https://www.linkedin.com/in/michaelromay/" target="_blank" rel="noopener noreferrer">
              <img src={linkedInIcon} alt="linkedin-icon" className={styles.icons}></img>
            </a>
          </div>
          <p>MICHAEL ROMAY is a fullstack engineer, installation artist and musician who makes weird digital visual and interactive art.  Code, music and art go hand in hand for him.  He also has a baby bird named Rico that is very sweet.</p>
        </div>

        <div className={styles.dev}>
          <img src={Will} alt="Will Profile Picture"/>
          <div className={styles.links}>
            <a href="https://github.com/Shaka2Pass" target="_blank" rel="noopener noreferrer">
              <img src={githubIcon} alt="github-icon" className={styles.icons}/>
            </a>
            <a href="https://www.linkedin.com/in/willpiro/" target="_blank" rel="noopener noreferrer">
              <img src={linkedInIcon} alt="linkedin-icon" className={styles.icons}></img>
            </a>
          </div>
          <p>WILL PIRO is full stack software engineer who relishes in the mentality that every project deserves a clear goal, detailed plan, sensible testing framework, and the grit to execute. As a former City Planner, he looks forward to building applications that exist at the intersection of sustainable community development and web-based technologies that produce positive, tangible, and equitable outcomes.</p>
        </div>
      </div>
    </main>
  </>
);

export default About;
