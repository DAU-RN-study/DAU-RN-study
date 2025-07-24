import React from 'react'
import {
    SafeAreaView,
    Image,
    StyleSheet
} from 'react-native'

import test from './image/test.jpg';

const App = () => {
    return (
        <SafeAreaView style={{flex: 1}}>
            <Image source={require('./image/test.jpg')} style={styles.img}/>
            <Image source={test} style={styles.img}></Image>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    img: {
        height: 200,
        width: 200,
        resizeMode: 'contain',
    }
})

export default App