// React 및 React Native에서 제공하는 Core Component(View, Text 등)를 import 해줍니다.
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

// 함수를 통해 사용자 지정 컴포넌트(예제에선 App)를 만들어줍니다.
// return 값에 화면 구성 요소를 작성합니다.
const App = () => {
  return <View style={styles.container}>
    <View style={styles.container1}><Text>Powderblue</Text></View>
    <View style={styles.container2}>
      <View style={styles.container3}>
        <View style={styles.container4}><Text>Yellow</Text></View>
        <View style={styles.container5}><Text>Lavender</Text></View>
      </View>
      <View style={styles.container6}><Text>Pink</Text></View>
    </View>
  </View>;
};

// StyleSheet를 사용하여 HTML의 CSS와 유사한 역할을 합니다.
const styles = StyleSheet.create({

  container:{
    flex: 1,
    flexDirection: 'column',
  },

  container1:{
    flex:0.2,
    backgroundColor: 'powderblue',
    alignItems: 'center',
    justifyContent: 'center',
  },

  container2:{
    flex: 0.8,
    flexDirection: 'row',
  },

  container3:{
    flex: 1,
    flexDirection: 'column',
    
  },

  container4:{
    flex:1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },

  container5:{
    flex:1,
    backgroundColor: 'lavender',
  },

  container6:{
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },

});

// 다음과 같이 앱 전체에서 사용하기 위해 JavaScript의 내보내기 기본값으로
// 사용자 지정 컴포넌트를 내보낼 수 있습니다.
export default App;
