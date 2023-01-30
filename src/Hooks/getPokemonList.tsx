import { useEffect, useState } from "react";
import Pokemon from "../domain/models/pokemon";
import PokemonResult from "../domain/models/pokemonResult";
import { http } from "../Infrastructure/http";

const getPokemonList = () => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [nextUrl, setNextUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      const res = (await http.get(
        "https://pokeapi.co/api/v2/pokemon"
      )) as PokemonResult;

      setPokemonList(res.results);
      setNextUrl(res.next);
      setIsLoading(false)
    };
    fetchData();
  }, []);

  return { pokemonList, setPokemonList, nextUrl, setNextUrl, isLoading };
};

export default getPokemonList;
