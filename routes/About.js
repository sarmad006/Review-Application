import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import About from "../screens/About";

const Stack = createStackNavigator()

export default function AboutNavigator() {
  return (
    <NavigationContainer >
      <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#eee',
          height:60
        },
        headerTintColor: '#444',
    }}
      >
        <Stack.Screen name='About' component={About} 
         options={
             { title: 'About GameZone' ,}
            }
         />
     
      </Stack.Navigator>
    </NavigationContainer>
  );
}
