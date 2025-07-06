// React 및 React Native에서 제공하는 Core Component(View, Text 등)를 import 해줍니다.
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

// 함수를 통해 사용자 지정 컴포넌트(예제에선 App)를 만들어줍니다.
// return 값에 화면 구성 요소를 작성합니다.
const App = () => {
  return(
   <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.label}>Powerblue</Text>
      </View>
    

    <View style={styles.bottom}>
      <View style={styles.leftColumn}>
        <View style={[styles.block {backgroud: 'yellow'}]}>
          <Text style={styles.label}>Yellow</Text>
        </View>
        <View style={[styles.block {backgroud: '#E6E6FA'}]}>
          <Text style={styles.label}>Lavender</Text>
        </View>
      </View>

   <View style={styles.rightColumn, {backgroundColor: 'pink'}}>
      <Text style={styles.label}>Pink</Text>
        </View>
      </View>
    </View>
);
};

// StyleSheet를 사용하여 HTML의 CSS와 유사한 역할을 합니다.
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  top: {
    flex:1,
    backgroundColor: '#B0E0E6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottom: {
    flex: 2,
    flexDirection: 'row',
  },
  leftColumn: {
    flex: 1,
    flexDirection: 'column',
  },
  rightColumn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  block: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    color: 'black',
  },



});

// 다음과 같이 앱 전체에서 사용하기 위해 JavaScript의 내보내기 기본값으로
// 사용자 지정 컴포넌트를 내보낼 수 있습니다.
export default App;
