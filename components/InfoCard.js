import React, {Component} from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';

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
      <View style={styles.appointmentButtonStyle}>
        <Button
          onPress = {props.openAppointmentBook}
          title="Set an Appointment"/>    
      </View>  
    </View>
  );
}

const styles = StyleSheet.create({
  infoCardContainer:{
    flex: 1,
    alignSelf: "stretch",
    marginTop: 20,
  },
  titleColor: {
    color: "blue",
    textAlign: "left",
    fontSize: 16,
  },
  appointmentButtonStyle: {
    marginTop: 5,
  },
  details:{
    flexDirection: "row",

  },
  textOnRightSide:{
    flex: 1,
    alignSelf:"stretch",
    textAlign:"right",
        fontSize: 18,
  }
});