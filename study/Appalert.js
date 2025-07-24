import React from 'react'
import {
    SafeAreaView,
    TouchableOpacity,
    Text,
    StyleSheet,
    Alert
} from 'react-native'

const createAlert = () => {
    Alert.alert(
        "Alert 제목",
        "Alert 내용"
    )
}

const createTwoButtonAlert = () => {
    Alert.alert( // alert 함수
        "Alert 제목",
        "Alert 내용",
        [
            {
                text: "취소",
                onPress: () => console.log("취소 버튼을 눌렀습니다."),
                style: "cancel"
            },
            {
                text: "확인",
                onPress: () => console.log("확인 버튼을 눌렀습니다.")
            }
        ]
    )
}

const createThreeButtonAlert = () => {

    Alert.alert(
        "Alert 제목",
        "Alert 내용",
        [//버튼 최대 개수 : 3
            {text: "나중에 알림", onPress: () => console.log("나중에 알림 버튼을 눌렀습니다.")},
            {text: "취소", onPress: () => console.log("취소 버튼을 눌렀습니다.")},
            {text: "확인", onPress: () => console.log("확인 버튼을 눌렀습니다.")},
        ]
    )
}

const App = () => {
    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity
                style={styles.touchContainer}
                onPress={createAlert}
            >
                <Text style={styles.text}>누르세요</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.touchContainer, {backgroundColor: 'red'}]}
                onPress={createTwoButtonAlert}
            >
                <Text style={styles.text}>누르세요</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.touchContainer, {backgroundColor: 'green'}]}
                onPress={createThreeButtonAlert}
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
        paddingVertical: 20,
        margin: 20
    },
    text: {
        color: 'white',
        fontSize: 20
    }
})

export default App