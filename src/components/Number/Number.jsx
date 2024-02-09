import React from 'react'
import styles from './Number.module.css'
import CountUp from 'react-countup'
import VisibilitySensor from 'react-visibility-sensor'

export default function Number() {
  return (
    <div className={styles.number_con}>
      <div className={styles.number_items}>
        <h3>
        <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
          {({isVisible}) => (
            <div>
              {isVisible ? <CountUp start={0} end={50} duration={5} /> : null}+
            </div>
          )} 
        </VisibilitySensor>
        </h3>
        <p>Project Delivered</p>
      </div>
      <div className={styles.number_items}>
        <h3>
        <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
          {({isVisible}) => (
            <div>
              {isVisible ? <CountUp start={0} end={10} duration={5} /> : null}+
            </div>
          )} 
        </VisibilitySensor>
        </h3>
        <p>Companies Helped</p>
      </div>
      <div className={styles.number_items}>
        <h3>
        <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
          {({isVisible}) => (
            <div>
              {isVisible ? <CountUp start={0} end={16} duration={5} /> : null}+
            </div>
          )} 
        </VisibilitySensor>
        </h3>
        <p>Years of experience</p>
      </div>
      <div className={styles.number_items}>
        <h3>
        <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
          {({isVisible}) => (
            <div>
              {isVisible ? <CountUp start={0} end={1000} duration={5} /> : null}+
            </div>
          )} 
        </VisibilitySensor>
        </h3>
        <p>Happy Clients</p>
      </div>
    </div>
  )
}
