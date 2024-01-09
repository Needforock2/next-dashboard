import React from "react";
import { SimplePokemon } from "..";
import Image from "next/image";
import PokemonCard from "./PokemonCard";

interface Props {
  pokemons: SimplePokemon[];
}
export const PokemonGrid = ({ pokemons }: Props) => {
  return (
    <div className="flex flex-wrap items-center justify-center">
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
};


