import { describe, it, expect } from 'vitest';
import {
  filterCharacters,
  toggleFavoriteId,
  calculateMultiverseStats,
  formatEpisodeCount,
  formatCharacterId,
} from '../utils/filterUtils';
import type { Character } from '../types/character';

const mockCharacters: Character[] = [
  {
    id: 1,
    name: 'Rick Sanchez',
    status: 'Alive',
    species: 'Human',
    type: '',
    gender: 'Male',
    origin: { name: 'Earth (C-137)', url: '' },
    location: { name: 'Citadel of Ricks', url: '' },
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    episode: ['https://rickandmortyapi.com/api/episode/1'],
    url: '',
    created: '',
  },
  {
    id: 2,
    name: 'Morty Smith',
    status: 'Alive',
    species: 'Human',
    type: '',
    gender: 'Male',
    origin: { name: 'Earth (C-137)', url: '' },
    location: { name: 'Citadel of Ricks', url: '' },
    image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
    episode: [
      'https://rickandmortyapi.com/api/episode/1',
      'https://rickandmortyapi.com/api/episode/2',
    ],
    url: '',
    created: '',
  },
  {
    id: 3,
    name: 'Summer Smith',
    status: 'Alive',
    species: 'Human',
    type: '',
    gender: 'Female',
    origin: { name: 'Earth (Replacement Dimension)', url: '' },
    location: { name: 'Earth (Replacement Dimension)', url: '' },
    image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
    episode: ['https://rickandmortyapi.com/api/episode/6'],
    url: '',
    created: '',
  },
  {
    id: 4,
    name: 'Krombopulos Michael',
    status: 'Dead',
    species: 'Alien',
    type: 'Gromflomite',
    gender: 'Male',
    origin: { name: 'Gromflom Prime', url: '' },
    location: { name: 'Gromflom Prime', url: '' },
    image: 'https://rickandmortyapi.com/api/character/avatar/4.jpeg',
    episode: ['https://rickandmortyapi.com/api/episode/13'],
    url: '',
    created: '',
  },
  {
    id: 5,
    name: 'Alien Morty',
    status: 'unknown',
    species: 'Alien',
    type: '',
    gender: 'Male',
    origin: { name: 'unknown', url: '' },
    location: { name: 'Citadel of Ricks', url: '' },
    image: 'https://rickandmortyapi.com/api/character/avatar/5.jpeg',
    episode: ['https://rickandmortyapi.com/api/episode/10'],
    url: '',
    created: '',
  },
];

describe('filterCharacters logic', () => {
  it('filters characters by case-insensitive name match', () => {
    const results = filterCharacters(mockCharacters, 'morty', 'all', false);
    expect(results).toHaveLength(2);
    expect(results.map((c) => c.name)).toEqual(['Morty Smith', 'Alien Morty']);
  });

  it('filters characters by status', () => {
    const aliveCharacters = filterCharacters(mockCharacters, '', 'Alive', false);
    expect(aliveCharacters).toHaveLength(3);

    const deadCharacters = filterCharacters(mockCharacters, '', 'Dead', false);
    expect(deadCharacters).toHaveLength(1);
    expect(deadCharacters[0].name).toBe('Krombopulos Michael');

    const unknownCharacters = filterCharacters(mockCharacters, '', 'unknown', false);
    expect(unknownCharacters).toHaveLength(1);
    expect(unknownCharacters[0].name).toBe('Alien Morty');
  });

  it('filters characters by favorites only', () => {
    const favorites = [1, 4];
    const favoriteResults = filterCharacters(mockCharacters, '', 'all', true, favorites);
    expect(favoriteResults).toHaveLength(2);
    expect(favoriteResults.map((c) => c.id)).toEqual([1, 4]);
  });

  it('combines search query and status filter accurately', () => {
    const results = filterCharacters(mockCharacters, 'smith', 'Alive', false);
    expect(results).toHaveLength(2);
    expect(results.map((c) => c.name)).toEqual(['Morty Smith', 'Summer Smith']);
  });
});

describe('toggleFavoriteId logic', () => {
  it('adds an id when not already in favorites', () => {
    const initial = [1, 2];
    const updated = toggleFavoriteId(initial, 3);
    expect(updated).toEqual([1, 2, 3]);
  });

  it('removes an id when already present in favorites', () => {
    const initial = [1, 2, 3];
    const updated = toggleFavoriteId(initial, 2);
    expect(updated).toEqual([1, 3]);
  });
});

describe('calculateMultiverseStats demographic analysis', () => {
  it('computes accurate counts and distributions from character dataset', () => {
    const stats = calculateMultiverseStats(mockCharacters, 2);
    expect(stats.totalCharacters).toBe(5);
    expect(stats.aliveCount).toBe(3);
    expect(stats.deadCount).toBe(1);
    expect(stats.unknownCount).toBe(1);
    expect(stats.speciesBreakdown).toEqual({
      Human: 3,
      Alien: 2,
    });
    expect(stats.favoritesCount).toBe(2);
  });
});

describe('format utilities', () => {
  it('formats single and multiple episode counts correctly', () => {
    expect(formatEpisodeCount(1)).toBe('1 Episode');
    expect(formatEpisodeCount(15)).toBe('15 Episodes');
  });

  it('formats numerical IDs into standard 4-digit index codes', () => {
    expect(formatCharacterId(1)).toBe('#0001');
    expect(formatCharacterId(42)).toBe('#0042');
    expect(formatCharacterId(128)).toBe('#0128');
  });
});

