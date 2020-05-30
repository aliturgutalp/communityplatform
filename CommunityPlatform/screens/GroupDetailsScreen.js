import React from "react";
import { Button, View, StyleSheet, Text } from "react-native";

import Ionicons from "react-native-vector-icons/Ionicons";

export default class GroupDetailsScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
          headerTitle: 'Group Details',
        };
    };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Group Details coming soon.</Text>
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
