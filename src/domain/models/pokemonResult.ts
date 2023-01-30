import Pokemon from "./pokemon";

export default interface PokemonResult {
  results: Pokemon[];
  next: string | null;
}
