import { parseAsArrayOf, createLoader, parseAsString } from "nuqs/server";

export const categoriesParams = {
  category: parseAsArrayOf(parseAsString).withDefault([]),
};

export const loadCategoriesParams = createLoader(categoriesParams);
