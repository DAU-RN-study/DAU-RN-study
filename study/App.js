import React from "react";
import {
    Pressable,
    SafeAreaView,
    Image,
    StyleSheet,
    TouchableOpacity,
    Alert,
    View,
    Text,
    ImageBackground,
    NativeAppEventEmitter,
} from 'react-native'

import crossImg from './Image/cross.png'
import giftImg from './Image/gift.png'
import pencilImg from './Image/pencil.png'
import qrImg from './Image/qr.png'
import quoteImg from './Image/right-quote.png'
import settingImg from './Image/settings.png'
import balloonImg from './Image/speech-bubble.png'
import backgroundImg from './Image/birthday.jpg'
import profileImg from './Image/profile.jpg'

const crossAlert = () => {
    Alert.alert(
        "프로필 닫기",
        "프로필 닫기 버튼",
        [
            {text: "확인", onpress: () => console.log("프로필 닫기 버튼을 누름")}
        ]
    )
}

const giftAlert = () => {
    Alert.alert(
        "선물하기",
        "선물하기 버튼",
        [
            {text: "확인", onPress: () => console.log('선물하기 버튼 누름')}
        ]
    )
}

const qrAlert = () => {
    Alert.alert(
        "QR",
        "QR 버튼",
        [
            {text: '확인', onpress: () => console.log('QR 버튼 누름')}
        ]
    )
}

const settingAlert = () => {
    Alert.alert(
        "설정",
        "설정 버튼",
        [
            {text: '확인', onpress: () => console.log('설정 버튼 누름')}
        ]
    )
}

const profileAlert = () => {
    Alert.alert(
        "프로필 사진",
        `프로필 사진 버튼
누르면 사진이 확대되는 것도 구현하고 싶었는데 못했네요`,
        [
            {text: '확인', onpress: () => console.log('프로필 사진 버튼 누름')}
        ]
    )
}

const chatAlert = () => {
    Alert.alert(
        "나와의 채팅",
        "나와의 채팅 버튼",
        [
            {text: '확인', onpress: () => console.log('나와의 채팅 버튼 누름')}
        ]
    )
}

const editAlert = () => {
    Alert.alert(
        "프로필 편집",
        "프로필 편집 버튼",
        [
            {text: '확인', onpress: () => console.log('프로필 편집 버튼 누름')}
        ]
    )
}

const storyAlert = () => {
    Alert.alert(
        "카카오스토리",
        "카카오스토리 버튼",
        [
            {text: '확인', onpress: () => console.log('카카오스토리 버튼 누름')}
        ]
    )
}


const App = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={backgroundImg} style={styles.background}>
                <View style={styles.top}>
                    <View style={styles.topLeft}>
                        <TouchableOpacity style={styles.box1} onPress={crossAlert}>
                            <Image source={crossImg} style={styles.cross}></Image>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.topRight}>
                        <TouchableOpacity style={styles.box2} onPress={giftAlert}>
                            <Image source={giftImg} style={styles.gift}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.box2} onPress={qrAlert}>
                            <Image source={qrImg} style={styles.qr}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.box2} onPress={settingAlert}>
                            <Image source={settingImg} style={styles.setting}></Image>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.mid}>
                    <Pressable onPress={profileAlert}>
                        <Image source={profileImg} style={styles.profile}/>
                    </Pressable>
                    <Text style={styles.userName}>김현석</Text>
                    <Text style={styles.statusMessage}>생일이냐</Text>
                </View>

                <View style={styles.line}></View>

                <View style={styles.bottom}>
                    <View style={styles.bottomBox}>
                        <TouchableOpacity onPress={chatAlert}>
                            <Image style={styles.bottomImage} source={balloonImg}></Image>
                        </TouchableOpacity>
                        <Text style={styles.bottomText}>나와의 채팅</Text>
                    </View>
                    
                    <View style={styles.bottomBox}>
                        <TouchableOpacity onPress={editAlert}>
                            <Image style={styles.bottomImage} source={pencilImg}></Image>
                        </TouchableOpacity>
                        <Text style={styles.bottomText}>프로필 편집</Text>
                    </View>

                    <View style={styles.bottomBox}>
                        <TouchableOpacity onPress={storyAlert}>
                            <Image style={styles.bottomImage} source={quoteImg}></Image>
                        </TouchableOpacity>
                        <Text style={styles.bottomText}>카카오스토리</Text>
                    </View>
                </View>
            </ImageBackground>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1
    },

    background: {
        flex: 1
    },

    top: {
        display: 'flex',
        flex: 1,
        flexDirection: 'row'
    },

    topLeft: {
        display: 'flex',
        flex: 1,
        justifyContent: 'flex-start'
    },

    box1: {
        paddingLeft: 20,
        paddingTop: 20,
    },

    cross: {
        height: 20,
        width: 20
    },

    box2: {
        paddingRight: 20,
        paddingTop: 20
    },

    gift: {
        height: 20,
        width: 20
    },

    qr: {
        height: 20,
        width: 20
    },

    setting: {
        height: 20,
        width: 20
    },

    topRight: {
        display: 'flex',
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'flex-end'
    },

    mid: {
        display: 'flex',
        flex: 6,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },

    profile: {
        marginTop: 320,
        height: 100,
        width: 100,
        borderRadius: 25
    },

    userName: {
        paddingTop: 10,
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    },

    statusMessage: {
        paddingTop: 5,
        color: 'white',
        fontSize: 13
    },

    line: {
        backgroundColor: 'white',
        height: 1
    },

    bottom: {
        display: 'flex',
        flexDirection: 'row',
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },

    bottomBox: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 40
        },

    bottomImage: {
        height: 30,
        width: 30
    },

    bottomText: {
        marginTop: 17,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 13
    }

})

export default App