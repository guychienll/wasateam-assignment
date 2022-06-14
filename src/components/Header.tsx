import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {ROUTES} from '../constants';

function Header({navigation, route}: any) {
  return (
    <View style={[styles.wrapper]}>
      <TouchableOpacity
        onPress={() => {
          navigation.openDrawer();
        }}>
        <MaterialIcons name="menu" size={30} color="#000" />
      </TouchableOpacity>
      <Text style={[styles.name]}>{ROUTES[route.name].display}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {fontSize: 24, fontWeight: 'bold', paddingHorizontal: 8, color: '#000'},
});

export default Header;
