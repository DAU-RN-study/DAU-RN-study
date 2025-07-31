import React from 'react'
import {
    SafeAreaView,
    TouchableOpacity,
    Text,
    StyleSheet,
    Alert,
    ImageBackground,
    View,
    Image
} from 'react-native'

const showAlert = (btnName) => {
    Alert.alert(btnName,`${btnName} 버튼입니다.`)
}

const App = () => {
    return (
            <ImageBackground
                source={require('./dugi.jpg')}
                style={styles.background}
            >
                {/*상단 헤더 영역*/}
                <View style={styles.topBar}>
                    <TouchableOpacity onPress={() => showAlert("뒤로가기")}>
                        <Image source={require('./left.png')} style={styles.img}/>
                    </TouchableOpacity>

                    <Text style={styles.Text}>KakaoProfile</Text>
                </View>

                <View style={styles.topBar1}>
                    <View style={styles.topBar11}>
                        <TouchableOpacity onPress={() => showAlert("X")}>
                            <Image source={require('./x.png')} style={{width:30, height:30, resizeMode:'contain'}}></Image>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.topBar12}>
                        <TouchableOpacity onPress={() => showAlert("선물")}>
                                <Image source={require('./gift.png')} style={{width:30, height:30, marginRight:20, resizeMode:'contain'}}></Image>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => showAlert("큐알")}>
                                <Image source={require('./qr.png')} style={{width:30, height:30, marginRight:20, resizeMode:'contain'}}></Image>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => showAlert("설정")}>
                                <Image source={require('./setting.png')} style={{width:30, height:30, marginRight:7, resizeMode:'contain'}}></Image>
                        </TouchableOpacity>
                    </View>

                </View>

                <View style={styles.midBar}>
                    <TouchableOpacity onPress={() => showAlert("프로필 사진")}>
                        <Image source={require('./ganadi.png')} style={{width:150, height:150, borderRadius:40, resizeMode:'contain'}}></Image>
                    </TouchableOpacity>

                    <Text style={[styles.Text, {marginTop:15, marginBottom:30}]}>장유승</Text>

                    <View style={styles.divider}></View>
                </View>

                <View style={styles.lowBar}>
                    <TouchableOpacity onPress={() => showAlert("나와의 채팅")}>
                        <View style={styles.iconWithText}>
                            <Image source={require('./speech_bubble.png')} style={{width:30, height:30, resizeMode:'contain', marginBottom:10}}></Image>
                            <Text style={{fontSize:14, color:'black', marginBottom:30}}>나와의 채팅</Text>
                        </View>
                    </TouchableOpacity>
                    
                    <TouchableOpacity onPress={() => showAlert("프로필 편집")}>
                        <View style={styles.iconWithText}>
                            <Image source={require('./pencil.png')} style={{width:30, height:30, resizeMode:'contain', marginBottom:10}}></Image>
                            <Text style={{fontSize:14, color:'black', marginBottom:30}}>프로필 편집</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => showAlert("카카오스토리")}>
                        <View style={styles.iconWithText}>
                            <Image source={require('./kakaostory.png')} style={{width:30, height:30, resizeMode:'contain', marginBottom:10}}></Image>
                            <Text style={{fontSize:14, color:'black', marginBottom:30}}>카카오스토리</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
    )
}

const styles = StyleSheet.create({
    background: {
        flex:1,
        flexDirection:'column'
    },
    topBar:{
        flex:1,
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
        paddingHorizontal: 10,
        paddingVertical: 6,
        backgroundColor:'white'
    },
    img:{
        height:30,
        width:30,
        marginRight:10,
        resizeMode:'contain'
    },
    Text:{
        fontSize:18,
        marginLeft:20,
        color:'black'
    },
    topBar1:{
        flex:1.5,
        flexDirection:'row',
        alignItems:'center'
    },
    topBar11:{
        flex:1,
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
        paddingVertical:30,
        paddingHorizontal:15
    },
    topBar12:{
        flex:5,
        flexDirection:'row',
        justifyContent:'flex-end',
        alignItems:'center',
        paddingHorizontal:10,
        paddingVertical:15,    
  
    },
    midBar:{
        flex:25,
        flexDirection:'column',
        justifyContent:'flex-end',
        alignItems:'center'
    },
    divider:{
        width:'100%',
        height:1,
        backgroundColor:'#ccc',
        marginVertical: 1
    },
    lowBar:{
        flex:5,
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'flex-end'
    },
    iconWithText:{
        justifyContent:'center',
        alignItems:'center',
    }
})

export default App