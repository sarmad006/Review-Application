import { StyleSheet, Text, View } from 'react-native';
import { Globalstyles } from '../styles/Globalstyles';
import { FlatList, TouchableOpacity } from 'react-native';
import { useState } from 'react';


const Home = ({navigation}) => {
    const [reviews, setReviews] = useState([
        { title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'lorem ipsum', key: '1' },
        { title: 'Gotta Catch Them All (again)', rating: 4, body: 'lorem ipsum', key: '2' },
        { title: 'Not So "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: '3' },
      ]);


   
  return (
    <View style={Globalstyles.container}>
     <FlatList data={reviews} renderItem={({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
          <Text style={Globalstyles.titleText}>{ item.title }</Text>
        </TouchableOpacity>
      )} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
    
});
