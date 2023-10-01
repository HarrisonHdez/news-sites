import Navbar from "./components/Navbar";
import News from "./components/News";
import styles from "./page.module.css";

function App() {
  return (
    <>
      <header className={styles.home} name="home">
        <Navbar />
        <div className={`container ${styles.home__content}`}>
          <h1
            className={`${styles.home__title} animate__animated animate__fadeInUp`}
          >
            US News Today <br />
            Your Top Source for US News
          </h1>
          <p
            className={`${styles.home__subtitle} animate__animated animate__fadeInUp`}
          >
            Stay Up to Date with the Latest News and Events Across the United
            States
          </p>

        </div>
      </header>

      <News />
    </>
  );
}

export default App;
