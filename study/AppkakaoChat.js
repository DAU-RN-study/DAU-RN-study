import React from 'react';
import {
    View,
    Text,
    Linking,
    FlatList,
    StyleSheet,
    ScrollView,
    SafeAreaView,
    TouchableOpacity,
    Image,
    Alert,
} from 'react-native';

import DATA from './DATA/DATA.json';
import arrow_left from './image/arrow_left.jpg';
import search from './image/search.jpg';
import add from './image/add.jpg';
import music from './image/music.jpg';
import settings from './image/settings.jpg';
import Photo from './image/cats.jpg';

// 구분선
const Divider = () => {
    return (<View style={styles.divider}/>);};
// 광고배너 url
const AdUrl = 'https://www.naver.com';
//버튼 알림
const createAlert = (icon) => {
    Alert.alert(
        "알림",
        icon + " 버튼을 눌렀습니다.",
        [
            {
                text : "취소",
                onPress : () => console.log("취소 버튼을 눌렀습니다."),
                style : "cencle",
            },
            {
                text : "확인",
                onPress : () => console.log("확인 버튼을 눌렀습니다.")
            }
        ]
    )
};
// 채팅 알림
const chatAlert = (title) => {
    Alert.alert(
        "알림",
        title + "님과의 채팅입니다.",
        [
            {
                text : "취소",
                onPress : () => console.log("취소 버튼을 눌렀습니다."),
                style : "cancel"
            },
            {
                text : "확인",
                onPress : () => console.log("확인 버튼을 눌렀습니다.")
            }
        ]
    )
}
//채팅 박스
const ChatItem = ({item}) => {
    return (
        <TouchableOpacity style={styles.chatBox} onPress={() => chatAlert(item.title)}>
            <Image source={Photo} style={styles.chatImage}/>
            <View style={styles.chatBoxInfo}>
                    <Text style={styles.titleText}>{item.title}</Text>    
                    <Text style={styles.descriptionText}>{item.description}</Text> 
            </View>
            <View style={styles.chatBoxDate}>
                <Text style={styles.dateText}>{item.date}</Text>
            </View>
        </TouchableOpacity>
)}
//아이콘
const Icon = ({imagesource, imagestyle, pressalert}) => {
    return(
        <TouchableOpacity onPress={pressalert}>
            <Image source={imagesource} style={imagestyle}/>
        </TouchableOpacity>

    )
};

const App = () => {
    return (
        <SafeAreaView style={styles.mainContainer}> 
            {/* 상단 바 */}
            <View style={styles.chatListHeader}>
                <View style={styles.navigationBar}>
                    <Icon imagesource={arrow_left} imagestyle={styles.navigationIcon} pressalert={() => createAlert("뒤로가기")}/>
                    <Text style={styles.navigationText}>KaKaoChat</Text>
                </View>
                <Divider/>
                <View style={styles.toolBar}>
                    <View style={styles.toolBarLeft}>
                        <Text style={styles.toolBarText}>채팅</Text>
                    </View>
                    <View style={styles.toolBarRight}>
                        <Icon imagesource={search} imagestyle={styles.toolBarIcon} pressalert={() => createAlert("찾기")}/>
                        <Icon imagesource={add} imagestyle={styles.toolBarIcon} pressalert={() => createAlert("오픈채팅")}/>
                        <Icon imagesource={music} imagestyle={styles.toolBarIcon} pressalert={() => createAlert("음악")}/>
                        <Icon imagesource={settings} imagestyle={styles.toolBarIcon} pressalert={() => createAlert("설정")}/>
                    </View>
                </View>

            </View>

            {/* 메인 */}
            <ScrollView>
            <TouchableOpacity style={styles.adBar} onPress={()=> Linking.openURL(AdUrl)}>
                <Text style={styles.adText}>광고 배너</Text>
            </TouchableOpacity>
            <FlatList 
                style={styles.chatListMain} 
                data={DATA}
                renderItem={({item})=> <ChatItem item={item}/>} 
                KeyExtractor={item=> item.id}/>
            </ScrollView>
        </SafeAreaView>
)};

const styles = StyleSheet.create({
    divider : {
        height : 1,
        width : '100%',
        backgroundColor : 'gray',

    },
    chatBox : {
        flex : 1,
        flexDirection : 'row',
        margin : 10,
        justifyContent : 'flex-start',
    },
    chatImage : {
        height : 45,
        width : 45,
        borderRadius : 10,
        marginRight : 5,
    },
    chatBoxInfo : {
        flex : 7,
        flexDirection : 'column',
        justifyContent : 'space-evenly',
        // backgroundColor : 'white',
    },
    titleText : {
        fontSize : 15,
    },
    descriptionText : {
        fontSize : 10,
    },
    chatBoxDate : {
        flex : 1,
        alignItems : 'flex-end',
        // backgroundColor : 'yellow',
    },
    dateText : {
        fontSize : 10,
    },
    mainContainer : {
        flex : 1,
        // backgroundColor : 'pink',
    },
    chatListHeader : {
        flexDirection : 'column',
        // backgroundColor : 'yellow',
    },
    navigationBar : {
        height : 50,
        flexDirection : 'row',
        justifyContent : 'flex-start',
        alignItems : 'center',
        // backgroundColor : 'green',
    },
    navigationIcon : {
        height : 40,
        width : 40,
    },
    navigationText : {
        marginLeft : 30,
        fontSize : 20,
        color : 'black',
    },
    toolBar : {
        height : 40,
        flexDirection : 'row',
        justifyContent : 'flex-end',
        alignItems : 'center',
        marginHorizontal : 10,
        // backgroundColor : 'blue',
    },
    toolBarLeft : {
        flex : 1,
    },
    toolBarRight : {
        flex : 1,
        flexDirection : 'row',
        justifyContent : 'flex-end',
    },
    toolBarText : {
        fontSize : 20,
        color : 'black',
    },
    toolBarIcon : {
        height : 20,
        width : 20,
        marginHorizontal : 5,
    },
    adBar : {
        height : 60,
        justifyContent : 'center',
        alignItems : 'center',
        margin : 10,
        borderRadius : 10,
        backgroundColor : 'lightgray',
    },
    adText : {
        fontSize : 25,
    },
    chatListMain : {
        flex : 1,
        // backgroundColor : 'red',
    },
});

export default App;