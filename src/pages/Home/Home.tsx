import React from 'react';
import styles from './Home.module.css';
import homeImage from '../../assets/homeImage.jpg';

const Home: React.FC = () => {
  return (
    <section className={styles.home}>
      <div className={styles.homeContent}>
        <h1 className={styles.homeTitle}>Hi, I'm Eugene</h1>
        <p className={styles.homeInfo}>I'm a Front End developer with a passion for creating websites. Looking for work opportunities</p>
        <a href="https://drive.google.com/file/d/1u3RzcJYbDZU_gX2maWOLZ4beYBybiNnW/view?usp=sharing" target="_blank" className={styles.homeCvBtn}>View CV</a>
      </div>
      <img src={homeImage} alt="Home" className={styles.homeImage} />
      <div className={styles.topBlur} />
    </section>
  );
};

export default Home;