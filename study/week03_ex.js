import React from 'react'
import {
    View,
    Text,
	StyleSheet,
	ScrollView,
    Linking,
    TouchableOpacity,
    SafeAreaView
} from 'react-native'

import study from './DATA/DATA.json';

const TestText = ({ children, color, url }) => {
	return (
		<TouchableOpacity onPress={() => Linking.openURL(url)} style={[styles.testContainer, {backgroundColor: `${color}`}]}>
			<Text style={styles.testText}>Go to {children}</Text>
		</TouchableOpacity>
	)
}

const App = () => {
	return (
        <SafeAreaView style={{flex: 1}}>
		<ScrollView style={{flex: 1, backgroundColor: 'white'}}>
            <TestText color={"red"} url={study.page[0].url}>{study.page[0].name}</TestText>
			<TestText color={"yellow"} url={study.page[1].url}>{study.page[1].name}.</TestText>
			<TestText color={"green"} url={study.page[2].url}>{study.page[2].name}</TestText>
			<TestText color={"lavender"} url={study.page[3].url}>{study.page[3].name}</TestText>
			<TestText color={"yellowgreen" }url={study.page[4].url}>{study.page[4].name}</TestText>
			<TestText color={"white"} url={study.page[5].url}>{study.page[5].name}</TestText>
			<TestText color={"powderblue"} url={study.page[6].url}>{study.page[6].name}</TestText>
		</ScrollView>
        </SafeAreaView>
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
		marginVertical: 70,
		marginHorizontal: 20,
		color: 'black'
	}
})

export default App