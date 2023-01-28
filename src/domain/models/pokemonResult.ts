import Pokemon from "./Pokemon";

export default interface PokemonResult {
    results: Pokemon[];
    next: string | null;
  }