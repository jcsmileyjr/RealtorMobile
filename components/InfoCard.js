import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default function InfoCard(props){
  return(
    <View style={styles.infoCardContainer}>
      <Text><Text style={styles.titleColor}>"Price:"</Text> {props.price}</Text>     
      <Text><Text style={styles.titleColor}>"Square Feet:"</Text> {props.squareFeet}</Text>
      <Text><Text style={styles.titleColor}>"Number of beds:"</Text> {props.beds}</Text>
      <Text><Text style={styles.titleColor}>"Number of baths:"</Text> {props.baths}</Text>    
    </View>
  );
}

const styles = StyleSheet.create({
  infoCardContainer:{
    flex: 1,
  },

  titleColor: {
    color: "blue",
  }
});