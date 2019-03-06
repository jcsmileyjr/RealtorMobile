import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Appointment(props) {
  return (
    <View style={styles.appointmentContainer}>
             
      <Text >Hello World</Text>
    
    </View>  
  );
}

const styles = StyleSheet.create({
  appointmentContainer: {
    flex: 1,
    paddingBottom: 150,
  }
});
