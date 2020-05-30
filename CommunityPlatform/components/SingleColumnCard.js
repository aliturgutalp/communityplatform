import React from 'react';
import { StyleSheet, Text, View, Dimensions,FlatList, TouchableOpacity } from 'react-native';

const SingleColumnCard = (props) => {
    return (
        <View style = {styles.gridItem}>
        <TouchableOpacity style = {{height: 150, width: '100%', backgroundColor: 'white',
          justifyContent: 'center', alignItems: 'center', }} onPress={props.onPress}>
          <Text style = {{ fontWeight: 'bold', color: '#1B1E22'}}>{props.item.title} </Text>
        </TouchableOpacity>
      </View>
    ) 
};

const styles = StyleSheet.create({
    gridItem: {
        marginTop: 50,
        marginBottom: 55,
        marginLeft: 20,
        width: Dimensions.get('window').width / 1.1, //Device width divided in almost a half
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ecf0f1'
    },
  });

export default SingleColumnCard;