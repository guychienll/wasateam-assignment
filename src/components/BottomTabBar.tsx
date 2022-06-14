import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Stacks} from '../constants';

export default function BottomTabBar({state, descriptors, navigation}: any) {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View style={[styles.wrapper]}>
      {state.routes.map((route: any, index: number) => {
        const {options} = descriptors[route.key];

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={[styles.button]}>
            <MaterialIcons
              name={Stacks[route.name].icon}
              size={24}
              color="#fff"
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {flexDirection: 'row', backgroundColor: '#fff'},
  button: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#282c34',
  },
  text: {
    lineHeight: 1.2 * 14,
    paddingVertical: 8,
    fontWeight: 'bold',
  },
});
