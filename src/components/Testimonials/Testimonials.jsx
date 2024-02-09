import React from 'react'
import styles from './Testimonials.module.css'

function Testimonials() {
  return (
    <div className={styles.testi_con}>
        <h3 className={styles.testi_title}>Testimonials</h3>
        <div className={styles.testi_list}>
            <div className={styles.testi_items}>
                <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet in optio architecto expedita amet possimus laudantium. Magni eaque soluta voluptas.
                </p>
                <img src="https://images.unsplash.com/photo-1707275566500-c47e35c2b75b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MXx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <h4>Thongthep Charoensuk</h4>
                <p className={styles.bio}>Assistant Infrastructure Manager</p>
            </div>
            <div className={styles.testi_items}>
                <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet in optio architecto expedita amet possimus laudantium. Magni eaque soluta voluptas.
                </p>
                <img src="https://images.unsplash.com/photo-1707275938159-e9d527a3ada5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MXx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <h4>Dulyavit Sathainthammanee</h4>
                <p className={styles.bio}>Technology Division Manager</p>
            </div>
            <div className={styles.testi_items}>
                <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet in optio architecto expedita amet possimus laudantium. Magni eaque soluta voluptas.
                </p>
                <img src="https://images.unsplash.com/photo-1707276355623-212ae98478d1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MXx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <h4>Phon Nilsonthi</h4>
                <p className={styles.bio}>Head Of Group IT</p>
            </div>
        </div>
    </div>
  )
}

export default Testimonials
