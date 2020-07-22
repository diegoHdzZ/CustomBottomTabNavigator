import 'react-native-gesture-handler';
import React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import TabBar from './components/TabBar';

const Tab = createMaterialTopTabNavigator();

function MyTabBar({state, descriptors, navigation, position}) {
  const handleOnPress = (tabIndex) => {
    switch (tabIndex) {
      case 0:
        return navigation.navigate('Home');
      case 1:
        return navigation.navigate('Settings');
      case 2:
        return navigation.navigate('Profile');
        case 3:
        return navigation.navigate('Members');
        case 4:
        return navigation.navigate('Account');
    }
  };
  return (
    <TabBar
      onPress={handleOnPress}
      tintColor="red"
      activeTab={state.index}
      values={[
        {title: 'News', icon: require('./assets/news.png')},
        {title: 'Requests', icon: require('./assets/requests.png')},
        {title: 'Events', icon: require('./assets/events.png')},
        {title: 'Members', icon: require('./assets/members.png')},
        {title: 'Account', icon: require('./assets/account.png')},
      ]}
    />
  );
}
function HomeScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        
      }}>
      <Text>Home!</Text>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Profile!</Text>
    </View>
  );
}
function Members() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        
      }}>
      <Text>Members!</Text>
    </View>
  );
}
function Account() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        
      }}>
      <Text>Account!</Text>
    </View>
  );
}
function SettingsScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        
      }}>
      <Text>Set</Text>
    </View>
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarPosition="bottom"
        lazy={false}
        tabBar={(props) => <MyTabBar {...props} />}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="Members" component={Members} />
        <Tab.Screen name="Account" component={Account} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
