import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

// Lazy load pages
const Home = lazy(() => import("./pages/Home.jsx"));
const AnimeList = lazy(() => import("./pages/AnimeList.jsx"));
const AnimeDetails = lazy(() => import("./pages/AnimeDetails.jsx"));

function App() {
  return (
    <div className="App">
      <Navbar />

      <Suspense fallback={<div className="loading">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/anime" element={<AnimeList />} />
          <Route path="/anime/:id" element={<AnimeDetails />} />
        </Routes>
      </Suspense>

      <Footer />
    </div>
  );
}

export default App;
