import { parseAsArrayOf, createLoader, parseAsString } from "nuqs/server";

export const collectionsParams = {
  collections: parseAsArrayOf(parseAsString).withDefault([]),
};

export const loadCollectionsParams = createLoader(collectionsParams);
