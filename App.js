import * as React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View ,Image,TouchableOpacity, Pressable } from 'react-native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Screen1 from "./view/Screen1";
import Screen2 from "./view/Screen2";



function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Screen1" component={Screen1} options={{ headerShown: false }}/>
        <Stack.Screen name="Screen2" component={Screen2} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
};
export default App;