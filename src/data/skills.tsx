import { FaHtml5, FaCss3, FaJsSquare, FaReact, FaSass, FaGitAlt, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiTypescript  } from "react-icons/si";
import { TbFileTypeSql } from "react-icons/tb";
import { Skill } from "../types";


export const skills: Array<Skill> = [
  {
    "title": "HTML",
    "image": <FaHtml5 size={72}/>
  },
  {
    "title": "CSS",
    "image": <FaCss3 size={72}/>
  },
  {
    "title": "JS",
    "image": <FaJsSquare size={72}/>
  },
  {
    "title": "React",
    "image":  <FaReact size={72}/>
  },
  {
    "title": "Sass",
    "image": <FaSass size={72}/>
  },
  {
    "title": "Tailwind",
    "image": <SiTailwindcss size={72}/>
  },
  {
    "title": "Git",
    "image": <FaGitAlt size={72}/>
  },
  {
    "title": "React",
    "image": <FaReact size={72}/>
  },
  {
    "title": "NodeJS",
    "image": <FaNodeJs size={72}/>
  },
  {
    "title": "SQL",
    "image": <TbFileTypeSql size={72}/>
  },
  {
    "title": "TypeScript",
    "image": <SiTypescript  size={72}/>
  }
]