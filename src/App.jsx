import { Suspense, lazy } from "react";
import { animeResource } from "./api/animeResource";

const AnimeList = lazy(() => import("./components/AnimeList"));

function App() {
  return (
    <Suspense fallback={<h2>Loading anime...</h2>}>
      <AnimeList resource={animeResource} />
    </Suspense>
  );
}

export default App;
