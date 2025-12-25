import "bootstrap/dist/css/bootstrap.min.css";

import axios from "axios";

const getAnimePage = async (page = 1) => {
  const res = await axios.get("https://api.jikan.moe/v4/anime", {
    params: {
      page,
      limit: 25, // max allowed
    },
  });

  return res.data; // { data, pagination }
};

// Example usage
getAnimePage(1).then((result) => {
  console.log("Anime list:", result.data);
  console.log("Has next page:", result.pagination.has_next_page);
});

function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <h1>Here is a sample</h1>
      <h1>Here is my luck </h1>
      <h1>Here is my luck </h1>
      <h1>Here is my luck </h1>
    </div>
  );
}

export default App;
