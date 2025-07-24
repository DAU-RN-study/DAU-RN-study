import React from 'react';
import {
    SafeAreaView,
    TouchableOpacity,
    Text,
    StyleSheet,
    Alert,
    View,
    Image
} from 'react-native';

// 아이콘 Image
import closeIcon from './image/icon1.jpg';
import giftIcon from './image/icon2.jpg';
import qrcodeIcon from './image/icon3.jpg';
import settingIcon from './image/icon4.jpg';
import myChatIcon from './image/icon5.jpg';
import editProfileIcon from './image/icon6.jpg';
import kakaoStoryIcon from './image/icon7.jpg';
import profileImage from './image/photo.jpg'
import backgroundImage from './image/back.jpg';


const createalert = () => {
    Alert.alert(
        "알림",
        "버튼을 눌렀습니다.",
        [
            {
                text : "취소",
                onPress : () => console.log("취소 버튼을 눌렀습니다."),
                style: "cancel"
            },
            {
                text: "확인",
                onPress : () => console.log("확인 버튼을 눌렀습니다."),
            }
        ]
    )
};

const App = () => {
    return (
        <SafeAreaView style={styles.mainContainer}>
            {/* 프로필 배경 화면 */}
            <View style={styles.backgroundLayer}>
                <Image source={backgroundImage} style={styles.backgroundStyle}/>
                <View style = {styles.filter} />
            </View>

            <View style={styles.mainContainer}>
                {/* 상단 */}
                <View style={styles.headercontainer}>
                    {/* 취소 버튼 */}
                    <View style={styles.headerLeftContainer}>
                        <TouchableOpacity onPress={createalert}>
                            <Image source = {closeIcon} style={styles.headerIconStyle}/>
                        </TouchableOpacity>
                    </View>
                    {/* 선물, 큐알, 설정 버튼 */}
                    <View style={styles.headerRightContainer}>
                        <TouchableOpacity onPress={createalert}>
                            <Image source={giftIcon} style={styles.headerIconStyle}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={createalert}>
                            <Image source={qrcodeIcon} style={styles.headerIconStyle}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={createalert}>
                            <Image source={settingIcon} style={styles.headerIconStyle}/>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* 중앙 */}
                <View style={styles.profileContainer}>
                    {/* 프로필 사진 */}
                    <TouchableOpacity onPress={createalert}>
                        <Image source={profileImage} style={styles.profileImageStyle}/>
                    </TouchableOpacity>
                    {/* 프로필 이름 */}
                    <Text style={styles.profileNameText}>조예영</Text>
                    {/* 구분자 */}
                    <View style={{backgroundColor : 'gray', height : 1, width : '100%', marginTop : 25}}/>
                </View>

                {/* 하단 */}
                <View style={styles.bottomcontainer}>
                    {/* 나와의 채팅 */}
                    <TouchableOpacity onPress={createalert} style={styles.bottomMenuItem}>
                        <Image source={myChatIcon} style={styles.bottomIconStyle}/>
                        <Text style={styles.bottomItemText}>나와의 채팅</Text>
                    </TouchableOpacity>
                    {/* 프로필 편집 */}
                    <TouchableOpacity onPress={createalert} style={styles.bottomMenuItem}>
                        <Image source={editProfileIcon} style={styles.bottomIconStyle}/>
                        <Text style={styles.bottomItemText}>프로필 편집</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={createalert} style={styles.bottomMenuItem}>
                        <Image source={kakaoStoryIcon} style={styles.bottomIconStyle}/>                    
                        <Text style={styles.bottomItemText}>카카오스토리</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>

)};

const styles = StyleSheet.create({
    mainContainer : {
        flex : 1,
    },

    backgroundLayer : {
        position : 'absolute', //고정
        alignItems : 'center',
        height : '100%',
        width : '100%',
    },

    backgroundStyle : {
        resizeMode : 'cover',
        position : 'absolute',
        height : '100%',
        width : '100%',
    },

    filter : {
        height : '100%',
        width : '100%',
        backgroundColor : 'rgba(128,128,128,0.2)',
        position : 'absolute',
    },

    headercontainer : {
        flex : 1,
        // backgroundColor : 'yellow',
        flexDirection : 'row',
        alignItems : 'center',
        marginHorizontal : 10,
    },

    headerLeftContainer : {
        flex : 1,
        // backgroundColor : 'pink',
        flexDirection : 'row',
        justifyContent : 'flex-start',
    },

    headerRightContainer : {
        flex : 1,
        // backgroundColor : 'orange',
        flexDirection : 'row',
        justifyContent : 'flex-end',
    },

    headerIconStyle : {
        height : 20,
        width : 20,
        tintColor : 'white',
        resizeMode : 'contain',
        marginHorizontal : 10,
    },

    profileContainer : {
        flex : 12,
        // backgroundColor : 'green',
        flexDirect : 'column',
        alignItems : 'center',
        justifyContent : 'flex-end'
    },

    profileImageStyle : {
        height : 100,
        width : 100,
        resizeMode : 'cover', // 채우기
        borderRadius : 30, // 모서리
    },

    profileNameText : {
        fontSize : 18, 
        color : 'white',
        marginVertical : 15,
    },

    bottomcontainer : {
        flex : 2.5,
        // backgroundColor : 'blue',
        flexDirection : 'row',
        justifyContent : 'space-between',
    },

    bottomMenuItem : {
        flex : 1,
        // backgroundColor : 'powderblue',
        flexDirextion : 'cloumn',
        alignItems : 'center',
        justifyContent : 'center',
    },

    bottomIconStyle : {
        height : 25,
        width : 25,
        tintColor : 'white',
        resizeMode : 'contain',
    },
        
    bottomItemText : {
        fontSize : 15,
        color : 'white',
        marginVertical : 10,
    },

});

export default App;
