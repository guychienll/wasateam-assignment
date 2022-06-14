import {ActivityIndicator, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import WebView from 'react-native-webview';
import {STATUS} from '../constants';

export default function PrivacyPolicyScreen() {
  const [status, setStatus] = useState(STATUS.idle);

  return (
    <View style={[styles.wrapper]}>
      {status === STATUS.loading && (
        <View style={[styles.center, StyleSheet.absoluteFill, {zIndex: 1}]}>
          <ActivityIndicator size="large" />
        </View>
      )}
      <WebView
        onLoadStart={() => {
          setStatus(STATUS.loading);
        }}
        onLoad={() => {
          setStatus(STATUS.success);
        }}
        source={{
          uri: 'https://www.privacypolicies.com/live/7171fe40-0f01-4e85-a661-b6bd062d800b',
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: '100%',
    backgroundColor: 'red',
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});
