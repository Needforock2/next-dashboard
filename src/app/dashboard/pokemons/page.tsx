import React from "react";
import { PokemonsResponse, SimplePokemon } from "@/pokemons";
import { PokemonGrid } from '@/pokemons';

  export const metadata = {
    title: "Pokemon Grid",
    description: "Pokemon grid",
};
  
const getPokemons = async (
  limit = 20,
  offset = 0
): Promise<SimplePokemon[]> => {
  const data: PokemonsResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  ).then((res) => res.json());
  const pokemons = data.results.map((pokemon) => ({
    id: pokemon.url.split("/").at(-2)!,
    name: pokemon.name,
  }));

  return pokemons;

 
};

export default async function Pokemons() {
  const pokemons = await getPokemons(151);
  return <PokemonGrid pokemons={pokemons} />;
}
