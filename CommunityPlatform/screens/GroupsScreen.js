import React from 'react';
import { StyleSheet, Text, View, Dimensions,FlatList, TouchableOpacity } from 'react-native';
import SingleColumnCard from '../components/SingleColumnCard'


const groupItems = [
  {
    name: '1',
    title: 'CMPE 451',
    key: '1',
    icon: 'rowing',
    route: 'GroupDetailsScreen'
  },
  {
    name: '2',
    title: 'CMPE 492(Project Specific)',
    key: '2',
    icon: 'rowing',
    route: 'GroupDetailsScreen'
  },
  {
    name: '3',
    title: 'Advisory',
    key: '3',
    icon: 'rowing',
    route: 'GroupDetailsScreen'
  },
]

export default class GroupsScreen extends React.Component {
  static navigationOptions = {
    title: 'My Groups',
  };
  render() {
    const {navigation} = this.props.navigation;
    return (
      <FlatList style = {styles.container}
        numColumns = {1}
        data = {groupItems}
        renderItem = {({item}) => 
          <SingleColumnCard item = {item} onPress = {() => this.props.navigation.navigate(item.route)}/>
        }
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
});