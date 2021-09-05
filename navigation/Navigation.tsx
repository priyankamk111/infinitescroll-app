import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Home from "../screens/Home";
import UserDetails from "../screens/UserDetails";

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="home"
          component={Home}
          options={{ title: "Home" }}
        />
        <Stack.Screen
          name="userDetail"
          component={UserDetails}
          options={{ title: "User Details" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;