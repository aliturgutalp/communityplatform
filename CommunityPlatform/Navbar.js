import React from 'react';
import { Header, Body, Left, Button, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';
import {StyleSheet} from 'react-native'

const Navbar = (props) => {
  const handleBackButton = () => (
    console.log('xdxdxdxd')
  );
  
  return (
    <Header style = {styles.navbar}>
    {props.hasBackButton ? 
      <Left>
        <Button onPress={handleBackButton}>
          <Text>Back</Text>
        </Button>
      </Left>
      : null
      }
      <Body style = {{alignItems: 'center'}}>
        <Text style = {styles.header}>{props.title}</Text>
      </Body>
    </Header>
  ) 
};

const styles = StyleSheet.create({
    navbar: {
        backgroundColor: '#f0ead6'
    },
    header: {
        color: 'blue',
        fontSize: 20,
        fontWeight: 'bold',
        letterSpacing: 3
    }

});

export default Navbar;