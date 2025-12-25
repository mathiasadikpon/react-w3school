async function getAllAnime() {
  let page = 1;
  let allAnime = [];
  let hasNext = true;

  while (hasNext) {
    const res = await fetch(
      `https://api.jikan.moe/v4/anime?page=${page}&limit=25`
    );
    const data = await res.json();

    allAnime.push(...data.data);
    hasNext = data.pagination.has_next_page;
    page++;

    // ⚠️ IMPORTANT: Respect rate limits
    await new Promise((r) => setTimeout(r, 1000));
  }

  return allAnime;
}

getAllAnime().then((anime) => {
  console.log("Total anime:", anime.length);
});
