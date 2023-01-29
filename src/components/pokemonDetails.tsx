import PokemonDetail from "../domain/models/PokemonDetail";
import { ListItem, Text, UnorderedList } from "@chakra-ui/react";
import PokemonSprites from "./pokemonSprites";

interface Props {
  pokemon: PokemonDetail;
}

const PokemonDetails = ({ pokemon }: Props) => {
  return (
    <>
      <Text fontWeight="bold">
        <span className="grid">Weight: {pokemon.weight} Kg</span>
        <span className="grid">Height: {pokemon.height} Cm</span>
        <span className="grid">Types: </span>
        <UnorderedList>
          {pokemon.types.map(({ type }, i) => (
            <ListItem key={i}>{type.name}</ListItem>
          ))}
        </UnorderedList>
      </Text>
      <PokemonSprites pokemon={pokemon} />
    </>
  );
};

export default PokemonDetails;
