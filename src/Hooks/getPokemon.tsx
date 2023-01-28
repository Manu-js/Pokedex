import axios from "axios";
import { useEffect, useState } from "react";
import PokemonDetail from "../PokemonDetailData";

const getPokemon = (name: string) => {
    const [pokemon, setPokemon] = useState<PokemonDetail>();
    const [isLoading, setLoading] = useState(false);
  
    useEffect(() => {
      setLoading(true);
      const fetchData = async () => {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
        setPokemon(res.data);
        setLoading(false);
      };
      fetchData();
    }, [name]);
  
    return { pokemon, isLoading };
  };

export default getPokemon;
