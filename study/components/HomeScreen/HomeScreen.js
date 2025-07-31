import React from 'react';
import {Text, Touchable, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import test1 from './test1';
import test2 from './test2';
import test3 from './test3';
import test4 from './test4';

export default function HomeScreen() {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>홈 화면입니다!</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('test1')}
        style={{
          backgroundColor: 'gray',
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
        }}>
        <Text>test1</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('test2')}
        style={{
          backgroundColor: 'gray',
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
        }}>
        <Text>test2</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('test3')}
        style={{
          backgroundColor: 'gray',
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
        }}>
        <Text>test3</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('test4')}
        style={{
          backgroundColor: 'gray',
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
        }}>
        <Text>test4</Text>
      </TouchableOpacity>
    </View>
  );
}
