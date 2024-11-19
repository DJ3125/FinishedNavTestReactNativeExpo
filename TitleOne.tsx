import { StyleSheet, Text, View, Button} from 'react-native';

import {StackNavigationProp} from "@react-navigation/stack";
import {RouteProp} from "@react-navigation/native";
import {navTypes} from "./navigationTypes";

type Props = {
  navigation: StackNavigationProp<navTypes, "Title1">, 
  route: RouteProp<navTypes, "Title1">,
}

export default function TitleOne({navigation, route}: Props){
  return (
    <View>
      <Text>Title One</Text>
      <Button title="GOTO Title 2" onPress={()=>{navigation.navigate("Title2", {x : 45})}}/>
    </View>
  );
}