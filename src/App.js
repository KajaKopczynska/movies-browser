import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./common/Header"
import MoviesList from "./features/movies/MoviesList";
import { MoviePage } from "./features/movies/MoviePage";
import PeopleList from "./features/people/PeopleList";
import { PersonPage } from "./features/people/PersonPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/movies" />} />
        <Route path="/movies" element={<MoviesList />} />
        <Route path="/movies/:id" element={<MoviePage />} />
        <Route path="/people" element={<PeopleList />} />
        <Route path="/people/:id" element={<PersonPage />} />
      </Routes>
    </>
  );
}

export default App;
