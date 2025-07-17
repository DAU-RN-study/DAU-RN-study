import React from 'react'
import{
    View,
    SafeAreaView,
    TouchableOpacity,
    Text,
    StyleSheet,
    Alert,
    ImageBackground,
    Image
} from 'react-native'

import bgimg from './image/bgimg.png'
import x_icon from './image/xIcon.png'
import gift_icon from './image/gift.png'
import qr_icon from './image/qr.png'
import geer_icon from './image/geer.png'
import speechBubble from './image/speechBubble.png'
import pencil from './image/pencil.png'
import quotes from './image/quotes.png'
import profile from './image/profile.png'

const alertBottun=() =>{
    Alert.alert(
        "프로필 편집",
        "프로필 편집 버튼입니다.",
        [
            {text: "취소", onPress: () => console.log("취소"), style: "cancel"},
            {text: "확인", onPress: () => console.log("확인")}
        ]
    )
}

const App = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={bgimg} 
            style={styles.backgrondImage}
            resizeMode = 'cover'>
                    <View style={styles.body}>
                        <View style={styles.header}>
                            <View><Image source={x_icon} style={styles.icon}></Image></View>
                            <View style={styles.iconRight}>
                                <Image source={gift_icon} style={styles.icon}></Image>
                                <Image source={qr_icon} style={styles.icon}></Image>
                                <Image source={geer_icon} style={styles.icon}></Image>
                            </View>
                        </View>
                        <View style={styles.contents}>
                            <Image source={profile} style={styles.profile}></Image>
                            <Text style={styles.name}>조현우</Text>
                        </View>
                        <View style={styles.footer}>
                            <View style = {styles.aaa}>
                                <Image source={speechBubble} style={styles.icon}></Image>
                                <Text style={styles.text}>나와의 채팅</Text>
                            </View>
                            <View style = {styles.aaa}>
                            <TouchableOpacity style={styles.touch} onPress={alertBottun}>
                                <Image source={pencil} style={styles.icon}></Image>
                                <Text style={styles.text}>프로필 편집</Text>
                            </TouchableOpacity>
                            </View>
                            <View style = {styles.aaa}>
                                <Image source={quotes} style={styles.icon}></Image>
                                <Text style={styles.text}>카카오 스토리</Text>
                            </View>
                        </View>

                    </View>
            </ImageBackground>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row'
    },
    backgrondImage: {
        flex: 1,
        justifyContent: 'center',
    },
    body: {
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        flex: 1,
        flexDirection: 'column'
    },
    header: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10
    },
    iconRight: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    contents: {
        flex: 12,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    footer: {
        flex: 2,
        flexDirection: 'row',
        borderTopColor: 'white',
        borderTopWidth: .5,
        justifyContent: 'space-around'
    },
    icon: {
        width: 25,
        height: 25,
        margin: 10
    },
    profile: {
        height: 100,
        width: 100,
        borderRadius: 20
    },
    name: {
        color: 'white',
        fontSize: 18,
        margin: 10,
        marginBottom: 60
    },
    aaa: {
        flex: 1,
        flexDirection: 'column', 
        justifyContent: 'flex-around',
        alignItems: 'center'
    },
    text: {
        color: 'white'
    }
})

export default App