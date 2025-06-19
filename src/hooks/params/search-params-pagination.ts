import {
  createLoader,
  createSearchParamsCache,
  createSerializer,
  parseAsInteger,
} from "nuqs/server";

export const paginationParams = {
  page: parseAsInteger.withDefault(1),
  per_page: parseAsInteger.withDefault(20),
};

export const paginationParamsCache = createSearchParamsCache(paginationParams);
export const loadPaginationParams = createLoader(paginationParams);

export const serialize = createSerializer(paginationParams);
