import React from 'react'
import {
	Alert,
    View,
    Text,
	StyleSheet,
	ScrollView,
    SafeAreaView,
    FlatList, // FlatList 대신 scrollview 썼습니다..
    Linking,
    Image,
    TouchableOpacity
} from 'react-native'

import DATA from './DATA/DATA.json'

import chatIcon from './Image/chat.png'
import musicIcon from './Image/music_note.png'
import searchIcon from './Image/search.png'
import settingIcon from './Image/setting.png'


const TestText = ({ index }) => {
	let name = DATA.members[index].title

    const chatAlert = () => {
        Alert.alert(
            `${name}`,
            `${name}님과의 채팅방입니다.`,
            [
                {text: 'CANCLE', onPress:() => console.log(`${name}님과의 채팅방 CANCLE`)},
                {text: 'OK', onPress:() => console.log(`${name}님과의 채팅방 OK`)}
            ]
        )
    }

    return (
		<TouchableOpacity style={[styles.chatBox]} onPress={chatAlert}>
			<View>
                <View>
                    <View style={styles.chatPic}></View>
                </View>
            </View>
            <View style={styles.chatLog}>
                <Text style={styles.testText}>{DATA.members[index].title}</Text>
                <Text style={styles.testDescript}>{DATA.members[index].description}</Text>
            </View>
            <View style={styles.chatDate}>
                <Text style={styles.testDescript}>{DATA.members[index].date}</Text>
            </View>
		</TouchableOpacity>
	)
}

const searchAlert = () => {
    Alert.alert(
        "검색 버튼",
        "검색 버튼 입니다",
        [
            {text: '취소', onPress: () => console.log('검색 버튼 취소')},
            {text: '확인', onPress: () => console.log('검색 버튼 확인')}
        ]
    )
}

const openChatAlert = () => {
    Alert.alert(
        "오픈채팅 버튼",
        "오픈채팅 버튼 입니다",
        [
            {text: '취소', onPress: () => console.log('오픈 채팅 버튼 취소')},
            {text: '확인', onPress: () => console.log('오픈 채팅 버튼 확인')}
        ]
    )
}

const musicAlert = () => {
    Alert.alert(
        "음악 버튼",
        "음악 버튼 입니다",
        [
            {text: '취소', onPress: () => console.log('음악 버튼 취소')},
            {text: '확인', onPress: () => console.log('음악 버튼 확인')}
        ]
    )
}

const settingAlert = () => {
    Alert.alert(
        "설정 버튼",
        "설정 버튼 입니다",
        [
            {text: '취소', onPress: () => console.log('설정 버튼 취소')},
            {text: '확인', onPress: () => console.log('설정 버튼 확인')}
        ]
    )
}

const App = () => {
	return (
		<SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerLeft}>
                    <Text style={{fontWeight:'bold', fontSize:18, color:'black'}}>채팅</Text>
                </View>
                <View style={styles.headerRight}>
                    <TouchableOpacity onPress={searchAlert}>
                        <Image source={searchIcon} style={styles.icon}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={openChatAlert}>
                        <Image source={chatIcon} style={styles.icon}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={musicAlert}>
                        <Image source={musicIcon} style={styles.icon}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={settingAlert}>
                        <Image source={settingIcon} style={styles.icon}></Image>
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView style={styles.chatList}>
                <TouchableOpacity style={styles.banner} onPress={() => Linking.openURL("https://www.naver.com")}>
                    <Text style={{color: 'black', fontsize: 20}}>광고 배너</Text>
                </TouchableOpacity>
                <TestText index={0}></TestText>
                <TestText index={1}></TestText>
                <TestText index={2}></TestText>
                <TestText index={3}></TestText>
                <TestText index={4}></TestText>
                <TestText index={5}></TestText>
                <TestText index={6}></TestText>
                <TestText index={7}></TestText>
                <TestText index={8}></TestText>
                <TestText index={9}></TestText>
                <TestText index={10}></TestText>
                <TestText index={11}></TestText>
                <TestText index={12}></TestText>
                <TestText index={13}></TestText>
                <TestText index={14}></TestText>
                <TestText index={15}></TestText>
                <TestText index={16}></TestText>
                <TestText index={17}></TestText>
                <TestText index={18}></TestText>
                <TestText index={19}></TestText>
                <TestText index={20}></TestText>
                <TestText index={21}></TestText>
                <TestText index={22}></TestText>
                <TestText index={23}></TestText>
                <TestText index={24}></TestText>
                <TestText index={25}></TestText>
                <TestText index={26}></TestText>
            </ScrollView>

        </SafeAreaView>
	)
}

const styles = StyleSheet.create(
    {
        chatBox: {
            display: 'flex',
            height: 100,
            width: 410,
            flexDirection: 'row',
            marginTop: 10
        },
        chatPic: {
            height: 50,
            width: 50,
            marginLeft: 10,
            borderColor: 'grey',
            borderWidth: 5
        },
        chatLog: {
            flex: 5,
            paddingLeft: 10
        },
        testText: {
            fontWeight: 'bold',
            fontSize: 15,
            color: 'black'
        },
        testDescript: {
            fontSize: 12
        },
        chatDate: {
            display: 'flex',
            flex: 1,
            alignItems: 'flex-end',
            marginRight: 3
        },
        container: {
            display: 'flex',
            flex: 1,
            backgroundColor: 'white'
        },

        header: {
            height: 50,
            width: 410,
            display: 'flex',
            flexDirection: 'row',
            backgroundColor: 'white',
            borderBottomWidth: 1,
            borderColor: '#ccc',
        },
        headerLeft: {
            display: 'flex',
            flex: 1,
            paddingLeft: 20,
            marginTop: 10
        },
        headerRight: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignContent: 'center',
            flex: 1
        },
        icon: {
            height: 20,
            width: 20,
            marginTop: 15,
            marginRight: 15
        },
        chatList: {
            display: 'flex',
            flex: 5,
        },
        banner: {
            display: 'flex',
            backgroundColor: '#CDCDCD',
            height: 100,
            width: 410,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 30,
        }
	}
)

export default App