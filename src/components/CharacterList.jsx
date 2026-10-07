import CharacterCard from './CharacterCard';

export default function CharacterList({
  characters,
  onSelectCharacter,
  favorites = [],
  onToggleFavorite
}) {
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
