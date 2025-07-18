import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

import DATA from './DATA/DATA.json';
// import {DATA} from './DATA/DATA';

const TestText = ({children, color}) => {
  return (
    <View style={[styles.testContainer, {backgroundColor: `${color}`}]}>
      <Text style={styles.testText}>{children}</Text>
    </View>
  );
};

const App = () => {
  return (
    <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
      <Text
        style={{fontSize: 30, margin: 20, color: 'blue', fontWeight: '900'}}>
        사용자 정의 컴포넌트를 만들어봅시다! {DATA.page[0].name}
      </Text>
      {/* <TestText color={'red'}>{DATA[1].title}</TestText> */}
      <TestText color={'yellow'}>children 값입니다.</TestText>
      <TestText color={'green'}>다른 prop들도 지정해서</TestText>
      <TestText color={'lavender'}>보내줄 수 있답니다!!</TestText>
      <TestText color={'yellowgreen'}>여기선 color 값을 보내줬어요~~</TestText>
      <TestText color={'white'}>참 신기하죠~? 이걸 이용하면</TestText>
      <TestText color={'powderblue'}>
        효율적으로 코드를 짤 수 있답니다~~~
      </TestText>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  testContainer: {
    borderRadius: 10,
    justifyContent: 'center',
    margin: 20,
  },
  testText: {
    fontSize: 25,
    marginVertical: 10,
    marginHorizontal: 20,
    color: 'black',
  },
});

export default App;
