import * as React from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';

import BasicHouse from './components/house'
import InfoCard from './components/InfoCard'
import AppointmentBook from './components/AppointmentBook'

const homes = [['https://tse3.mm.bing.net/th?id=OIP.rsF_ZLLGR1-jwSZ88eiZwwHaFC&pid=15.1&P=0&w=197&h=134',
"1515 Polar Bear Drive Fantastic City, Best State", "$250,000","2000","3","3"],
['https://tse3.mm.bing.net/th?id=OIP.aczKrtHDY8J0QaZxvX44PAHaHa&pid=15.1&P=0&w=300&h=300',
"230 Crazy People Drive Fantastic City, Best State", "$185,000","1100","1","3"],
['https://tse3.mm.bing.net/th?id=OIP.EXXPlv8IOIbQhWd-jYAfNwAAAA&pid=15.1&P=0&w=186&h=160',
"100 Luxury Lane Fantastic City, Best State", "$385,000","2500","8","4"]
];

export default class App extends React.Component {
  constructor(props){
    super();
    this.state = {houses:homes, hideAppointmentBook: true}
  }

  showAppointmentBook = () => {
    this.setState(previousState => (
        { hideAppointmentBook: !previousState.hideAppointmentBook }
      ))

    console.log("Appointment book is " + this.state.hideAppointmentBook);
  }
  
  render() {
    if(this.state.hideAppointmentBook) {
    return (
      <ScrollView style={styles.houseListing} horizontal> 
        {
        this.state.houses.map((listing, index) => (
          <View key={index} style={styles.container}>          
            <BasicHouse         
              housePicture={listing[0]}
              address={listing[1]} />
       
            <InfoCard
              openAppointmentBook = {this.showAppointmentBook}
              price={listing[2]}
              squareFeet={listing[3]}
              beds={listing[4]} 
              baths={listing[5]} />
          </View>
          ))
        }      
      </ScrollView> 
    );
    }
    else {
      return(
        <AppointmentBook 
          openAppointmentBook = {this.showAppointmentBook} />
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F5F5',
    marginRight: 10,    
  },

  houseListing: {
    flex:1,
    flexDirection: "row",
    marginTop: 30,
    marginLeft: 10,
    marginRight: 10,
    
  }
});
