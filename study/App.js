import React, { Children } from 'react'
import {
	View,
    Text,
	StyleSheet,
	ScrollView,
    Linking,
    SafeAreaView,
    TouchableOpacity,
} from 'react-native'

import DATA from './DATA/DATA.json'


const TextBar = ({ children, color, index }) => {
    return (
        <TouchableOpacity style={[styles.testContainer, {backgroundColor: `${color}`}]} onPress={() => Linking.openURL(String([DATA.page[index].url]))}>
            <Text style={styles.testText}>{children}</Text>
        </TouchableOpacity>
    )
}

const App = () => {
	return (
		<SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <Text style={styles.header}>검색 엔진 모음</Text>
                <TextBar color={"red"} index={0}>Go to Google</TextBar>
                <TextBar color={"yellowgreen"} index={1}>Go to NAVER</TextBar>
                <TextBar color={"orange"} index={2}>Go to DAUM</TextBar>
                <TextBar color={"mediumpurple"} index={3}>Go to YAHOO</TextBar>
                <TextBar color={"green"} index={4}>Go to BING</TextBar>
                <TextBar color={"skyblue"} index={5}>Go to ZUM</TextBar>
                <TextBar color={"red"} index={6}>Go to NATE</TextBar>
            </ScrollView>
        </SafeAreaView>
	)
}

const styles = StyleSheet.create({

    container: {
        display: 'flex',
    },
    
    scrollContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },

    header: {
        color: 'grey',
        fontSize: 40,
        fontWeight: 'bold',
        marginTop: 5
    },
    
    
    testContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        height: 100,
        width: 330,
        marginTop: 50
    },

    testText: {
        color: 'white',
        fontSize: 20,
        fontWeight: '500'
    }
})

export default App