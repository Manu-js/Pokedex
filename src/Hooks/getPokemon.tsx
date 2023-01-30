import { useState } from "react";
import PokemonDetail from "../domain/models/pokemonDetail";
import { http } from "../Infrastructure/http";

const getPokemon = (callback: (pokemon: PokemonDetail) => void) => {
  const [pokemon, setPokemon] = useState<PokemonDetail>();
  const [isLoading, setLoading] = useState(false);

  const fetchData = async (name: string) => {
    setLoading(true);
    const res = (await http.get(
      `https://pokeapi.co/api/v2/pokemon/${name}`
    )) as PokemonDetail;
    setPokemon(res);
    setLoading(false);
    callback(res);
    setLoading(false);
  };

  return { fetchData, pokemon, isLoading };
};

export default getPokemon;
