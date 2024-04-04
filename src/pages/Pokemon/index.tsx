import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { MdArrowBack } from 'react-icons/md';

import { usePokemon } from '../../hooks/usePokemon';
import { Loading } from '../../components/Loading/index';
import { CardInformation } from '../../components/CardInformation/index';

import { FullHeight, GlobalContainer } from '../../styles/global';
import { Content, ImageAndType, Informations, StyledLink } from './styles';

export function Pokemon() {
  const { isLoading, showPokemon, selectedPokemon } = usePokemon();
  const { id } = useParams();

  //ativa a função que faz a busca na PokeApi com o parâmetro ID (ID ou nome do pokemon)
  useEffect(() => {
    if(id) {
      showPokemon(id);
    }
  }, [showPokemon, id]);

  if (isLoading) return <Loading />;

  return (
    <FullHeight>
      <GlobalContainer>
        <StyledLink to="/">
          <MdArrowBack />
          Return
        </StyledLink>

        <Content>
          <h1>{selectedPokemon?.name}</h1>
          <Informations>
            <div className='containerCardInformation'>
              <CardInformation label="Height" value={selectedPokemon?.height} />
              <CardInformation label="Weight" value={selectedPokemon?.weight} />
            </div>

            <h4>Abilities</h4>

            <ul className='abilities'>
              {selectedPokemon?.abilities.map(({ ability }) => {
                return (
                  <li key={ability.name}>
                    {ability.name.replace('-', ' ')}
                  </li>
                );
              })}
            </ul>
          </Informations>

          <ImageAndType>
            <img
              src={
                selectedPokemon?.sprites.other['official-artwork']
                  .front_default ??
                selectedPokemon?.sprites.other.dream_world.front_default
              }
              alt={`Pokemon ${selectedPokemon?.name}`}
            />

            <ul className='types'>
              {selectedPokemon?.types.map(({ type }) => {
                return (
                  <li key={type.name}>
                    <img
                      src={`/images/pokemon/types/${type.name}.png`}
                      alt={type.name}
                    />
                    {type.name}
                  </li>
                );
              })}
            </ul>
          </ImageAndType>
        </Content>
      </GlobalContainer>
    </FullHeight>
  );
}
