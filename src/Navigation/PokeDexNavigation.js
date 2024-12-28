import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PokeDexScreen from "../Screens/PokeDexScreen";
import PokemonScreen from "../Screens/PokemonScreen";

const Stack = createNativeStackNavigator();

export default function PokeDexNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="PokeDex"
        component={PokeDexScreen}
        options={{
          title: "",
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="Pokemon"
        component={PokemonScreen}
        options={{
          title: "",
          headerTransparent: true,
          headerShown: true,
        }}
      />
    </Stack.Navigator>
  );
}
