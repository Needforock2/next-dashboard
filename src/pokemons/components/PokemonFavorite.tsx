"use client";
import { PokemonGrid } from "..";
import { useAppSelector } from "@/store";
import React from "react";
import { IoHeartOutline } from "react-icons/io5";

export const PokemonFavorite = () => {
  const pokemons = useAppSelector((state) => Object.values(state.pokemons));

  return (
    <>
      {pokemons.length === 0 ? (
        <NoFavorite />
      ) : (
        <PokemonGrid pokemons={pokemons} />
      )}
    </>
  );
};

export const NoFavorite = () => {
  return (
    <div className="flex justify-center items-center h-[50vh] flex-col">
      <IoHeartOutline size={100} className="text-red-500" />
      <span>No hay Favoritos</span>
    </div>
  );
};
