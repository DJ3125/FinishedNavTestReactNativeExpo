import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";

import {navTypes} from "./navigationTypes";
import TitleOne from "./TitleOne";
import TitleTwo from "./TitleTwo";

const Stack = createStackNavigator<navTypes>();

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Open up App.tsx to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Title1">
        <Stack.Screen 
          name="Title1" 
          component={TitleOne}
          options={{headerShown: false}}/>
        <Stack.Screen 
          name="Title2" 
          component={TitleTwo}
          options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
