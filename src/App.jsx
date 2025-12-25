import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

const Home = lazy(() => import("./pages/Home.jsx"));
const AnimeList = lazy(() => import("./pages/AnimeList.jsx"));
const AnimeDetails = lazy(() => import("./pages/AnimeDetails.jsx"));

function App() {
  return (
    <>
      <Header />
      <Suspense
        fallback={
          <div style={{ textAlign: "center", padding: "2rem" }}>
            Loading page...
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/anime" element={<AnimeList />} />
          <Route path="/anime/:id" element={<AnimeDetails />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
