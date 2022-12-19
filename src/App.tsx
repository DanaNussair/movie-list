import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import AboutPage from "./pages/About/AboutPage";
import HomePage from "./pages/Home/HomePage";
import MoviePage from "./pages/Movie/MoviePage";
import MoviesPage from "./pages/Movies/MoviesPage";
import { AppError, ErrorProvider } from "./contexts/ErrorContext";
import ErrorToast from "./components/ErrorToast/ErrorToast";

function App() {
  const [error, setError] = useState<AppError | null>(null);

  return (
    <ErrorProvider value={{ error, setError }}>
      <Header />
      <Search />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/movies/:id" element={<MoviePage />} />
      </Routes>
      <ErrorToast />
    </ErrorProvider>
  );
}

export default App;
