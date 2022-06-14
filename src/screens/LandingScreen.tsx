import {Animated, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {CommonActions} from '@react-navigation/native';
import FastImage from 'react-native-fast-image';

const delay = async (ms: number) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

export default function LandingScreen(props: any) {
  const {navigation} = props;
  const opacityAnimValue = React.useRef(new Animated.Value(0)).current;

  useEffect(() => {
    (async () => {
      Animated.timing(opacityAnimValue, {
        duration: 600,
        toValue: 1,
        useNativeDriver: true,
      }).start();

      await delay(1000);

      Animated.parallel([
        Animated.timing(opacityAnimValue, {
          duration: 350,
          toValue: 0,
          useNativeDriver: true,
        }),
      ]).start();

      await delay(600);

      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [
            {
              name: 'Drawer',
            },
          ],
        }),
      );

      await delay(100);
    })();
  }, [navigation, opacityAnimValue]);

  return (
    <Animated.View
      style={[
        styles.wrapper,
        {
          opacity: opacityAnimValue,
        },
      ]}>
      <FastImage
        source={require('../../assets/wasateam.png')}
        style={styles.logo}
        resizeMode="contain"
      />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: 200,
    height: 200,
  },
});
