/**
 * TypeScript definitions for Rick and Morty Explorer.
 * All types and interfaces are strictly typed without using 'any'.
 */

export type CharacterStatus = 'all' | 'Alive' | 'Dead' | 'unknown';

export interface LocationReference {
  name: string;
  url: string;
}

export interface Character {
  id: number;
  name: string;
  status: 'Alive' | 'Dead' | 'unknown';
  species: string;
  type: string;
  gender: string;
  origin: LocationReference;
  location: LocationReference;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface ApiResponseInfo {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}

export interface CharactersApiResponse {
  info: ApiResponseInfo;
  results: Character[];
}

export interface CharacterFilters {
  searchQuery: string;
  status: CharacterStatus;
  favoritesOnly: boolean;
}

export interface MultiverseStats {
  totalCharacters: number;
  aliveCount: number;
  deadCount: number;
  unknownCount: number;
  speciesBreakdown: Record<string, number>;
  favoritesCount: number;
}
