import { SimplePokemon } from '@/pokemons';
import { PayloadAction,createSlice } from "@reduxjs/toolkit";


interface PokemonsState{
    [key: string]: SimplePokemon
}

const getInitialState = () => {
  const favorites = JSON.parse(localStorage.getItem('favorite-pokemon') ?? '{}')
  return favorites
}
const initialState: PokemonsState = getInitialState()

const favoritesSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    toggleFavorite(state, action: PayloadAction<SimplePokemon>) {
      const { id } = action.payload
      if (!!state[id]) {
        delete state[id]
        return
      }
      state[id] = action.payload
    },
  },
});

export const { toggleFavorite} = favoritesSlice.actions

export default favoritesSlice.reducer