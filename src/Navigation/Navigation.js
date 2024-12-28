import React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome5";
import FavoriteNavigation from "./FavoriteNavigation";
import PokeDexNavigation from "./PokeDexNavigation";
import AccountScreen from "../Screens/AccountScreen";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator initialRouteName="PokeDex">
      <Tab.Screen
        name="Favorite"
        component={FavoriteNavigation}
        options={{
          headerTitle: "Favoritos",
          tabBarLabel: "Favoritos",
          headerTitleAlign: "center",
          tabBarIcon: ({ color, size }) => (
            <Icon name="heart" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="PokeDex"
        component={PokeDexNavigation}
        options={{
          headerTitle: "",
          tabBarLabel: "PokeDex",
          headerTitleAlign: "center",
          headerShown: false,
          tabBarIcon: () => renderPokeBall(),
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          headerTitle: "Cuenta",
          tabBarLabel: "Cuenta",
          headerTitleAlign: "center",
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function renderPokeBall() {
  return (
    <Image
      source={require("../assets/pokeBall.png")}
      style={{ width: 75, height: 75, top: -25 }}
    />
  );
}
