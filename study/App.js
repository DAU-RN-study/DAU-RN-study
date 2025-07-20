import React from 'react'
import {
	View,
    Text,
	StyleSheet,
	ScrollView,
	TouchableOpacity,
    Linking
} from 'react-native'

import study from './data/data.json'

const TestText = ({ name, color, url }) => {
  const handlePress = () => {
    Linking.openURL(url).catch(err =>
      console.error("URL을 열 수 없습니다:", err)
    );
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={[styles.testContainer, { backgroundColor: color }]}>
        <Text style={styles.testText}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const App = () => {
	return (
		<ScrollView style={{flex: 1, backgroundColor: 'white'}}>
			<Text style={{fontSize: 30, margin: 20, color: 'blue', fontWeight: '900'}}>사용자 정의 컴포넌트를 만들어봅시다!</Text>
			<TestText color={"red"}>google{}</TestText>
			<TestText color={"yellow"}>naver</TestText>
			<TestText color={"green"}>daum</TestText>
			<TestText color={"lavender"}>yahoo</TestText>
			<TestText color={"yellowgreen"}>bing</TestText>
			<TestText color={"white"}>zum</TestText>
			<TestText color={"powderblue"}>nate</TestText>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	testContainer: {
		borderRadius: 10,
		justifyContent: 'center',
		margin: 20
	},
	testText: {
		fontSize: 25,
		marginVertical: 10,
		marginHorizontal: 20,
		color: 'black'
	}
})

export default App