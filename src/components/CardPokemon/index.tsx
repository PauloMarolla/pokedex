import { Container } from './styles';

interface CardPokemonProps {
  name: string;
  url: string;
}

export function CardPokemon({ name, url }: CardPokemonProps) {
  const id = url
    .replace('https://pokeapi.co/api/v2/pokemon', '')
    .replace(/\/((?:\d+?))\//g, '$1');

  return (
    <li>
      <Container to={`/pokemon/${id}`}>
        <img
        className='pokeball'
          src="/images/pokemon/pokeball.svg"
          alt="pokeball"
        />
        <img
        className='pokemon'
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
          alt={`Pokemon ${name}`}
        />

        <span>{name}</span>
      </Container>
    </li>
  );
}
