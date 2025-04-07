// import React from "react";

// import styles from "./About.module.css";
// import { getImageUrl } from "../../utils";

// export const About = () => {
//   return (
//     <section className={styles.container} id="about">
//       <h2 className={styles.title}>About</h2>
//       <div className={styles.content}>
//         <img
//           src={getImageUrl("about/aboutrm.png")}
//           alt="Me sitting with a laptop"
//           className={styles.aboutImage}
//         />
//         <ul className={styles.aboutItems}>
//           <li className={styles.aboutItem}>
//             <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
//             <div className={styles.aboutItemText}>
//               <h3>Frontend Developer</h3>
//               <p>
//                 I'm a frontend developer with experience in building responsive
//                 and optimized sites
//               </p>
              
//             </div>
//           </li>
//           <li className={styles.aboutItem}>
//             <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
//             <div className={styles.aboutItemText}>
//               <h3>Backend Developer</h3>
//               <p>
//                 I have experience developing fast and optimised back-end systems
//                 and APIs
//               </p>
//             </div>
//           </li>
//           <li className={styles.aboutItem}>
//             <img src={getImageUrl("about/uiIcon.png")} alt="UI icon" />
//             <div className={styles.aboutItemText}>
//               <h3>UI Designer</h3>
//               <p>
//                 I have designed multiple landing pages and have created design
//                 systems as well
//               </p>
//             </div>
//           </li>
//         </ul>
//       </div>
//     </section>
//   );
// };


import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutrm.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <div className={styles.aboutText}>
          <p>
            Hi, I'm <strong>Ankit Choudhary</strong>, a <strong>passionate</strong> and <strong>detail-oriented Software Engineer</strong> with a strong foundation in <span className={styles.highlight}>Java</span>, <span className={styles.highlight}>Spring Boot</span>, and <span className={styles.highlight}>MySQL</span>. I specialize in building <strong>scalable backend systems</strong> and <strong>full-stack web applications</strong> using modern technologies like <span className={styles.highlight}>React.js</span>, <span className={styles.highlight}>Spring Framework</span>, and <span className={styles.highlight}>REST APIs</span>.
          </p>
          <p>
            I recently completed a <strong>Web Development Internship at Nexus Info</strong>, where I gained <em>hands-on experience</em> working on <strong>real-world projects</strong> that enhanced both my <strong>frontend and backend development skills</strong>.
          </p>
          <p>
            My portfolio includes impactful projects like a <span className={styles.highlight}>Bank Management System</span>, <span className={styles.highlight}>Library Management System</span>, and an <span className={styles.highlight}>Employee Management Web App</span>, all of which demonstrate my ability to create <strong>secure</strong>, <strong>user-friendly</strong>, and <strong>efficient applications</strong>.
          </p>
          <p>
            With a <strong>Bachelor's degree in Computer Engineering</strong> (CGPA: <strong>8.85</strong>), a <strong>Java Developer certification</strong>, and an eagerness to <em>continuously explore and adopt new technologies</em>, I am committed to growing as a developer and contributing to <strong>meaningful software solutions</strong>.
          </p>
          <p>
            Outside of coding, I enjoy <strong>working out</strong>, <strong>swimming</strong>, <strong>skating</strong>, exploring <strong>tech gadgets</strong>, <strong>e-commerce</strong>, and <strong>PC assembling</strong>. <em>Let’s build something great together!</em>
          </p>
        </div>
      </div>
    </section>
  );
};

