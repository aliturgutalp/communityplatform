import React from "react";
import { Button, View, StyleSheet, Text } from "react-native";
import SectionListContacts from '../components/SectionListContacts';

import Ionicons from "react-native-vector-icons/Ionicons";

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}
// generate a phone number
const generatePhoneNumber = () =>
`${'0(212)'}-${getRndInteger(100, 1000)}-${getRndInteger(1000, 10000)}`;

const contactNames = ['Asiyan Museum', 'Bogazici Universitesi Ogrenci Isleri', 'Library Front Desk', 'North Campus Security', 
'South Campus Security','Hisar Campus Cafeteria', 'Hisar Campus Security', 'Computer Engineering Building'];
const contacts = contactNames.map(function(name) {
    return {name: name, number: generatePhoneNumber()}
});

export default class PhoneNumbersScreen extends React.Component {

  static navigationOptions = ({ navigation }) => {
      return {
        headerTitle: 'Important Phone Numbers',
      };
  };
  
  handleSelectContact = contact => {
    this.props.navigation.push('ContactDetails', contact);
  };

  render() {
    return (
      <View style={styles.container}>
        <SectionListContacts
          contacts={contacts}
          onSelectContact={this.handleSelectContact}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1
  },
  text: {
    textAlign: "center"
  }
});
