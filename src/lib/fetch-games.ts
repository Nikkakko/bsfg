interface fetchGames {
  search?: string;
  page?: number;
  limit?: number;
}

export async function fetchGames({ search, page = 1, limit = 20 }: fetchGames) {
  const res = await fetch(
    `https://api.remailer.eu/games/list.php?search=${search}&page=${page}&limit=${limit}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) throw new Error("Failed to fetch games");

  const data = await res.json();
  return data.data;
}
