import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import style from "./Detail.module.css";
function Detail() {
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    setLoading(false);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div className={style.container}>
      {loading ? (
        <h1 className={style.loading}>Loading...</h1>
      ) : (
        <div className={style.movie}>
          <img className={style.movieImg} src={movie.medium_cover_image}></img>
          <div className={style.movieInfo}>
            <h2>{movie.title}</h2>
            <h3>{movie.year}</h3>
            <h3>rating {movie.rating}</h3>
            <h3>runtime {movie.runtime}</h3>
            <ul>
              {movie.genres && movie.genres.map((g) => <li key={g}>{g}</li>)}
            </ul>
            <p>{movie.description_intro}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Detail;
