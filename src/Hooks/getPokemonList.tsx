import { useEffect, useState } from "react";
import { http } from "../Infrastructure/http";
import Pokemon from "../domain/models/pokemon";
import PokemonResult from "../domain/models/pokemonResult";

const getPokemonList = () => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [nextUrl, setNextUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const res = (await http.get("pokemon")) as PokemonResult;
      setPokemonList(res.results);
      setNextUrl(res.next);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return { pokemonList, setPokemonList, nextUrl, setNextUrl, isLoading };
};

export default getPokemonList;
