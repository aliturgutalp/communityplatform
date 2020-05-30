import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import {Linking} from 'react-native'


const styles = StyleSheet.create({
  row: { padding: 20 },
});

const Row = props => (
  <TouchableOpacity
    style={styles.row}
    onPress={() => props.onSelectContact(Linking.openURL(`tel:${props.number}`))}>
    <Text>{props.name}</Text>
    <Text>{props.number}</Text>
  </TouchableOpacity>
);

Row.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
};

export default Row;
