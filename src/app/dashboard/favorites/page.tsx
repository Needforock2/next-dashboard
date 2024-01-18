import { PokemonFavorite } from "@/pokemons/components/PokemonFavorite";

export const metadata = {
  title: "Favoritos",
  description: "Pokemon grid",
};

export default function Pokemons() {
  return (
    <div className=" flex flex-col">
      <span className="text-5xl my-2">Pokemons favoritos- Global state</span>
      <PokemonFavorite />
    </div>
  );
}
