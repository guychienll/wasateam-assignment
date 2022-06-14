import {
  ActivityIndicator,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {faker} from '@faker-js/faker';
import {STATUS} from '../constants';
import MemorizedUserList from '../components/UserList';
import {IUser} from '../types';

export default function HomeScreen() {
  const [users, setUsers] = useState<IUser[]>([]);
  const [status, setStatus] = useState(STATUS.idle);

  useEffect(() => {
    (async () => {
      try {
        setStatus(STATUS.loading);
        const response = await fetch(
          Platform.select({
            ios: 'http://localhost:3000/users',
            android: 'http://10.0.2.2:3000/users',
          }) as string,
          {
            method: 'GET',
          },
        );
        const _users = await response.json();
        setUsers(
          _users.map((_user: IUser) => ({
            ..._user,
            id: faker.datatype.uuid(),
            age: faker.datatype.number({min: 20, max: 70}),
            image: faker.image.animals(100, 100, true),
            gender: faker.name.gender(faker.datatype.boolean()),
          })),
        );
        setStatus(STATUS.success);
      } catch (e) {
        console.error(e);
        setStatus(STATUS.failed);
      }
    })();
  }, []);

  if (status === STATUS.loading) {
    return (
      <View style={[styles.center]}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (status === STATUS.failed) {
    return (
      <View style={[styles.center]}>
        <Text style={[styles.text]}>Something wrong,</Text>
        <Text style={[styles.text]}>Please try again later.</Text>
      </View>
    );
  }

  return (
    <View>
      {status === STATUS.success && <MemorizedUserList users={users} />}
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    letterSpacing: 1.4,
    fontWeight: 'bold',
    color: '#000',
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});
