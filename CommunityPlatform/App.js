import React from 'react';
import { createStackNavigator, createAppContainer, createBottomTabNavigator, createSwitchNavigator } from "react-navigation";
import GroupsScreen from './screens/GroupsScreen';
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen'
import GroupDetailsScreen from './screens/GroupDetailsScreen'
import PhoneNumbersScreen from './screens/PhoneNumbersScreen'
import LoginScreen from './screens/LoginScreen.js'
import ContactDetailsScreen from './screens/ContactDetailsScreen.js'
import ProfileScreen from './screens/ProfileScreen.js'
import Ionicons from "react-native-vector-icons/Ionicons";

const MainStack = createStackNavigator(
  {
    HomeScreen: HomeScreen,
    GroupsScreen: GroupsScreen,
    GroupDetailsScreen: GroupDetailsScreen,
    PhoneNumbersScreen: PhoneNumbersScreen,
    ContactDetails: ContactDetailsScreen
  },
  {
    initialRouteName: "HomeScreen"
  }
);

MainStack.navigationOptions = {
  tabBarIcon: ({ focused, tintColor }) => (
    <Ionicons
      name={`md-home`}
      size={25}
      color={tintColor}
    />
  )
};


const MainTabs = createBottomTabNavigator(
  {
    Main: MainStack,
    Profile: ProfileScreen,
    Settings: SettingsScreen,
  },
  {
    tabBarOptions: {
      activeTintColor: "#00BFFF"
    }
  }
);

const AppNavigator = createSwitchNavigator({
  Login: LoginScreen,
  Main: MainTabs,
});



const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
