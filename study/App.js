// React 및 React Native에서 제공하는 Core Component(View, Text 등)를 import 해줍니다.
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

// 함수를 통해 사용자 지정 컴포넌트(예제에선 App)를 만들어줍니다.
// return 값에 화면 구성 요소를 작성합니다.
const App = () => {
  return( <View style={styles.container}>
    <View style={styles.container1}>
      <View style={styles.container1_1}></View>
      <View style={styles.container1_2}></View>
      <View style={styles.container1_3}></View>
    </View>
    <View style={styles.container2}>
      <View style={styles.container2_1}></View>
      <View style={styles.container2_2}></View>
      <View style={styles.container2_3}></View>
    </View>
    <View style={styles.container3}>
      <View style={styles.container3_1}></View>
      <View style={styles.container3_2}></View>
    </View>
    <View style={{flex: .5, backgroundColor: 'red'}}></View>
    <View style={styles.container5}>
      <View style={styles.container5_1}></View>
      <View style={styles.container5_2}></View>
    </View>
  </View>
)};

// StyleSheet를 사용하여 HTML의 CSS와 유사한 역할을 합니다.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  container1: {
    flex: .8,
    flexDirection: 'row'
  },
  container1_1:{
    flex: 1,
    backgroundColor: 'white'
  },
  container1_2:{
    flex: 1,
    backgroundColor: 'black'
  },
  container1_3:{
    flex: 1,
    backgroundColor: 'yellow'
  },
  container2: {
    flex: .5,
    flexDirection: 'row'
  },
  container2_1:{
    flex: 1,
    backgroundColor: 'blue'
  },
  container2_2:{
    flex: 1,
    backgroundColor: 'black'
  },
  container2_3:{
    flex: 1,
    backgroundColor: 'blue'
  },
  container3: {
    flex: 1,
    backgroundColor: 'red',
    flexDirection: 'row'
  },
  container3_1: {
    flex: 2,
    backgroundColor: 'white',
  },
  container3_2: {
    flex: 1,
    backgroundColor: 'blue',
  },
  container5: {
    flex: .5,
    flexDirection: 'row'
  },
  container5_1: {
    flex: 1,
    backgroundColor: 'yellow'
  },
  container5_2: {
    flex: 2,
    backgroundColor: 'black'
  },
});

// 다음과 같이 앱 전체에서 사용하기 위해 JavaScript의 내보내기 기본값으로
// 사용자 지정 컴포넌트를 내보낼 수 있습니다.
export default App;
