interface fetchGames {
  search?: string;
  page?: number;
  per_page?: number;
  providers?: string[];
  category?: string[];
}

export async function fetchGames({
  search,
  page = 1,
  per_page = 10,
  providers,
  category,
}: fetchGames) {
  const res = await fetch(
    `https://api.remailer.eu/games/list.php?search=${search}&page=${page}&limit=${per_page}&provider=${providers}&category=${category}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) throw new Error("Failed to fetch games");

  const data = await res.json();
  return {
    games: data.data,
    pagination: data.pagination,
    filters_applied: data.filters_applied,
  };
}
