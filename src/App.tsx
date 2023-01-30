import { http } from "./Infrastructure/http";
import { Button, Grid, Spinner } from "@chakra-ui/react";
import { t } from "i18next";
import PokemonCard from "./components/pokemonCard";
import getPokemonList from "./Hooks/getPokemonList";
import PokemonResult from "./domain/models/pokemonResult";
import i18n from "./config/i18n";

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

  const handleLanguageChange = (languageCode: string) => {
    i18n.changeLanguage(languageCode);
  };

  return (
    <>
      <h1 className="my-custom-button text-3xl font-bold text-center mt-5 mb-7">
        ManuDex
      </h1>
      <div>
        <button onClick={() => handleLanguageChange("es")}>Español</button>
        <button onClick={() => handleLanguageChange("en")}>English</button>
      </div>

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
          <div className="flex item-center justify-center p-5">
            {nextUrl && (
              <Button onClick={handleLoadMore}>
                {t("interface.loadPokemons")}
              </Button>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default PokemonList;
