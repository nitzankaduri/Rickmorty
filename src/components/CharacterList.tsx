import type { Character } from '../types/character';
import CharacterCard from './CharacterCard';

export interface CharacterListProps {
  characters: Character[];
  onSelectCharacter?: (character: Character) => void;
  favorites?: number[];
  onToggleFavorite?: (id: number) => void;
}

export default function CharacterList({
  characters,
  onSelectCharacter,
  favorites = [],
  onToggleFavorite,
}: CharacterListProps) {
  return (
    <section className="character-grid" aria-label="Character collection">
      {characters.map((character) => (
        <CharacterCard
          key={character.id}
          character={character}
          onSelect={onSelectCharacter}
          isFavorite={favorites.includes(character.id)}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </section>
  );
}

