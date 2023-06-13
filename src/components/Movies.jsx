/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
function ListOfMovies({ movies }) {
  return (
    <ul>
      {movies.map((movie) => {
        return (
          <li key={movie.id}>
            <h3>{movie.title} </h3>
            <p>{movie.year} </p>
            <img src={movie.poster} alt={movie.title} />
          </li>
        );
      })}
    </ul>
  );
}

function NoMoviesResults() {
  return <p>No se encontraron películas</p>;
}

export default function Movies({ movies }) {
  const hasMovies = movies?.length;

  return hasMovies ? <ListOfMovies movies={movies} /> : <NoMoviesResults />;
}