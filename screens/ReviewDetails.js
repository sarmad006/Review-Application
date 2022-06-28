import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Globalstyles } from '../styles/Globalstyles';

const ReviewDetails = ({route,navigation}) => {
    const { title} = route.params;
  return (
    <View style={Globalstyles.container}>
      <Text>{JSON.stringify(title)}</Text>
    </View>
  );
};

export default ReviewDetails;

const styles = StyleSheet.create({});
