interface fetchGames {
  search?: string;
  page?: number;
  limit?: number;
  providers?: string[];
  category?: string[];
}

export async function fetchGames({
  search,
  page = 1,
  limit = 20,
  providers,
  category,
}: fetchGames) {
  const res = await fetch(
    `https://api.remailer.eu/games/list.php?search=${search}&page=${page}&limit=${limit}&provider=${providers}&category=${category}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) throw new Error("Failed to fetch games");

  const data = await res.json();
  return data.data;
}
