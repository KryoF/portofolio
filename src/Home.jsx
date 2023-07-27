import styles from './Home.module.css';
import NavBar from './components/NavBar';


const Home = () => {

  return (
    <main>
      <NavBar />
      <section id='Home' className={styles.mainSection}>
        <h1>HANS IZARRARAZ</h1>
        <h3>FullStack Developer</h3>
        <div className={styles.mouseDiv}>
          <div className={styles.mouse} />
        </div>
      </section>
      <section id='About'>

      </section>
    </main>
  )
}

export default Home;
