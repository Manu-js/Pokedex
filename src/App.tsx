import { http } from "./Infrastructure/http";
import { Button, Grid, Spinner } from "@chakra-ui/react";
import PokemonCard from "./components/pokemonCard";
import getPokemonList from "./Hooks/getPokemonList";
import PokemonResult from "./domain/models/pokemonResult";
import i18n from "./config/i18n";
import { useEffect, useRef } from "react";
import LanguageSelector from "./components/languageSwitcher";

const PokemonList = () => {
  /*Solicita los primeros 20 pokemon*/
  const { pokemonList, setPokemonList, nextUrl, setNextUrl, isLoading } =
    getPokemonList();

  /*solicita otros 20 pokemon mas y setea el NextUrl (si hay)*/
  const handleLoadMore = async () => {
    if (nextUrl) {
      const res = (await http.getWithUrl(nextUrl)) as PokemonResult;
      setPokemonList([...pokemonList, ...res.results]);
      setNextUrl(res.next);
    }
  };

  /*Aquí tenemos el scroll infinito, una referencia a un DIV que es el que va a provocar que se vuelva pedir más Pokemons*/
  const loadMoreRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && nextUrl) {
          handleLoadMore();
        }
      },
      { threshold: [1.0] } //Indica que llamará a handleLoadMore cuando esté completamente dentro del viewport (es)
    );

    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
    }

    return () => observer.disconnect();
  }, [handleLoadMore, nextUrl, loadMoreRef]);

  return (
    <>
      <h1 className="my-custom-button text-3xl font-bold text-center mt-5 mb-7">
        ManuDex
      </h1>
      <LanguageSelector />

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
              <PokemonCard name={pokemon.name} url={pokemon.url} key={i} />
            ))}
          </Grid>
          <div ref={loadMoreRef}>
            {nextUrl && isLoading ? <Spinner size="xl" /> : null}
          </div>
        </>
      )}
    </>
  );
};

export default PokemonList;
