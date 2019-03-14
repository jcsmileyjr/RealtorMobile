import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from 'react-native';



export default function Appointment(props) {
  return (
    <View style={styles.appointmentContainer}>
      <Text style={styles.inputHeader}>Appointment Book</Text>
      <View style={styles.appointmentBookContainer}>
      {props.appointmentList.map((item, index) => (
        <View style={styles.appointmentDetailSection}>
          <Text style={styles.appointmentDetails}>{item.name}</Text>
          <Text style={styles.appointmentDetails}>{item.email}</Text>
          <Text style={styles.appointmentDetails}>{item.phoneNumber}</Text>
          <Text style={styles.appointmentDetails}>{item.dateTime}</Text>
        </View>
      ))}
      </View>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={props.openMainPage}>
        <View style={styles.appointmentBookButton}>
          <Text style={styles.buttonText}>Return to Home Page</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  appointmentContainer: {
    flex: 1,
    justifyContent: "space-around",
    alignSelf: 'center',
    marginTop: 30,
  },
  appointmentBookContainer: {
    flex: 3,
    justifyContent: 'flex-start',
  },
  appointmentBookButton: {
    width: 200,
    alignItems: 'center',
    backgroundColor: '#006400',
  },
  appointmentDetailSection:{
    marginTop: 10,
    borderBottomSyle: "solid",
    borderBottomWidth: 1,
    borderBottomColor: "lightgrey",
  },
  buttonText: {
    padding: 20,
    color: 'white',
    fontSize: 16,
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 10,
  },
  inputHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'blue',
    marginTop:10,    
  },
  appointmentDetails: {
    color: 'blue',
    //display: "flex",
    //alignItems: 'stretch',
  },
});
