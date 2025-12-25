export default function AnimeList({ resource }) {
  const result = resource.read();

  return (
    <ul>
      {result.data.map((anime) => (
        <li key={anime.mal_id}>{anime.title}</li>
      ))}
    </ul>
  );
}
