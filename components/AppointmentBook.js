import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';



export default function AppointmentBook(props){
  return (
    <View style= {styles.appointmentContainer}>
      <Text style = {styles.appointmentHeader}>Schedule an Appointment</Text>
      <View style={styles.inputBoxContainer}>
        <Text style={styles.inputHeader}>Full Name</Text>
        <TextInput 
          style={styles.inputStyle} 
          onChangeText = {props.openAppointmentBook} 
          />
      </View>
      <View style={styles.inputBoxContainer}>
        <Text style={styles.inputHeader}>Email</Text>
        <TextInput 
          style={styles.inputStyle}
          onChangeText = {props.openAppointmentBook} 
          />
      </View>
      <View style={styles.inputBoxContainer}>
        <Text style={styles.inputHeader}>Phone Number</Text>
        <TextInput 
          style={styles.inputStyle}  
          onChangeText = {props.openAppointmentBook} 
          />
      </View>
      <View style={styles.inputBoxContainer}>
        <Text style={styles.inputHeader}>Date and Time</Text>
        <TextInput 
          style={styles.inputStyle} 
          onChangeText = {props.openAppointmentBook} 
          />
      </View>                  
      <TouchableOpacity style={styles.buttonContainer} onPress = {props.openAppointmentBook}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Finish</Text>    
        </View>
      </TouchableOpacity>        
    </View>
  );
}

const styles = StyleSheet.create({
  appointmentContainer: {
    flex: 1,
    justifyContent: "space-around",
    alignSelf: "center",
    marginTop: 30,
  },
  inputBoxContainer:{
    //flex: 1,
    //alignItems: "stretch",
    border: 10,
    borderBottomColor: "black",
    borderBottomStyle: "solid",
    borderBottomWidth: 1,
  },
  inputStyle:{
    fontSize: 16,
  },
  inputHeader:{
    fontSize: 16,
    color: "blue"
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
  },
  appointmentHeader:{
    fontSize: 20,
    fontWeight: "bold",
    color: "blue",
  }

})