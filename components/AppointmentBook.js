import React, {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function AppointmentBook(props){
  return (
    <View>
      <Text>It works</Text>
      <Button
        onPress = {props.openAppointmentBook} 
        title="Finish" />
    </View>
  );
}