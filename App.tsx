import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import LandingScreen from './src/screens/LandingScreen';
import HomeScreen from './src/screens/HomeScreen';
import BottomTabBar from './src/components/BottomTabBar';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Drawer from './src/components/Drawer';
import Header from './src/components/Header';
import PrivacyPolicyScreen from './src/screens/PrivacyPolicyScreen';
import ProfileScreen from './src/screens/ProfileScreen';

const App = () => {
  return (
    <SafeAreaView>
      <View style={[styles.wrapper]}>
        <Navigator />
      </View>
    </SafeAreaView>
  );
};

const RootStack = createNativeStackNavigator();
const DrawerStack = createDrawerNavigator();
const BottomTabsStack = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
const ProfileStack = createNativeStackNavigator();

function Navigator() {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{
          headerShown: false,
          animation: 'fade',
        }}
        initialRouteName="Landing">
        <RootStack.Screen name="Landing" component={LandingScreen} />
        <RootStack.Screen name="Drawer" component={DrawerNavigator} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

function DrawerNavigator() {
  return (
    <DrawerStack.Navigator
      initialRouteName="Tabs"
      screenOptions={{
        headerShown: false,
        swipeEnabled: false,
      }}
      drawerContent={Drawer}>
      <DrawerStack.Screen name="Tabs" component={BottomTabsNavigator} />
      <DrawerStack.Screen
        options={{
          headerShown: true,
          header: props => <Header {...props} />,
        }}
        name="PrivacyPolicy"
        component={PrivacyPolicyScreen}
      />
    </DrawerStack.Navigator>
  );
}

function BottomTabsNavigator() {
  return (
    <BottomTabsStack.Navigator
      initialRouteName="Drawer"
      screenOptions={{
        headerShown: false,
      }}
      tabBar={BottomTabBar}>
      <BottomTabsStack.Screen name="HomeStack" component={HomeNavigator} />
      <BottomTabsStack.Screen
        name="ProfileStack"
        component={ProfileNavigator}
      />
    </BottomTabsStack.Navigator>
  );
}

function HomeNavigator() {
  return (
    <HomeStack.Navigator initialRouteName="Home">
      <HomeStack.Screen
        options={{
          header: props => <Header {...props} />,
        }}
        name="Home"
        component={HomeScreen}
      />
    </HomeStack.Navigator>
  );
}

function ProfileNavigator() {
  return (
    <ProfileStack.Navigator initialRouteName="Profile">
      <ProfileStack.Screen
        options={{
          header: props => <Header {...props} />,
        }}
        name="Profile"
        component={ProfileScreen}
      />
    </ProfileStack.Navigator>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: '100%',
    backgroundColor: 'dimgray',
  },
});

export default App;
