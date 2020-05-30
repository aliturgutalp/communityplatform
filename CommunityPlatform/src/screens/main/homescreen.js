import React from 'react';
import {
  ScrollView,
  Dimensions,
} from 'react-native';
import {
  RkButton, RkStyleSheet,
  RkText,
} from 'react-native-ui-kitten';
// import { MainRoutes } from '../../config/navigation/routes';
// import NavigationType from '../../config/navigation/propTypes';
import { Icon } from 'react-native-elements';

const paddingValue = 8;
const menuItems = [
  {
    name: '1',
    title: 'gfaklsgflkasgfklbslvvasbflkagfabslfkll',
    id: '1',
    icon: 'rowing'
  },
  {
    name: '2',
    title: 'gfaklsgflkasgfklbslvvasbflkagfabslfkll',
    id: '2',
    icon: 'rowing'
  },
  {
    name: '3',
    title: 'gfaklsgflkasgfklbslvvasbflkagfabslfkll',
    id: '3',
    icon: 'rowing'
  },
  {
    name: '4',
    title: 'gfaklsgflkasgfklbslvvasbflkagfabslfkll',
    id: '4',
    icon: 'rowing'
  },
  {
    name: '5',
    title: 'gfaklsgflkasgfklbslvvasbflkagfabslfkll',
    id: '51',
    icon: 'rowing'
  },
  {
    name: '6',
    title: 'gfaklsgflkasgfklbslvvasbflkagfabslfkll',
    id: '6',
    icon: 'rowing'
  },
]
export default class Homescreen extends React.Component {

  constructor(props) {
    super(props);
    const screenWidth = Dimensions.get('window').width;
    this.itemSize = {
      width: (screenWidth - (paddingValue * 6)) / 2,
      height: (screenWidth - (paddingValue * 6)) / 2,
    };
  }

  // onItemPressed = (item) => {
  //   this.props.navigation.navigate(item.id);
  // };

  renderItems = () => menuItems.map(route => (
    <RkButton
      rkType='square shadow'
      style={{ ...this.itemSize }}
      key={route.id}
      // onPress={() => this.onItemPressed(route)}
      >
      <Icon style={styles.icon} name={route.icon}/>
      <RkText>{route.title}</RkText>
    </RkButton>
  ));

  render = () => (
    <ScrollView
      style={styles.root}
      contentContainerStyle={styles.rootContainer}>
      {this.renderItems()}
    </ScrollView>
  );
}
// @todo
const styles = RkStyleSheet.create(theme => ({
  root: {
    backgroundColor: theme.colors.screen.scroll,
    padding: paddingValue,
  },
  rootContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  icon: {
    marginBottom: 16,
  },
}
));
