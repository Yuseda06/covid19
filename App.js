import * as React from "react";
import { Button, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screens/HomeScreen";
import CovidScreen from "./src/screens/CovidScreen";
import { TailwindProvider } from 'tailwindcss-react-native';


const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Covid" component={CovidScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <TailwindProvider>
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
      </TailwindProvider>
  );
}
