// React 및 React Native에서 제공하는 Core Component(View, Text 등)를 import 해줍니다.
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

// 함수를 통해 사용자 지정 컴포넌트(예제에선 App)를 만들어줍니다.
// return 값에 화면 구성 요소를 작성합니다.
const App = () => {
  return (
    <View style = {styles.container}>

      <View style = {styles.upcontainer}>
        <View style = {styles.powderblue}>
          <Text>powderblue</Text></View>
      </View>

      <View style = {styles.downcontainer}>
        <View style = {styles.downcontainer1}>
          <View style = {styles.yellow}><Text>yellow</Text></View>
          <View style = {styles.lavender}><Text>lavender</Text></View>
        </View>
        <View style = {styles.pink}>
          <View><Text> pink</Text></View>
        </View>
      </View>

    </View>

  );
};

// StyleSheet를 사용하여 HTML의 CSS와 유사한 역할을 합니다.
const styles = StyleSheet.create({
  container : {
    flex : 1,
  },

  upcontainer : {
    flex: 1,
  },

  powderblue : {
    flex : 1,
    backgroundColor : 'powderblue',
    justifyContent : 'center',
    alignItems : 'center',
  },

  downcontainer : {
    flex  : 3,
    flexDirection : 'row',
  },

  downcontainer1 : {
    flex  : 1,
    flexDirection : 'column',
  },

  pink : {
    flex : 1,
    backgroundColor : 'pink',
    justifyContent : 'center',
    alignItems : 'center',
  },

  yellow : {
    flex : 1,
    backgroundColor : 'yellow',
    justifyContent : 'center',
    alignItems : 'center',
  },
  lavender : {
    flex : 2,
    backgroundColor : 'lavender',
    justifyContent : 'center',
    alignItems : 'center',
  },

});

// 다음과 같이 앱 전체에서 사용하기 위해 JavaScript의 내보내기 기본값으로
// 사용자 지정 컴포넌트를 내보낼 수 있습니다.
export default App;
