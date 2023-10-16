import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from'@react-navigation/native';
import Screen1 from './view/Screen1';
import Screen2 from './view/Screen2';

const Stack = createStackNavigator(
  );

function App() {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName='Home'>
    //     <Stack.Screen name='Screen001' component={Screen001}/>
    //   </Stack.Navigator>
    // </NavigationContainer>
    // <Screen1/>
    <Screen2/>
  )
};
export default App;