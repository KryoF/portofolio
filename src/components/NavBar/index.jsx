/* eslint-disable react/jsx-no-comment-textnodes */
import styles from './NavBar.module.css'

const NavBar = () => {
  return (
    <nav className={styles.NavBar}>
        <ul className={styles.navList}>
            <li className={styles.navItem}>
                <a href="#home">// home</a>
            </li>
            <li className={styles.navItem}>
                <a href="#about">// about</a>
            </li>
            <li className={styles.navItem}>
                <a href="#projects">// projects</a>
            </li>
            <li className={styles.navItem}>
                <a href="#contact">// contact</a>
            </li>
        </ul>
    </nav>
  )
}

export default NavBar;