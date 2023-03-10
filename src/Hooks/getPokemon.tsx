import { useState } from "react";
import { http } from "../Infrastructure/http";
import PokemonDetail from "../domain/models/pokemonDetail";

const getPokemon = (callback: (pokemon: PokemonDetail) => void) => {
  const [pokemon, setPokemon] = useState<PokemonDetail>();
  const [isLoading, setLoading] = useState(false);

  const fetchData = async (name: string) => {
    setLoading(true);
    const res = (await http.get(`pokemon/${name}`)) as PokemonDetail;
    setPokemon(res);
    setLoading(false);
    callback(res);
  };

  return { fetchData, pokemon, isLoading };
};

export default getPokemon;
