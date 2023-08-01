import styles from './Home.module.css';
import NavBar from './components/NavBar';
import Arrows from './components/Arrows';

const Home = () => {

  return (
    <main>
      <NavBar />
      <section id='Home' className={styles.mainSection}>
        <h1>H<span style={{ color: '#880000'}}>A</span>NS</h1>
        <h2>
          <div className={styles.subTitle}>
            <span>I</span>
            <span>Z</span>
            <span>A</span>
            <span>R</span>
            <span>R</span>
            <span>A</span>
            <span>R</span>
            <span>A</span>
            <span>Z</span>
          </div>
        </h2>
        <Arrows />
      </section>
      <section id='About' className={styles.DeleteThis}>
        <h2>About</h2>
      </section>
      <section id='Projects' className={styles.DeleteThis}>
        <h2>Projects</h2>
      </section>
      <section id='Contact' className={styles.DeleteThis}>
        <h2>Contact</h2>
      </section>
    </main>
  )
}

export default Home;
