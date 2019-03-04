import React, {Component} from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

export default function BasicHouse(props) {
  return (
    <ScrollView style={styles.basicHouseContainer}>
      <View style={styles.centerPicture}>
        <Image source={{uri:props.housePicture }}
       style={{width: 300, height: 300, marginRight: 10 }} />
      </View>       
      <Text style={styles.setTheWidth}>{props.address}</Text>
    
    </ScrollView>  
  );
}

const styles = StyleSheet.create({
  basicHouseContainer: {
    flex: 1,
    paddingBottom: 150,
  },
  centerPicture:{
    alignItems: 'center',
    justifyContent: 'center',
  },

  setTheWidth:{
    width:240,
    color: "blue",
    fontSize: 16,
  }
});
