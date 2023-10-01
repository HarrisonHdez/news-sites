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
            className={styles.home__title}
          >
            Technology News <br /> Your main source of news.
          </h1>
          <p
            className={styles.home__subtitle}
          >
            Stay up to date with the latest news and events
          </p>
        </div>
      </header>

      <News />
    </>
  );
}

export default App;
