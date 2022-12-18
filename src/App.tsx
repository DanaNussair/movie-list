import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Search from "./components/Search";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import MoviePage from "./pages/MoviePage";
import MoviesPage from "./pages/MoviesPage";
import { AppError, ErrorProvider } from "./contexts/ErrorContext";
import ErrorToast from "./components/ErrorToast";

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
