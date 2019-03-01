import React, {Component} from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

export default function BasicHouse(props) {
  return (
    <ScrollView style={styles.basicHouseContainer}>
      <View style={styles.centerPicture}>
        <Image source={{uri:props.housePicture }}
       style={{width: 250, height: 300, marginRight: 10 }} />
      </View>       
      <Text style={styles.setTheWidth}>{props.address}</Text>
    
    </ScrollView>  
  );
}

const styles = StyleSheet.create({
  basicHouseContainer: {
    //flex: 1,
  },
  centerPicture:{
    alignItems: 'center',
    justifyContent: 'center',
  },

  setTheWidth:{
    width:240,
    color: "blue",
  }
});
