import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import CharacterCard from '../components/CharacterCard';
import type { Character } from '../types/character';

const sampleCharacter: Character = {
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
};

describe('CharacterCard component', () => {
  it('renders character name, status, and species correctly', () => {
    render(<CharacterCard character={sampleCharacter} />);

    expect(screen.getByText('Rick Sanchez')).toBeInTheDocument();
    expect(screen.getByText('Alive')).toBeInTheDocument();
    expect(screen.getByText('Human')).toBeInTheDocument();
  });

  it('triggers onSelect callback when clicking the card', () => {
    const handleSelect = vi.fn();
    render(<CharacterCard character={sampleCharacter} onSelect={handleSelect} />);

    const card = screen.getByRole('button', { name: /view details for Rick Sanchez/i });
    fireEvent.click(card);

    expect(handleSelect).toHaveBeenCalledTimes(1);
    expect(handleSelect).toHaveBeenCalledWith(sampleCharacter);
  });

  it('triggers onToggleFavorite callback when clicking favorite star', () => {
    const handleToggleFavorite = vi.fn();
    render(
      <CharacterCard
        character={sampleCharacter}
        isFavorite={false}
        onToggleFavorite={handleToggleFavorite}
      />
    );

    const favoriteButton = screen.getByRole('button', { name: /add rick sanchez to favorites/i });
    fireEvent.click(favoriteButton);

    expect(handleToggleFavorite).toHaveBeenCalledTimes(1);
    expect(handleToggleFavorite).toHaveBeenCalledWith(1);
  });
});
