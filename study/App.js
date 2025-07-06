// React 및 React Native에서 제공하는 Core Component(View, Text 등)를 import 해줍니다.
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

// 함수를 통해 사용자 지정 컴포넌트(예제에선 App)를 만들어줍니다.
// return 값에 화면 구성 요소를 작성합니다.
const App = () => {
  return (
    <View style = {styles.container}>

      <View style = {styles.upcontainer}>
        <View style = {styles.upcontainer1}>
          <Text style = {styles.powderblue}>powderblue</Text></View>
      </View>

      <View style = {styles.downcontainer}>
        <View style = {styles.downcontainer1}>
          <View style = {styles.dcontainer1_1}><Text style = {styles.yellow}>yellow</Text></View>
          <View style = {styles.dcontainer1_2}><Text style = {styles}>lavender</Text></View>
        </View>
        <View style = {styles.downcontainer2}>
          <View style = {styles.dcontainer2_1}><Text style = {styles}>pink</Text></View>
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

  upcontainer1 : {
    flex : 1,
    backgroundColor : 'powderblue',
  },

  downcontainer : {
    flex  : 3,
    flexDirection : 'row',
  },

  downcontainer1 : {
    flex  : 1,
    flexDirection : 'column',
  },

  downcontainer2 : {
    flex : 1,
  },

  dcontainer1_1 : {
    flex : 1,
    backgroundColor : 'yellow',
  },
  dcontainer1_2 : {
    flex : 2,
    backgroundColor : 'lavender',
  },
  dcontainer2_1 : {
    flex : 1,
    backgroundColor : 'pink',
  },

  powderblue : {
    justifyContent : 'center',
  },

  yellow :  {
    flex : 1,
    justifyContent : 'center',
    alignItems : 'center',
  },




});

// 다음과 같이 앱 전체에서 사용하기 위해 JavaScript의 내보내기 기본값으로
// 사용자 지정 컴포넌트를 내보낼 수 있습니다.
export default App;
