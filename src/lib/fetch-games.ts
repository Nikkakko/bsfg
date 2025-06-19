export async function fetchGames() {
  const res = await fetch("https://api.remailer.eu/games/list.php", {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Failed to fetch games");

  const data = await res.json();
  return data.data;
}
