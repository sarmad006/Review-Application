import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../screens/Home";
import ReviewDetails from "../screens/ReviewDetails";

const Stack = createStackNavigator()

export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#eee',
          height:60
        },
        headerTintColor: '#444',
    }}
       initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home} 
         options={
             { title: 'GamerZone' ,}
            }
         />
        <Stack.Screen name='ReviewDetails' component={ReviewDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
