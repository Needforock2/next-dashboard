"use client";
import Image from "next/image";
import { SimplePokemon } from "..";
import Link from "next/link";
import { IoHeart, IoHeartOutline } from "react-icons/io5";
import { useAppSelector, useAppDispatch } from "@/store";
import { toggleFavorite } from "@/store/pokemons/favoritesSlice";



interface Props {
  pokemon: SimplePokemon;
}

export default function PokemonCard({ pokemon }: Props) {
  const {id , name } = pokemon
  const dispatch = useAppDispatch();

  const onToggle = () => {

    dispatch(toggleFavorite(pokemon))
  };

  const favoriteId = useAppSelector(state => state.pokemons[id]);

  return (
    <div className="mx-auto right-0 mt-2 w-60">
      <div className="bg-white rounded overflow-hidden shadow-lg">
        <div className="text-center p-6 bg-gray-800 border-b flex flex-col items-center justify-center">
          <Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
            width={100}
            height={100}
            alt={pokemon.name}
            priority={false}
          />
          <p className="pt-2 text-lg font-semibold text-gray-50">
            {pokemon.name}
          </p>

          <div className="mt-5">
            <Link
              href={`/dashboard/pokemons/${pokemon.name}`}
              className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
            >
              Mas informacion
            </Link>
          </div>
        </div>
        <div className="border-b">
          <div
            onClick={onToggle}
            className="px-4 py-2 hover:bg-gray-100 flex items-center cursor-pointer"
          >
            <div className="text-red-600">
              {favoriteId?.id === pokemon.id ? <IoHeart /> : <IoHeartOutline />}
            </div>
            <div className="pl-3">
              <p className="text-sm font-medium text-gray-800 leading-none">
                {favoriteId?.id === pokemon.id
                  ? "Es Favorito"
                  : "No es favorito"}
              </p>
              <p className="text-xs text-gray-500">View your campaigns</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
