import React from "react";
import { Project } from "../../types";
import styles from "./ProjectCard.module.css";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
} : { project: Project }) => {
  return (
    <div className={styles.container}>
      <img
        src={imageSrc}
        alt={title}
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => {
          return (
            <li key={id} className={styles.skill}>
              {skill}
            </li>
          );
        })}
      </ul>
      <div className={styles.links}>
        <a href={demo} target="_blank" className={styles.link}>
          Demo
        </a>
        <a href={source} target="_blank" className={styles.link}>
          Source
        </a>
      </div>
    </div>
  );
};