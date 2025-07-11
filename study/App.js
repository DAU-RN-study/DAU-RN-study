// React 및 React Native에서 제공하는 Core Component(View, Text 등)를 import 해줍니다.
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

// 함수를 통해 사용자 지정 컴포넌트(예제에선 App)를 만들어줍니다.
// return 값에 화면 구성 요소를 작성합니다.
const App = () => {
  return (
   <View style = {styles.container}>
      {/* 위쪽 */}
      <View style = {styles.row5container}>
        {/* 위쪽 왼쪽 */}
        <View style = {styles.col2container}>
          {/* 위쪽 왼쪽 위쪽 */}
          <View style = {styles.row3container}>
            <View style = {styles.col3container}>
              <View style = {styles.whi2container}></View>
              <View style = {styles.blu1container}></View>
            </View>
            <View style = {styles.col2container}>
              <View style = {styles.bla2container}></View>
            </View>
          </View>
          {/* 위쪽 왼쪽 아래쪽 */}
          <View style = {styles.row2container}>
            <View style = {styles.whi2container}></View>
          </View>
        </View>

        {/* 위쪽 오른쪽 */}
        <View style = {styles.col1container}>
          <View style = {styles.yel2container}></View>
          <View style = {styles.blu3container}></View>
        </View>
      </View>

      {/* 아래쪽 */}
      <View style = {styles.col2container}>

        {/* 아래 위 */}
        <View style = {styles.row1container}>
          <View style = {styles.red1container}></View>
        </View>

        {/* 아래 아래 */}
        <View style = {styles.row1container}>
          <View style = {styles.yel1container}></View>
          <View style = {styles.bla2container}></View>
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

  row1container : {
    flex : 1,
    flexDirection : 'row',
  },

  row2container : {
    flex : 2, 
    flexDirection : 'row',
  },

  row3container : {
    flex : 3, 
    flexDirection : 'row',
  },

  row5container : {
    flex : 5, 
    flexDirection : 'row',
  },

  col1container : {
    flex : 1,
    flexDirection : 'column'
  },

  col2container : {
    flex : 2,
    flexDirection : 'column',
  },

  col3container : {
    flex : 3,
    flexDirection : 'column',
  },

  red1container : {
    flex : 1,
    backgroundColor : 'red',
  },

  yel1container : {
    flex : 1,
    backgroundColor : 'yellow',
  },

  yel2container : {
    flex : 2,
    backgroundColor : 'yellow',
  },

  whi2container : {
    flex : 2,
    backgroundColor : 'white',
  },

  blu1container : {
    flex : 1,
    backgroundColor : 'blue',
  },

  blu3container : {
    flex : 3,
    backgroundColor : 'blue',
  },

  bla2container : {
    flex : 2,
    backgroundColor : 'black',
  },


});

// 다음과 같이 앱 전체에서 사용하기 위해 JavaScript의 내보내기 기본값으로
// 사용자 지정 컴포넌트를 내보낼 수 있습니다.
export default App;
