import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./src/Navigation/Navigation";
import { AuthProvider } from "./src/Context/AuthContext";

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Navigation />
      </AuthProvider>
    </NavigationContainer>
  );
}
