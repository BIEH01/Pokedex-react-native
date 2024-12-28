import { Text, View } from "react-native";
import React from "react";
import LoginForm from "../Components/Auth/LoginForm";
import UserData from "../Components/Auth/UserData";
import useAuth from "../Hooks/useAuth";

export default function AccountScreen() {
  const { auth } = useAuth();

  return <View>{auth ? <UserData /> : <LoginForm />}</View>;
}
