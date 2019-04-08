import React from 'react'
import Link from 'gatsby-link'
import styles from './navigation.module.css'
import logo from './images/ReactJS.png'
export default () => (
  <nav role="navigation">
    <ul className={styles.navigation}>
  <li className={styles.navigationItem}>
        <Link to="/"><img className={styles.logo} src={logo}/></Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/">Home</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/about-us/">About</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/about/">Contact </Link>
      </li>
    </ul>
  </nav>
)
