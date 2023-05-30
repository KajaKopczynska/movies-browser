import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./common/Header"
import MoviesList from "./features/movies/MoviesList";
import { MoviePage } from "./features/movies/MoviePage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/movies" />} />
        <Route path="/movies" element={<MoviesList />} />
        <Route path="/movies/:id" element={<MoviePage />} />
      </Routes>
    </>
  );
}

export default App;
