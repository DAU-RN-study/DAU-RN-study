// React 및 React Native에서 제공하는 Core Component(View, Text 등)를 import 해줍니다.
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

// 함수를 통해 사용자 지정 컴포넌트(예제에선 App)를 만들어줍니다.
// return 값에 화면 구성 요소를 작성합니다.
const App = () => {
  // return (
  //   <View style={styles.container}>
  //     <View style={styles.container_high}><Text>Powderblue</Text></View>      
  //     <View style={styles.container_low}>          
  //       <View style={styles.container_left}>
  //         <View style={styles.container_lefthigh}><Text>Yellow</Text></View> 
  //         <View style={styles.container_leftlow}><Text>purple</Text></View> 
  //       </View> 
  //       <View style={styles.container_right}><Text>Pink</Text></View> 
  //     </View>
  //   </View>
  // // <View style={styles.container}></View>
  // );
    return (
   <View style={styles.container}>

      <View style={styles.firstBox}>
        <View style={styles.high}> 
          <View style={styles.f_whiteBox} />
          <View style={styles.f_blackBox} />
          <View style={styles.f_yellowBox} />
        </View>
        <View style={styles.low}>
          <View style={styles.f_blueBox} />
          <View style={styles.f_blackBox} />
          <View style={styles.f_blueBox} />
        </View>
      </View>

      <View style={styles.secondBox}>
        <View style={styles.r2_whiteBox} />
        <View style={styles.r2_blueBox} />
      </View>

      <View style={styles.thirdBox}>
        <View style={styles.redBox} />
      </View>

      <View style={styles.FourthBox}>
        <View style={styles.r4_yellowBox} />
        <View style={styles.r4_blackBox} />
      </View>
    </View>
  );
};


// StyleSheet를 사용하여 HTML의 CSS와 유사한 역할을 합니다.
// const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   flexDirection: 'column',
  // },
  // container_high: {
  //   flex: 1,
  //   backgroundColor: 'skyblue',
  //   justifyContent: 'center',
    
  // },
  // container_low: {
  //   flex: 3,
  //   flexDirection: 'row',
  //   justifyContent: 'center',
   
    
  // },
  // container_left: {
  //   flex: 1,
  //   flexDirection: 'column',
  //   justifyContent: 'center',
    
  // },
  // container_lefthigh: {
  //   flex: 1,
  //   backgroundColor: 'yellow',
  //   justifyContent: 'center',
    
  // },
  // container_leftlow: {
  //   flex: 2,
  //   backgroundColor: 'purple',
  //   justifyContent: 'center',
   
  // },
  // container_right: {
  //   flex: 1,
  //   backgroundColor: 'pink',
  //   justifyContent: 'center',
    
  // },
// });
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  firstBox: {
    flex: 1.5,
    flexDirection: 'column',
  },
  secondBox: {
    flex: 1.5,
    flexDirection: 'row',
  },
  thirdBox: {
    flex: 0.5,
    flexDirection: 'row',
  },
  FourthBox: {
    flex: 0.5,
    flexDirection: 'row',
  },

  high: {
    flex: 1,
    flexDirection: 'row',
  },
  low: {
    flex: 0.5,
    flexDirection: 'row',
  },

  f_whiteBox: {
    flex: 0.4,
    backgroundColor: 'white',
  },
  f_blackBox: {
    flex: 0.2,
    backgroundColor: 'black',
  },
  f_yellowBox: {
    flex: 0.4,
    backgroundColor: 'yellow',
  },
  f_blueBox: {
    flex: 0.4,
    backgroundColor: 'blue',
  },
  r2_whiteBox: {
    flex: 0.6,
    backgroundColor: 'white',
  },
  r2_blueBox: {
    flex: 0.4,
    backgroundColor: 'blue',
  },

  redBox: {
    flex: 1,
    backgroundColor: 'red',
  },

  r4_yellowBox: {
    flex: 0.4,
    backgroundColor: 'yellow',
  },

  r4_blackBox: {
    flex: 0.6,
    backgroundColor: 'black',
  },

});

// 다음과 같이 앱 전체에서 사용하기 위해 JavaScript의 내보내기 기본값으로
// 사용자 지정 컴포넌트를 내보낼 수 있습니다.
export default App;
