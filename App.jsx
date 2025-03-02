
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Button,
  Alert,
} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import ProductDetails from './src/screens/ProductDetails';
const App = () => {
  console.log('App is rendering...'); // Debugging log
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="productdetails" component={ProductDetails}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
