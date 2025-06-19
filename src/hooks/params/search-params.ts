import { parseAsString, createLoader } from "nuqs/server";

// Describe your search params, and reuse this in useQueryStates / createSerializer:
export const searchParams = {
  search: parseAsString.withDefault(""),
};

export const loadSearchParams = createLoader(searchParams);
