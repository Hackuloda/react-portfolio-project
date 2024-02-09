import React from 'react'
import styles from './Skills.module.css'
import { FaReact, FaSass, FaPython , FaGitAlt, FaNode, FaFigma,} from 'react-icons/fa6'
import { SiPowerapps, SiPowerautomate, SiPowerbi, SiTableau, SiTypescript} from "react-icons/si";

function Skills() {
  return (
    <div className={styles.skills_con}>
      <h3 className={styles.skills_title}>My Skill Set</h3>
      <ul className={styles.skills_list}>
        <li>
            <FaReact />
        </li>
        <li>
            <FaSass />
        </li>
        <li>
            <FaPython />
        </li>
        <li>
            <SiTypescript />
        </li>
        <li>
            <FaGitAlt />
        </li>
        <li>
            <FaNode />
        </li>
        <li>
            <FaFigma />
        </li>
        <li>
            <SiPowerapps />
        </li>
        <li>
            <SiPowerautomate />
        </li>
        <li>
            <SiPowerbi />
        </li>
        <li>
            <SiTableau />
        </li>
      </ul>
    </div>
  )
}

export default Skills
