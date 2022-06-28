import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import AboutNavigator from './About';
import Navigator from './Navigation';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator(){
    return (
        <NavigationContainer>
          <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={Navigator} />
            <Drawer.Screen name="About" component={AboutNavigator} />
          </Drawer.Navigator>
        </NavigationContainer>
      );
}