import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const App = () => {
  return (
    <View style={styles.container0}>
      
      {/* 상단: Powderblue 영역 */}
      <View style={styles.c1}>
        <Text>Powderblue</Text>
      </View>
      
      {/* 하단: 좌우 1:1 가로 분할 */}
      <View style={styles.c2}>
        
        {/* 왼쪽: 세로 1:2 분할 */}
        <View style={styles.c3}>
          <View style={styles.c5}>
            <Text>Yellow</Text>
          </View>
          <View style={styles.c6}>
            <Text>Lavender</Text>
          </View>
        </View>
        
        {/* 오른쪽: Pink 전체 */}
        <View style={styles.c4}>
          <Text>Pink</Text>
        </View>
      
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container0: {
    flex: 1,
    flexDirection: 'column'
  },
  c1: {
    flex: 1,
    backgroundColor: 'powderblue',
    justifyContent: 'center',
    alignItems: 'center'
  },
  c2: {
    flex: 3,
    flexDirection: 'row'
  },
  c3: {
    flex: 1,
    flexDirection: 'column'
  },
  c4: {
    flex: 1,
    backgroundColor: 'pink',
    justifyContent: 'center',
    alignItems: 'center'
  },
  c5: {
    flex: 1,
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center'
  },
  c6: {
    flex: 2,
    backgroundColor: 'lavender',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default App;
