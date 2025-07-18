import React from 'react'
import {
    SafeAreaView,
    Image,
    StyleSheet,
    Dimensions,    // 현재 디바이스의 화면 크기를 가져오는 모듈 (반응형)
    View,
    Text,
    TouchableOpacity,
    Alert
} from 'react-native'

import reactImg from './image/backgroundimg.jpg'
import deleteImg from './image/delete.png'
import giftImg from './image/gift.png'
import wonImg from './image/koreanwon.png'
import starImg from './image/star.png'
import profileImg from './image/profileimg.jpg'
import chatImg from './image/bubble.png'
import callImg from './image/call.png'
import facetalkImg from './image/facetalk.png'

// 현재 화면의 width와 height를 가져옴 (반응형 크기 적용용)
const { width, height } = Dimensions.get('window');

const handlePress = (buttonName) => {
    Alert.alert(
        "프로필 편집",
        `${buttonName} 버튼입니다.`,
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

const App = () => {
    return (
        <SafeAreaView style={{flex: 1}}>  
            {/* 화면을 안전 영역까지 꽉 채우는 뷰를 생성 (flex:1은 화면 전체를 차지하라는 의미) */}
            <Image source={reactImg} style={styles.img} />
            {/* 어두운 반투명 레이어*/}
            <View style={styles.overlay} />

            <View style={styles.content}>
                {/* 상단 */}
                <View style={styles.high}>
                    <View style={styles.highLeft}>
                        <Image source={deleteImg} style={styles.highicon} />
                    </View>
                    <View style={styles.highRight}>
                        <Image source={giftImg} style={styles.highicon} />
                        <Image source={wonImg} style={styles.highicon} />
                        <Image source={starImg} style={styles.highicon} />
                    </View>
                </View>
                
                {/* 중간 빈 공간 */}
                <View style={styles.container}>

                </View>

                {/* 프로필 */}
                <View style={styles.profile}>
                    <View style={styles.profileImg}>
                        <TouchableOpacity onPress={() => handlePress('프로필 편집')}> 
                            <Image source={profileImg} style={styles.profileImg}/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.profileName}>
                        <Text style={styles.nameText}>김채은</Text>
                    </View>
                </View>

                {/* 하단 버튼 */}
                <View style={styles.low}>
                    <View style={styles.lowChat}>
                        <Image source={chatImg} style={styles.lowicon} />
                        <Text style={styles.lowText}>1:1채팅</Text>
                    </View>
                    <View style={styles.lowCall}>
                        <Image source={callImg} style={styles.lowicon} />
                        <Text style={styles.lowText}>통화하기</Text>
                    </View>
                    <View style={styles.lowFacetalk}>
                        <Image source={facetalkImg} style={styles.lowicon} />
                        <Text style={styles.lowText}>페이스톡</Text>
                    </View>

                </View>
                
            </View>
            

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    img: {
        width: width,   // 화면 가로 길이를 이미지 width에 맞춤
        height: height, // 화면 세로 길이를 이미지 height에 맞춤
        resizeMode: 'cover', // 이미지를 화면에 꽉 채우되, 비율은 유지 (잘릴 수 있음)
        position: 'absolute', // 다른 컴포넌트 뒤로 배치 (배경 역할)
    },
    overlay: {
        position: 'absolute', // 배경 이미지 위에 겹치도록
        width: width,
        height: height,
        backgroundColor: 'rgba(0,0,0,0.2)',
    },
    content: {
        flex: 1,
        padding: 20,
    },
    high: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    highicon: {
        width: 24,
        height: 24,
        marginHorizontal: 5, // 아이콘 간 여백
        tintColor: 'white', // 원본 이미지가 단색이고 배경이 투명해야 적용됨
    },
    highLeft: {
    },
    highRight: {
        flexDirection: 'row', 
        alignItems: 'center',
    },
    container: {
        flex: 10,
    },
    profile: {
        flex: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    profileImg: {
        width: 100,
        height: 100,
        borderRadius: 20,
        marginBottom: 10,
    },
    nameText: {
        color : 'white',
        fontSize : 18,
    },
    low: {
        flex: 3,
        flexDirection: 'row',
        justifyContent: 'space-around', // 같은 간격으로 배치
        alignItems: 'center',
        borderTopWidth: 1,           // 선 굵기
        borderTopColor: 'rgba(255,255,255,0.3)',
    },
    lowChat: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    },
    lowCall: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    lowFacetalk: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    lowicon: {
        width: 30,
        height: 30,
        marginBottom: 10,
        tintColor: 'white', // 원본 이미지가 단색이고 배경이 투명해야 적용됨
    },
    lowText: {
    color: 'white',
    fontSize: 14,
    },
})

export default App