import PropType from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({ coverImg, title, summary, genres, id, year }) {
  return (
    <div className={styles.movieContainer}>
      <img className={styles.movieImg} src={coverImg} alt={title}></img>
      <div>
        <h2 className={styles.movie__title}>
          <Link className={styles.movieLink} to={`/movie/${id}`}>
            {title}
          </Link>
        </h2>
        <h3 className={styles.movie__year}>{year}</h3>
        <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
        <ul className={styles.movie__genres}>
          {genres.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

Movie.propTypes = {
  coverImg: PropType.string.isRequired,
  title: PropType.string.isRequired,
  summary: PropType.string.isRequired,
  genres: PropType.arrayOf(PropType.string).isRequired,
  id: PropType.number.isRequired,
};

export default Movie;
