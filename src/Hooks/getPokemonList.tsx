import { useEffect, useState } from "react";
import { http } from "../Infrastructure/http";
import Pokemon from "../domain/models/pokemon";
import PokemonResult from "../domain/models/pokemonResult";

const getPokemonList = () => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>();
  const [nextUrl, setNextUrl] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = (await http.get("pokemon")) as PokemonResult;
      setPokemonList(res.results);
      setNextUrl(res.next);
    };
    fetchData();
  }, []);

    /*Solicita otros 20 pokemon mas y setea el NextUrl (si hay)*/
    const handleLoadMore = async () => {
      if (nextUrl) {
        const res = (await http.getWithUrl(nextUrl)) as PokemonResult;
        setPokemonList([...pokemonList, ...res.results]);
        setNextUrl(res.next);
      }
    };

  return { pokemonList, nextUrl, handleLoadMore };
};

export default getPokemonList;
