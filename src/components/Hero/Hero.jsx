import React from 'react'
import styles from './Hero.module.css'
import { FaGithub, FaLinkedinIn , FaFacebookF } from 'react-icons/fa6'
import { TypeAnimation } from 'react-type-animation'
import Tilt from 'react-parallax-tilt';

function Hero() {
  return (
    <div className={styles.hero_wrapper}>
      <div className={styles.container}>
        <div className={styles.hero_con}>
            <div className={styles.hero_info}>
                <p className={styles.text_1}>Hi, it’s me</p>
                <h3 className={styles.text_2}>Suvishan Pipatpanuvittaya</h3>
                <p className={styles.text_3}>
                    <span style={{marginRight: '10px'}}>I'm a</span> 
                    <TypeAnimation
                      sequence={[
                        // Same substring at the start will only be typed out once, initially
                        'Network Administrator Specialist',
                        1000, // wait 1s before replacing "Mice" with "Hamsters"
                        'Supervisor',
                        1000,                   
                      ]}
                      speed={50}
                      repeat={Infinity}
                    />
                    
                </p>
                <p className={styles.text_4}>
                  16-YEARS OF EXPERIENCE ADMINISTRATOR WITH A DEMONSTRATED <br />
                  HISTORY OF WORKING IN SECURITY, SYSTEM, NETWORK, AND TEAM BUILDING <br /> <br/>
                  LEADERSHIP SKILLS IN COMMUNICATION, COLLABORATION, CRITICAL THINKING, PROJECT MANAGEMENT
                </p>
                <ul className={styles.hero_social}>
                  <li><a href="#"><FaGithub /></a></li>
                  <li><a href="#"><FaLinkedinIn /></a></li>
                  <li><a href="#"><FaFacebookF /></a></li>
                </ul>
            </div>
            <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
                <div className={styles.hero_img}></div>
            </Tilt>
        </div>
      </div>
    </div>
  )
}

export default Hero
