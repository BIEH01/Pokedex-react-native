import { Text } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import React, { useState, useCallback } from "react";
import { getPokemonFavoriteApi } from "../Api/FavoriteApi";
import { getPokemonDetailsApi } from "../Api/pokemon";
import useAuth from "../Hooks/useAuth";
import PokemonList from "../Components/PokemonList";
import NoLogged from "../Components/NoLogged";

export default function FavoriteScreen() {
  const [pokemons, setPokemons] = useState([]);
  const { auth } = useAuth();

  useFocusEffect(
    useCallback(() => {
      if (auth) {
        (async () => {
          const response = await getPokemonFavoriteApi();

          const pokemonsArray = [];
          for await (const id of response) {
            const pokemonDetails = await getPokemonDetailsApi(id);

            pokemonsArray.push({
              id: pokemonDetails.id,
              name: pokemonDetails.name,
              type: pokemonDetails.types[0].type.name,
              order: pokemonDetails.order,
              image:
                pokemonDetails.sprites.other["official-artwork"].front_default,
            });
          }

          setPokemons(pokemonsArray);
        })();
      }
    }, [auth])
  );

  return !auth ? <NoLogged /> : <PokemonList pokemons={pokemons} />;
}
