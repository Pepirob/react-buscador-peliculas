import "./App.css";
import Movies from "./components/movies";
import { useMovies } from "./hooks/useMovies";
import { useSearch } from "./hooks/useSearch";

function App() {
  const { movies } = useMovies();
  const { search, setSearch, error } = useSearch();

  const handleSubmit = (event) => {
    event.preventDefault();
    //para acceder a un valor de un input concreto utilizando javascript
    // const fields = new window.FormData(event.target);
    // const query = fields.get("query");
    // console.log(query);
    // const { query, otro } = Object.fromEntries(
    //   new window.FormData(event.target)
    // );
    // console.log(query, otro);
    console.log({ search });
  };

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div className="page">
      <header>
        <h1>Buscador de películas</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input
            name="query"
            onChange={handleChange}
            value={search}
            placeholder="Avengers, Star Wars, Matrix"
          />
          <button type="submit">Buscar</button>
        </form>
        {error && (
          <p className="error" style={{ color: "red" }}>
            {error}
          </p>
        )}
      </header>

      <main>
        <Movies movies={movies} />
      </main>
    </div>
  );
}

export default App;
