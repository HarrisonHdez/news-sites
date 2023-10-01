import styles from "../page.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar} aria-label="Barra de navegacion">
      <div className={`container ${styles.navbar__content} `}>
        <span className={styles.navbar__logo} translate="no">
          News site
        </span>

        <div>
          <a href=""></a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
