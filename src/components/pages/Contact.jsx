import React from 'react';
import styles from '../contact.module.css'

export default function Contact() {
  return (


    <><title>Contact Me</title><div className={styles.container}>
      <div className={styles.header}>
        <h2>
          Thank You for looking at my portfolio!
        </h2>
      </div>
      <div>
        <div>
          <div id='content' className={`${styles.info} ${styles.content}`}>
            <a className={styles.linkedin} href='https://www.linkedin.com/in/benjamin-richardson-a0078a113/' target='_blank' rel='noreferrer'>LinkedIn</a>
            <span id='email'>Email: benjiwildcat@gmail.com</span>
            <span id='phone'>Phone: 214-901-1174</span>
          </div>
        </div>
      </div>
    </div></>



  );
}