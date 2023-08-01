/* eslint-disable react/jsx-no-comment-textnodes */
import styles from './NavBar.module.css'

const NavBar = () => {
  return (
    <nav className={styles.NavBar}>
        <ul className={styles.navList}>
            <li className={styles.navItem}>
                <a href="#home">//Home</a>
            </li>
            <li className={styles.navItem}>
                <a href="#about">//About</a>
            </li>
            <li className={styles.navItem}>
                <a href="#projects">//Projects</a>
            </li>
            <li className={styles.navItem}>
                <a href="#contact">//Contact</a>
            </li>
        </ul>
    </nav>
  )
}

export default NavBar;