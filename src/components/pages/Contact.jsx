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

          <div className={styles.info}>
            <a id='linkedin' href='https://www.linkedin.com/in/benjamin-richardson-a0078a113/' target='_blank' rel='noreferrer'>LinkedIn</a>
            <a href='mailto:benjiwildcat@gmail.com'>Email: benjiwildcat@gmail.com</a>
            <a href='tel:+12149011174'>Phone: 214-901-1174</a>
          </div>

        </div>

      </div>
    </div></>



  );
}