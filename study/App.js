import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const App = () => {
  return (
    <View style={styles.c0}>
      
      <View style={styles.c1}>
        <View style={styles.c11}></View>
        <View style={styles.c12}></View>
        <View style={styles.c13}></View>
      </View>

      <View style={styles.c2}>
        <View style={styles.c21}>
          <View style={styles.c211}></View>
          <View style={styles.c212}></View>
          <View style={styles.c213}></View>
        </View>
        <View style={styles.c22}>
          <View style={styles.c221}></View>
          <View style={styles.c222}></View>
        </View>
      </View>

      <View style={styles.c3}>
        <View style={styles.c31}></View>
        <View style={styles.c32}>
          <View style={styles.c321}></View>
          <View style={styles.c322}></View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  c0:{
    flex:1,
    flexDirection:'column'
  },
  c1:{
    flex:1,
    flexDirection:'row'
  },
    c2:{
    flex:2,
    flexDirection:'column'
  },
  c3:{
    flex:1,
    flexDirection:'column'
  },
  c11:{
    flex:1.5,
    backgroundColor:'white'
  },
  c12:{
    flex:1,
    backgroundColor:'black'
  },
  c13:{
    flex:1.25,
    backgroundColor:'yellow'
  },
  c21:{
    flex:1,
    flexDirection:'row'
  },
  c211:{
    flex:1.5,
    backgroundColor:'blue'
  },
  c212:{
    flex:1,
    backgroundColor:'black'
  },
  c213:{
    flex:1.25,
    backgroundColor:'blue'
  },
  c22:{
    flex:2,
    flexDirection:'row'
  },
  c221:{
    flex:2
  },
  c222:{
    flex:1,
    backgroundColor:'blue'
  },
  c31:{
    flex:1,
    backgroundColor:'red'
  },
  c32:{
    flex:1,
    flexDirection:'row'
  },
  c321:{
    flex:1,
    backgroundColor:'yellow'
  },
  c322:{
    flex:2,
    backgroundColor:'black'
  }
});

export default App;
