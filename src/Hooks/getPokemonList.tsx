import { useEffect, useState } from "react";
import axios from "axios";
import Pokemon from "../Pokemon";

const getPokemonList = () => {
    const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
    const [nextUrl, setNextUrl] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("https://pokeapi.co/api/v2/pokemon");
      setPokemonList(res.data.results);
      setNextUrl(res.data.next);
    };
    fetchData();
  }, []);

  return { pokemonList, setPokemonList, nextUrl, setNextUrl };
};

export default getPokemonList;
