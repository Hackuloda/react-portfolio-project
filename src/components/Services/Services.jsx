import React from 'react'
import styles from './Services.module.css'
import { FaNetworkWired, FaPaintbrush, FaDesktop } from 'react-icons/fa6'
import { TbHeartRateMonitor } from "react-icons/tb";
import { IoMdPaperPlane } from "react-icons/io";
import { LuNetwork } from "react-icons/lu";

function Services() {
  return (
    <div className={styles.services_con}>
      <h3 className={styles.services_title}>My Services</h3>
      <div className={styles.services_list}>
        <div className={styles.services_items}>
            <IoMdPaperPlane />
            <h4>Design and Planning</h4>
            <p>
                The network planning process begins with the acquisition of external information. <br />
                This includes: <br />
                forecasts of how the new network/service will operate;
                the economic information concerning costs, and
                the technical details of the network’s capabilities
            </p>
        </div>
        <div className={styles.services_items}>
            <TbHeartRateMonitor />
            <h4>Network Monitoring</h4>
            <p>
              Site monitoring services can check HTTP pages, HTTPS, SNMP, FTP, DNS, SSH, TELNET, SSL, TCP, ICMP, SIP, UDP, Media Streaming and a range of other ports with a variety of check intervals ranging.
              For monitoring network performance, By tools use protocols like SNMP, NetFlow, Packet Sniffing, or WMI.
            </p>
        </div>
        <div className={styles.services_items}>
            <LuNetwork />
            <h4>Network Services</h4>
            <p>
              Providing network services such as LAN, WiFi, DHCP Service, Internet, VPN, etc. <br />
              Configure Network Switch, Firewall, Access Point, Controller For enterprise use
            </p>
        </div>
      </div>
    </div>
  )
}

export default Services
