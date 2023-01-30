import PokemonDetail from "./components/pokemonCard";
import { Button, Grid, Spinner } from "@chakra-ui/react";
import getPokemonList from "./Hooks/getPokemonList";
import { http } from "./Infrastructure/http";
import PokemonResult from "./domain/models/pokemonResult";

const PokemonList = () => {
  const { pokemonList, setPokemonList, nextUrl, setNextUrl, isLoading } =
    getPokemonList();

  const handleLoadMore = async () => {
    if (nextUrl) {
      const res = (await http.getWithUrl(nextUrl)) as PokemonResult;
      setPokemonList([...pokemonList, ...res.results]);
      setNextUrl(res.next);
    }
  };

  return (
    <>
      <h1 className="my-custom-button text-3xl font-bold text-center mt-5 mb-7">
        Pokedex
      </h1>
      {isLoading ? (
        <div className="flex items-center justify-center h-full">
          <Spinner size="xl" />
        </div>
      ) : (
        <>
          <Grid
            className="m-4"
            templateColumns={{
              base: "repeat(1, 1fr)",
              sm: "repeat(2, 1fr)",
              lg: "repeat(4, 1fr)",
            }}
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
      )}
    </>
  );
};

export default PokemonList;
