import { fetchAnimePage } from "./fetchAnimePage";
import { createResource } from "./createResource";

export const animeResource = createResource(fetchAnimePage(1));
