function Movie({ coverImg, title, summary, genres }) {
  return (
    <div>
      <img src={function Movie({ coverImg, title, summary, genres }) {
}></img>
      <h2>{title}</h2>
      <p>{summary}</p>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

export default Movie;