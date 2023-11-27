import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
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
  }
]