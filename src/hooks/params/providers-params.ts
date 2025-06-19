import { parseAsArrayOf, createLoader, parseAsString } from "nuqs/server";

export const providersParams = {
  providers: parseAsArrayOf(parseAsString).withDefault([]),
};

export const loadProvidersParams = createLoader(providersParams);
