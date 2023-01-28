import { useEffect, useState } from "react";
import Pokemon from "../domain/models/Pokemon";
import PokemonResult from "../domain/models/pokemonResult";
import { http } from "../Infrastructure/http";

const getPokemonList = () => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [nextUrl, setNextUrl] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = (await http.get(
        "https://pokeapi.co/api/v2/pokemon"
      )) as PokemonResult;
      setPokemonList(res.results);
      setNextUrl(res.next!);
    };
    fetchData();
  }, []);

  return { pokemonList, setPokemonList, nextUrl, setNextUrl };
};

export default getPokemonList;
