import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading';

import DrawerNavigator from './routes/Drawer';

const getFonts = () => Font.loadAsync({
  'Nunito-Regular':require('./assets/Fonts/Nunito-Regular.ttf'),
  'Nunito-Bold': require('./assets/Fonts/Nunito-Bold.ttf')
});

export default function App() {
  
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if(fontsLoaded){
    return (
      <DrawerNavigator/>
    );
  } else {
    return (
    <AppLoading
     startAsync={getFonts}
     onFinish={()=> setFontsLoaded(true)} 
     onError={() => console.log('error')}
    />
 

 
  );
    }
}

const styles = StyleSheet.create({
 
});
