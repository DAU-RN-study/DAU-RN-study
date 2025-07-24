import React from 'react'
import {
	View,
  Text,
	StyleSheet,
	ScrollView,
    TouchableOpacity,
    Linking
} from 'react-native'

import study from './DATA/DATA.json';

const TestText = ({ color, name, url}) => {
	return (
		<TouchableOpacity onPress={() => Linking.openURL(`${url}`)}style={[styles.testContainer, {backgroundColor: `${color}`}]}>
			<Text style={styles.testText}>Go to {name}</Text>
		</TouchableOpacity>
	)
}

const App = () => {
	return (
		<ScrollView style={{flex: 1, backgroundColor: 'white'}}>
			<Text style={{fontSize: 30, margin: 20, color: 'blue', fontWeight: '900'}}>과제 4 : 검색 엔진 모드{study.major}</Text>
			<TestText color={"red"} name={study.page[0].name} url={study.page[0].url}></TestText>
			<TestText color={"yellow"} name={study.page[1].name} url={study.page[1].url}></TestText>
			<TestText color={"green"} name={study.page[2].name} url={study.page[2].url}></TestText>
			<TestText color={"lavender"} name={study.page[3].name} url={study.page[3].url}></TestText>
			<TestText color={"yellowgreen"} name={study.page[4].name} url={study.page[4].url}></TestText>
			<TestText color={"white"} name={study.page[5].name} url={study.page[5].url}></TestText>
			<TestText color={"powderblue"} name={study.page[6].name} url={study.page[6].url}></TestText>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	testContainer: {
		borderRadius: 10,
		justifyContent: 'center',
		margin: 20,
        height : 100,
	},
	testText: {
		fontSize: 25,
		marginVertical: 10,
		marginHorizontal: 20,
		color: 'black'
	}
})

export default App