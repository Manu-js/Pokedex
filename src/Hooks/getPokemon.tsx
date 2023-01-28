import { useEffect, useState } from "react";
import PokemonDetail from "../domain/models/PokemonDetail";
import { http } from "../Infrastructure/http";

const getPokemon = (name: string) => {
    const [pokemon, setPokemon] = useState<PokemonDetail>();
    const [isLoading, setLoading] = useState(false);
      
    useEffect(() => {
      setLoading(true);
      const fetchData = async () => {
        const res = await http.get(`https://pokeapi.co/api/v2/pokemon/${name}`) as PokemonDetail;
        setPokemon(res);
        setLoading(false);
      };
      fetchData();
    }, [name]);
  
    return { pokemon, isLoading };
  };

export default getPokemon;
