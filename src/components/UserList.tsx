import {
  ActivityIndicator,
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import FastImage from 'react-native-fast-image';
import {IUser} from '../types';

const UserList = ({users}: {users: IUser[]}) => {
  return (
    <ScrollView>
      {users.map(user => {
        return (
          <UserItem
            key={user.id}
            user={user}
            onPress={(_user: IUser) => {
              Alert.alert('USER BE CLICKED', JSON.stringify(_user, null, 2));
            }}
          />
        );
      })}
    </ScrollView>
  );
};

function UserItem(props: {user: IUser; onPress: (user: IUser) => void}) {
  const {user, onPress} = props;
  const [imageLoaded, setImageLoaded] = useState(false);
  return (
    <TouchableOpacity
      style={[styles.item]}
      onPress={() => {
        onPress(user);
      }}>
      <View style={[styles.header]}>
        <View>
          <Text style={[styles.text]}>
            {user.firstName} {user.lastName}
          </Text>
          <View style={[styles.info]}>
            <Text style={[styles.infoText]}>Age: {user.age}</Text>
            <Text style={[styles.infoText]}>Gender: {user.gender}</Text>
          </View>
        </View>
        <View style={[styles.imageWrapper]}>
          <FastImage
            resizeMode="cover"
            onLoad={() => {
              setImageLoaded(true);
            }}
            style={[
              styles.image,
              {
                opacity: imageLoaded ? 1 : 0,
              },
            ]}
            source={{
              uri: user.image,
            }}
          />
          {!imageLoaded && <ActivityIndicator size="small" />}
        </View>
      </View>

      <View style={{flex: 1}} />
      <Text style={[styles.created]}>
        {new Date(user.created).toDateString()}
      </Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  item: {
    width: '100%',
    paddingVertical: 15,
    paddingHorizontal: 25,
    backgroundColor: 'white',
    marginBottom: 10,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
  },
  image: {
    width: 50,
    height: 50,
    backgroundColor: 'green',
    borderRadius: 50,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{translateX: -25}, {translateY: -25}],
  },
  imageWrapper: {
    position: 'relative',
    width: 50,
    height: 50,
    marginRight: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    letterSpacing: 1.4,
    fontWeight: 'bold',
    color: '#000',
  },
  created: {
    alignSelf: 'flex-end',
    color: '#777',
  },
  info: {paddingVertical: 5, maxWidth: 150},
  infoText: {
    letterSpacing: 1.5,
    color: '#777',
    lineHeight: 24,
  },
});

const MemorizedUserList = React.memo(UserList);
MemorizedUserList.displayName = 'UserList';

export default MemorizedUserList;
