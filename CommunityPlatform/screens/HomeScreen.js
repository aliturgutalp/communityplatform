import React from 'react';
import { StyleSheet, Text, View, ScrollView, Button, Dimensions,FlatList, TouchableOpacity } from 'react-native';
import FontAwesome from "react-native-vector-icons/FontAwesome";

const menuItems = [
  {
    name: '1',
    title: 'My Groups',
    key: '1',
    icon: 'group',
    route: 'GroupsScreen'
  },
  {
    name: '2',
    title: 'Recent Announcements',
    key: '2',
    icon: 'info-circle'
  },
  {
    name: '3',
    title: 'Important Phone Numbers',
    key: '3',
    icon: 'phone',
    route: 'PhoneNumbersScreen'
  },
  {
    name: '4',
    title: 'Cafeteria Menu',
    key: '4',
    icon: 'list-ul',
    route: 'PhoneNumbersScreen'
  }
]

export default class HomeScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
      return {
        headerTitle: 'Boun Community App',
      };
    };
    render() {
      return (
        <FlatList style = {styles.container}
          numColumns = {2}
          data = {menuItems}
          renderItem = {({item}) => 
          <View style = {styles.gridItem}>
            
            <TouchableOpacity style = {{height: 150, width: '100%', backgroundColor: 'white',
              justifyContent: 'center', alignItems: 'center', }} onPress={() => this.props.navigation.navigate(item.route)}>
              <FontAwesome
                name={item.icon}
                size={25}
                color={'#1B1E22'}
              />
              <Text style = {{ fontWeight: 'bold', color: '#00BFFF'}}>{item.title} </Text>
            </TouchableOpacity>
          </View>}
        />

      );
    }
  }
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    flexDirection: 'row'
  },
  gridItem: {
    margin: 5,
    marginLeft: 10,
    width: Dimensions.get('window').width / 2.2, //Device width divided in almost a half
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ecf0f1'
  },
  groupItem: {
    margin: 5,
    width: Dimensions.get('window').width / 1.1,
    height: 100,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
    paddingLeft: 15,
  },
});
