import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';

import Appointment from './Appointment';

//global variable to hold the list of appointments. Mainly used in the updateAppointmentBook()
let officialAppointmentBook= [];

//Component that allow the user to create an appointment to view a house
export default class AppointmentBook extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      fullname:"",
      email: "",
      phoneNumber: "",
      dateTime:"",
      appointments: [],
      hideAppointments: true,       //if false, navigate user to Appointments
      }//end of this.state object
  }//end of constructor

  //method to navigate the user from the Appointment book to the Appointments Page
  showAppointments = () => {
    this.setState(previousState => (
        { hideAppointments: !previousState.hideAppointments }
      ))
  }
  
  //method sent to the Appoinment conmponent to navigate the user back to the home page
  showMainPage = () =>{
    this.showAppointments(); //reset the navigateion on the page
    this.props.openMainPage(); //method from App.js help re-navigate user to the main page
  }

  //method to update the state with the user entered fullname string from a textInput element
  updateFullName = (name) =>{
    this.setState(previousState => (
        { fullname: name }
      ))     
  }

  //method to update the state with the user entered email string from a textInput element
  updateEmail = (email) =>{
    this.setState(previousState => (
        { email: email }
      ))     
  }

  //method to update the state with the user entered phonenumber string from a textInput element
  updatePhoneNumber = (phone) =>{
    this.setState(previousState => (
        { phoneNumber: phone }
      ))     
  }

  //method to update the state with the user entered date and time string from a textInput element
  updateDateTime = (dt) =>{
    this.setState(previousState => (
        { dateTime: dt }
      ))     
  }

  //method call in the Finish button to update the officialAppointmentBook by creating a appointment object and injecting it into array
  updateAppointmentBook = () =>{
    //create an appointment ojbect
    let appointment = { name:this.state.fullname, 
                        email: this.state.email, 
                        phoneNumber: this.state.phoneNumber, 
                        dateTime: this.state.dateTime}

    //push the new appointment object into the global array
    officialAppointmentBook.push(appointment); 

    this.setState(previousState => (
        { appointments: officialAppointmentBook }
      ))     

    //navigate the user to the main page
    //this.props.openAppointmentBook();

    this.showAppointments();
  }
                

  render(){
    if(this.state.hideAppointments == true){
      return (
        <ScrollView style={styles.appointmentContainer}>
          <Text style={styles.appointmentHeader}>Schedule an Appointment</Text>
          <View style={styles.inputBoxContainer}>
            <Text style={styles.inputHeader}>Full Name</Text>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(text) => {this.updateFullName(text)}}
            />          
          </View>
          <View style={styles.inputBoxContainer}>
            <Text style={styles.inputHeader}>Email</Text>
            <TextInput
              style={styles.inputStyle}
            onChangeText={(text) => {this.updateEmail(text)}}
            />
          </View>
          <View style={styles.inputBoxContainer}>
            <Text style={styles.inputHeader}>Phone Number</Text>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(text) => {this.updatePhoneNumber(text)}}
            />
          </View>
          <View style={styles.inputBoxContainer}>
            <Text style={styles.inputHeader}>Date and Time</Text>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(text) => {this.updateDateTime(text)}}
            />
          </View>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={this.updateAppointmentBook}>
            <View style={styles.finishButton}>
              <Text style={styles.buttonText}>Finish</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      );//end of return
    }
    else {
      return(
        <Appointment
          appointmentList = {this.state.appointments} 
          openMainPage = {this.showMainPage} />
      )      
    }  

  }//end of render statement
}//end of the component


const styles = StyleSheet.create({
  appointmentContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignContent:"space-around",
    alignSelf: 'center',
    marginTop: 30,
  },
  inputBoxContainer: {
    border: 10,
    borderBottomColor: 'black',
    borderBottomStyle: 'solid',
    borderBottomWidth: 1,
    marginTop:15,
  },
  inputStyle: {
    fontSize: 16,
  },
  inputHeader: {
    fontSize: 16,
    color: 'blue',
  },
  finishButton: {
    width: 200,
    alignItems: 'center',
    backgroundColor: '#2196F3',
  },
  buttonText: {
    padding: 20,
    color: 'white',
    fontSize: 16,
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 15,
  },
  appointmentHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'blue',
    marginTop:10,
  },
});
