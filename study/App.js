import {React, useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  SafeAreaView,
} from 'react-native';

import {DATA} from './data/DATA';

const TestText = ({children, color}) => {
  return (
    <TouchableOpacity
      style={[styles.testContainer, {backgroundColor: `${color}`}]}>
      <Text style={styles.testText}>{children}</Text>
    </TouchableOpacity>
  );
};

const App = () => {
  // const [loading, setLoading] = useState(true);
  // if (loading) {
  //   return (
  //     <View style={styles.loadingContainer}>
  //       <ActivityIndicator size="large" color="#0095F1" />
  //       <Text style={styles.loadingText}>데이터를 불러오는 중...</Text>
  //     </View>
  //   );
  // }

  return (
    <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
      <Text
        style={{fontSize: 30, margin: 20, color: 'blue', fontWeight: '900'}}>
        사용자 정의 컴포넌트를 만들어봅시다!
        {DATA.univ}
      </Text>
      <TestText color={'red'}>{DATA.univ}</TestText>
      <TestText color={'yellow'}>{DATA.members[0].name}</TestText>
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
  loadingContainer: {},
});

export default App;
