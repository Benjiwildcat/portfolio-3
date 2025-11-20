import React from 'react';
import styles from '../about.module.css'

export default function About() {
  return (
    <>
      <div className={styles.header}>
        <h1>A little about me</h1>
      </div>
      <div>
        <div className={styles.content}>
          <div>
            <div>
              <p>
                Hello! My name is Benjamin Richardson, and I'm a Full Stack Developer. Ever since the spring of 2023 I've been developing my skills in a multitude of languages such as JavaScript, Python, and React. I've mostly worked on freelanced projects and tuning up old projects.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.extra}>
          <div>
            <p>
              I'm passionate about creating efficient and user-friendly applications that solve real-world problems, and websites that improve the end user experience. When I'm not coding, I enjoy following pro sports, language learning, hiking, and antiquing.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
