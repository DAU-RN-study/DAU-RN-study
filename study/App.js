import React from "react";
import {
    View,
    Text,
    StyleSheet,
} from 'react-native'


const App = () => {
    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <View style={styles.top1}></View>
                <View style={styles.top2}></View>
                <View style={styles.top3}></View>
            </View>

            <View style={styles.mid}>
                <View style={styles.midLeft}>
                    <View style={styles.container1}>
                        <View style={styles.container1_blue}></View>
                        <View style={styles.container1_black}></View>
                    </View>
                    <View style={styles.container2}></View>
                </View>
                <View style={styles.midRight}></View>
            </View>

            <View style={styles.bottom}>
                <View style={styles.bottom1}></View>
                <View style={styles.bottom2}>
                    <View style={styles.bottom2L}></View>
                    <View style={styles.bottom2R}></View>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'white',
        flex: 1
    },

    top: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row'
    },
    top1: {
        flex: 2,
        backgroundColor: 'white'
    },
    top2: {
        flex: 1,
        backgroundColor: 'black'
    },
    top3: {
        flex: 1.5,
        backgroundColor: 'yellow'
    },

    mid: {
        flex: 3,
        display: 'flex',
        flexDirection: 'row'
    },
    midLeft: {
        flex: 3,
        display: 'flex',
        flexDirection: 'column'
    },
    container1: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row'
    },
    container1_blue: {
        flex: 2,
        backgroundColor: 'blue'
    },
    container1_black: {
        flex: 1,
        backgroundColor: 'black'
    },
    container2: {
        flex: 3,
        backgroundColor: 'white'
    },
    midRight: {
        flex: 1.5,
        backgroundColor: 'blue'
    },

    bottom: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column'
    },
    bottom1: {
        flex: 1,
        backgroundColor: 'red'
    },
    bottom2: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row'
    },
    bottom2L: {
        flex: 1,
        backgroundColor: 'yellow'
    },
    bottom2R: {
        flex: 2.5,
        backgroundColor: 'black'
    }
})

export default App