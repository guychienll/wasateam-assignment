import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {ROUTES} from '../constants';

export default function Drawer({state, navigation}: any) {
  const {routes} = state;
  return (
    <View>
      {routes.map((route: any, index: number) => {
        return (
          <TouchableOpacity
            style={[styles.route]}
            key={index}
            onPress={() => {
              navigation.navigate('Drawer', {
                screen: route.name,
              });
              navigation.closeDrawer();
            }}>
            <Text style={[styles.text]}>{ROUTES[route.name].display}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  route: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#777',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 1.5,
    color: '#000',
  },
});
