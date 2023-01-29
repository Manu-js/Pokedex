import axios from "axios";
import PokemonDetail from "./components/pokemonCard";
import { Button, Grid } from "@chakra-ui/react";
import getPokemonList from "./Hooks/getPokemonList";
import { http } from "./Infrastructure/http";
import PokemonResult from "./domain/models/pokemonResult";

const PokemonList = () => {
  const { pokemonList, setPokemonList, nextUrl, setNextUrl } = getPokemonList();

  const handleLoadMore = async () => {
    if (nextUrl) {
      const res = await http.get(nextUrl) as PokemonResult
      setPokemonList([...pokemonList, ...res.results]);
      setNextUrl(res.next);
    }
  }

  return (
    <>
      <h1 className="text-3xl font-bold underline text-center mt-5 mb-5">
        Pokedex
      </h1>
      <Grid
        className="m-4"
        templateColumns={{ base: "repeat(1, 1fr)", sm: "repeat(2, 1fr)", lg:"repeat(4, 1fr)" }}
        gap={3}
      >
        {pokemonList.map((pokemon, i) => (
          <PokemonDetail name={pokemon.name} url={pokemon.url} key={i} />
        ))}
      </Grid>
      <div className="flex item-center justify-center p-5">
        {nextUrl && <Button onClick={handleLoadMore}>Load More</Button>}
      </div>
    </>
  );
};

export default PokemonList;
