import React, {Component} from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';

export default function InfoCard(props){
  return(
    <View style={styles.infoCardContainer}>
      <Text><Text style={styles.titleColor}>"Price:"</Text> {props.price}</Text>     
      <Text><Text style={styles.titleColor}>"Square Feet:"</Text> {props.squareFeet}</Text>
      <Text><Text style={styles.titleColor}>"Number of beds:"</Text> {props.beds}</Text>
      <Text><Text style={styles.titleColor}>"Number of baths:"</Text> {props.baths}</Text>
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
    //flex: 1,
    backgroundColor: "pink",
  },

  titleColor: {
    color: "blue",
  },

  appointmentButtonStyle: {
    marginTop: 5,
  }
});