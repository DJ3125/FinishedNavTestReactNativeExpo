import { StyleSheet, Text, View, Button} from 'react-native';

import {StackNavigationProp} from "@react-navigation/stack";
import {RouteProp} from "@react-navigation/native";
import {navTypes} from "./navigationTypes";

type Props = {
  navigation: StackNavigationProp<navTypes, "Title2">, 
  route : RouteProp<navTypes, "Title2">,
}

export default function TitleTwo({navigation, route}: Props){
  return (
    <View>
      <Text>Title Two + {route.params.x}</Text>
      <Button title="GOTO Title 1" onPress={()=>{navigation.navigate("Title1")}}/>
    </View>
  );
}