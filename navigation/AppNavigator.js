import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";

import HomeScreen from "../screens/HomeScreen";
import DetalhesScreen from "../screens/DetalhesScreen";
import LoginScreen from "../screens/LoginScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const verificarLogin = async () => {
      const token = await AsyncStorage.getItem("userToken");
      setIsAuthenticated(!!token);
    };
    verificarLogin();
  }, []);

  if (isAuthenticated === null) return null; // evita piscada inicial

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#1A1A1A" },
          headerTintColor: "#fff",
          headerTitleStyle: { fontWeight: "bold" },
        }}
      >
        {isAuthenticated ? (
          <>
            <Stack.Screen name="Home">
              {(props) => (
                <HomeScreen {...props} setAuth={setIsAuthenticated} />
              )}
            </Stack.Screen>
            <Stack.Screen name="Detalhes" component={DetalhesScreen} />
          </>
        ) : (
          <Stack.Screen name="Login">
            {(props) => <LoginScreen {...props} setAuth={setIsAuthenticated} />}
          </Stack.Screen>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
