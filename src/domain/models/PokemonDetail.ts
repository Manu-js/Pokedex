export default interface PokemonDetail {
  name: string;
  id: number;
  weight: number;
  height: number;
  sprites: {
    front_default: string;
    front_shiny: string;
  };
  types: Array<{ type: { name: string } }>;
}
