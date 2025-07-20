import PokemonTitle from './PokemonTitle.jsx';
import TypeBadge from './TypeBadge.jsx';
import Text from '../atoms/Text.jsx';

export default function PokemonInfo({ pokemon }) {
  return (
    <div>
      <PokemonTitle pokemon={pokemon} size={'large'} color={'black'} />
      <Text className={'text-gray text-xxl font-bold'}>
        Generation {pokemon.generation}
      </Text>
      <ul>
        {pokemon.types.map((type, index) => (
          <li key={index}>
            <TypeBadge
              className={`badge ${type}`}
              type={type}
              onlyIcon
              size={24}
              rounded={'large'}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
