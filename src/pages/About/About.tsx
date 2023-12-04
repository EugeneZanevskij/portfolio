import styles from './About.module.css';
import aboutImage from '../../assets/aboutImage.jpg';
import cursorIcon from '../../assets/cursorIcon.png';
import serverIcon from '../../assets/serverIcon.png';
import { Experience } from '../../components/Experience/Experience';

const About = () => {
  return (
    <section className={styles.about}>
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={aboutImage}
          alt="Me"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={cursorIcon} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a frontend developer with experience in building responsive sites and web applications
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={serverIcon} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I've created back-end APIs for my projects
              </p>
            </div>
          </li>
        </ul>
      </div>
      <Experience />
    </section>
  );
};

export default About