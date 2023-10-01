import { useEffect, useState } from "react";
import newsApi from "../api/newsApi";
import styles from "../page.module.css";

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const newsData = await newsApi();
        setNews(newsData);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  return (
    // <main>
    //   <section className={styles.news}>
    //     <div className={`container ${styles.news__content}`}>
    //       <h1 className={styles.news__title}>Last News</h1>
    //       <div className={styles.news__card}>
    //         <ul>
    //           {news.map((article) => (
    //             <li key={article.title}>
    //               <a href={article.url} target="_blank" rel="noopener noreferrer">
    //                 <h2>{article.title}</h2>
    //               </a>
    //               <p>{article.description}</p>
    //               {article.urlToImage && (
    //                 <img className={styles.news__image} src={article.urlToImage} alt={article.title} />
    //               )}
    //             </li>
    //           ))}
    //         </ul>
    //       </div>
    //     </div>
    //   </section>
    // </main>
    <main>
  <section className={styles.news}>
    <div className={`container ${styles.news__content}`}>
      <h2 className={styles.news__title}>Last News</h2>
        <ul className={styles.news__cardList}>
          {news.map((article) => (
            <li key={article.title} className={styles.news__card}>
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                <h3 className={styles.news__article}>{article.title}</h3>
              </a>
              <p className={styles.news__paragraph}>{article.description}</p>
              {article.urlToImage && (
                <img className={styles.news__image} src={article.urlToImage} alt={article.title} />
              )}
            </li>
          ))}
        </ul>
    </div>
  </section>
</main>
  );
};

export default News;
