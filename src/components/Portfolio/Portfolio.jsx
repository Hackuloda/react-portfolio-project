import React from 'react'
import styles from './Portfolio.module.css'
import Tilt from 'react-parallax-tilt';

function Portfolio() {
  return (
    <div className={styles.port_con}>
        <h3 className={styles.port_title}>Portfolio </h3>
        <div className={styles.port_list}>
            <div className={styles.port_items}>
               <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
                  <img src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODZ8fE5ldHdvcmslMjBpbXByb3ZlbWVudHxlbnwwfHwwfHx8MA%3D%3D" alt="" />
               </Tilt>
               <p>Network Improvement</p>
            </div>
            <div className={styles.port_items}>
               <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
                  <img src="https://images.unsplash.com/photo-1610168388710-a8cfbafe6c30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fFdpRmklMjBlbnRlcnByaXNlfGVufDB8fDB8fHww" alt="" />
               </Tilt>
               <p>Wireless Enterprise</p>
            </div>
            <div className={styles.port_items}>
               <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
                  <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODh8fE5ldHdvcmslMjBNb25pdG9yfGVufDB8fDB8fHww" alt="" />
               </Tilt>
               <p>Network Monitoring System</p>
            </div>
            <div className={styles.port_items}>
               <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
                  <img src="https://images.unsplash.com/photo-1545987796-200677ee1011?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TmV0d29ya3xlbnwwfHwwfHx8MA%3D%3D" alt="" />
               </Tilt>
               <p>Research Advances in Network Technologies</p>
            </div>
            <div className={styles.port_items}>
               <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
                  <img src="https://images.unsplash.com/photo-1517281862878-d312fe477d71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fERhdGElMjBjZW50ZXJ8ZW58MHx8MHx8fDA%3D" alt="" />
               </Tilt>
               <p>Moving a data center</p>
            </div>
            <div className={styles.port_items}>
               <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
                  <img src="https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D" alt="" />
               </Tilt>
               <p>Project Title</p>
            </div>
        </div>
      
    </div>
  )
}

export default Portfolio
