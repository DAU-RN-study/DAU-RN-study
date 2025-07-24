import React from 'react'
import {
    SafeAreaView,
    TouchableOpacity,
    Text,
    StyleSheet
} from 'react-native'

const App = () => {
    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity
                style={styles.touchContainer}
                onPress={() => console.log("눌렀습니다")}
            >
                <Text style={styles.text}>누르세요</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    touchContainer: {
        backgroundColor: 'blue',
        paddingHorizontal: 50,
        paddingVertical: 20
    },
    text: {
        color: 'white',
        fontSize: 20
    }
})

export default App