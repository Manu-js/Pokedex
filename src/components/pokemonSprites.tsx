import { Grid, Text, Image } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import PokemonDetail from "../domain/models/pokemonDetail";

interface Props {
  pokemon: PokemonDetail;
}

const PokemonSprites = ({ pokemon }: Props) => {
  const { t } = useTranslation();

  return (
    <Grid templateColumns="repeat(2, 1fr)">
      <span>
        <Text textAlign="center">{t("pokemon-detail.sprite.normal")}</Text>
        <Image
          className="w-full h-full object-cover"
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
        />
      </span>
      <span>
        <Text textAlign="center">{t("pokemon-detail.sprite.shiny")}</Text>
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
