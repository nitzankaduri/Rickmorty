import type { Character, CharacterStatus, MultiverseStats } from '../types/character';

/**
 * Pure utility function to filter characters by name query, status, and favorite flag.
 */
export function filterCharacters(
  characters: Character[],
  query: string,
  status: CharacterStatus,
  favoritesOnly: boolean,
  favorites: number[] = []
): Character[] {
  const normalizedQuery = query.toLowerCase().trim();

  return characters.filter((character) => {
    const matchesName =
      normalizedQuery === '' ||
      character.name.toLowerCase().includes(normalizedQuery);

    const matchesStatus =
      status === 'all' ||
      character.status.toLowerCase() === status.toLowerCase();

    const matchesFavorite = !favoritesOnly || favorites.includes(character.id);

    return matchesName && matchesStatus && matchesFavorite;
  });
}

/**
 * Toggles a character ID in or out of the favorites list.
 */
export function toggleFavoriteId(favorites: number[], id: number): number[] {
  if (favorites.includes(id)) {
    return favorites.filter((favId) => favId !== id);
  }
  return [...favorites, id];
}

/**
 * Computes demographic and survival metrics from the API character dataset.
 */
export function calculateMultiverseStats(
  characters: Character[],
  favoritesCount: number
): MultiverseStats {
  const totalCharacters = characters.length;
  let aliveCount = 0;
  let deadCount = 0;
  let unknownCount = 0;
  const speciesBreakdown: Record<string, number> = {};

  for (const c of characters) {
    if (c.status === 'Alive') {
      aliveCount += 1;
    } else if (c.status === 'Dead') {
      deadCount += 1;
    } else {
      unknownCount += 1;
    }

    speciesBreakdown[c.species] = (speciesBreakdown[c.species] || 0) + 1;
  }

  return {
    totalCharacters,
    aliveCount,
    deadCount,
    unknownCount,
    speciesBreakdown,
    favoritesCount,
  };
}

/**
 * Formats episode count string with proper pluralization.
 */
export function formatEpisodeCount(count: number): string {
  if (count === 1) return '1 Episode';
  return `${count} Episodes`;
}

/**
 * Formats numerical ID into a padded archive dossier code (e.g. 1 -> '#0001').
 */
export function formatCharacterId(id: number): string {
  return `#${id.toString().padStart(4, '0')}`;
}
