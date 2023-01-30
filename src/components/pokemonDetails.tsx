import PokemonDetail from "../domain/models/pokemonDetail";
import { ListItem, Text, UnorderedList } from "@chakra-ui/react";
import PokemonSprites from "./pokemonSprites";
import { useTranslation } from "react-i18next";

interface Props {
  pokemon: PokemonDetail;
}

const PokemonDetails = ({ pokemon }: Props) => {
  const { t } = useTranslation();

  return (
    <>
      <Text fontWeight="bold">
        <span className="grid">
          {t("pokemon-detail.weight")}: {pokemon.weight} Kg
        </span>
        <span className="grid">
          {t("pokemon-detail.height")}: {pokemon.height} Cm
        </span>
        <span className="grid">{t("pokemon-detail.type")}: </span>
      </Text>
      <UnorderedList>
        {pokemon.types.map(({ type }, i) => (
          <ListItem key={i}>{type.name}</ListItem>
        ))}
      </UnorderedList>
      <PokemonSprites pokemon={pokemon} />
    </>
  );
};

export default PokemonDetails;
