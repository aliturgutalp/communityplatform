import React from "react";
import { Button, View, StyleSheet, Text } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import {doLogin} from "../data/api";
import AsyncStorage from '@react-native-community/async-storage';

export default class LoginScreen extends React.Component {
  state = {
    email: '',
    password: '',
    loading: false,
    error: "",
  }
  _login = () => {
  doLogin(this.state.email, this.state.password)
      .then(response => {
          response.json().then(body => {
              if (response.ok) {
                storeData = async () => {
                  try {
                    await AsyncStorage.setItem('user_id', response.id)
                  } catch (e) {
                    // saving error
                  }
                }
                this.props.navigation.navigate('Main');
                return;
              }

              this.setState({
                  error: body.msg,
                  loading: false
              });
          });
      })
      .catch(err => {
          this.setState({
              error: err.message,
              loading: false
          });
      });
  }
  handleEmailUpdate = email => {
    this.setState({email})
  }

  handlePasswordUpdate = password => {
    this.setState({password})
  }
  render() {
    return (
      <View style={styles.container}>
       <TextInput
          placeholder="email"
          value={this.state.email}
          onChangeText={this.handleEmailUpdate}
          autoCapitalize="none"
        />
        <TextInput
          placeholder="password"
          value={this.state.password}
          onChangeText={this.handlePasswordUpdate}
          secureTextEntry
        />
        <Button title="Press to Log In" onPress={this._login} />
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
