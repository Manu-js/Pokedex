import { Grid, Text, Image } from "@chakra-ui/react";
import PokemonDetail from "../domain/models/PokemonDetail";


interface Props {
  pokemon: PokemonDetail;
}

const PokemonSprites = ({ pokemon }: Props) => {
  return (
    <Grid templateColumns="repeat(2, 1fr)">
      <span>
        <Text textAlign="center">Normal</Text>
        <Image
          className="w-full h-full object-cover"
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
        />
      </span>
      <span>
        <Text textAlign="center">Shiny</Text>
        <Image
          className="w-full h-full object-cover"
          src={pokemon.sprites.front_shiny}
          alt={pokemon.name}
        />
      </span>
    </Grid>
  );
};

export default PokemonSprites;
