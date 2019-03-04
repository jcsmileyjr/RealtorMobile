import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';

export default function InfoCard(props){
  return(
    <View style={styles.infoCardContainer}>   
      <View style={styles.details}>
        <Text style={styles.titleColor}>"Price:"</Text>
        <Text style={styles.textOnRightSide}> {props.price}</Text>
      </View>
      <View style={styles.details}>
        <Text style={styles.titleColor}>"Square Feet:"</Text>
        <Text style={styles.textOnRightSide}> {props.squareFeet}</Text>
      </View>
      <View style={styles.details}>
        <Text style={styles.titleColor}>"Number of beds:"</Text>
        <Text style={styles.textOnRightSide}> {props.beds}</Text>
      </View>
      <View style={styles.details}>
        <Text style={styles.titleColor}>"Number of baths:"</Text>
        <Text style={styles.textOnRightSide}> {props.baths}</Text>
      </View>
      <TouchableOpacity style={styles.buttonContainer} onPress = {props.openAppointmentBook}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Set an Appointment</Text>    
        </View>
      </TouchableOpacity>  
    </View>
  );
}

const styles = StyleSheet.create({
  infoCardContainer:{
    flex: 1,
    alignSelf: "stretch",
    //marginTop: 20,
  },
  titleColor: {
    color: "blue",
    textAlign: "left",
    fontSize: 16,
  },
  details:{
    flexDirection: "row",

  },
  textOnRightSide:{
    flex: 1,
    alignSelf:"stretch",
    textAlign:"right",
    fontSize: 18,
  },
  button: {
    width: 200,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  buttonText: {
    padding: 20,
    color: 'white',
    fontSize: 16,
  },
  buttonContainer:{
    alignItems: "center",
    marginTop: 10,
  }
});