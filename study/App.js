// React 및 React Native에서 제공하는 Core Component(View, Text 등)를 import 해줍니다.
import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, ImageBackground,Image, TouchableOpacity, Alert} from 'react-native';

import xLogo from './img/xLogo.png'
import giftLogo from './img/giftLogo.png'
import qrLogo from './img/qrLogo.png'
import setLogo from './img/setLogo.png'
import pi from './img/pi.jpg'
import chatLogo from './img/chatLogo.png'
import penLogo from './img/penLogo.png'
import quoteLogo from './img/quoteLogo.png'
import backgroundimg from './img/backgroundimg.jpg'


const createAlert=( name )=>{
  Alert.alert(
    name,
    name + " 버튼 입니다.",
    [
      {text: "확인", onPress:()=>console.log("확인 버튼을 눌렀습니다")},
      {text: "취소",style: "cancel",onPress:()=> console.log("취소 버튼을 눌렀습니다")}
    ]
  )
}
// 함수를 통해 사용자 지정 컴포넌트(예제에선 App)를 만들어줍니다.
// return 값에 화면 구성 요소를 작성합니다.
const App = () => {
  return <SafeAreaView style={styles.container} >
    <ImageBackground source={backgroundimg} style={styles.backgroundimg} imageStyle={{ opacity: 0.75 }}>
    

    <View style={styles.Top}>

      <View style={styles.TopLeft}>

        <TouchableOpacity onPress={() => createAlert('나가기')}>
          <Image source={xLogo} style={styles.xLogo}></Image>
        </TouchableOpacity>

      </View>

      <View style={styles.TopRight}>

        <TouchableOpacity onPress={() => createAlert('선물')}>
          <Image source={giftLogo} style={styles.giftLogo}></Image>
        </TouchableOpacity>
          
        <TouchableOpacity onPress={() => createAlert('QR코드')}>
          <Image source={qrLogo} style={styles.qrLogo}></Image>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => createAlert('설정')}>
          <Image source={setLogo} style={styles.setLogo}></Image>
        </TouchableOpacity>
      </View>

    </View>



    <View style={styles.Main}>

      <View style={styles.MainTop}>
        <TouchableOpacity onPress={() => createAlert('프로필')}>
          <Image source={pi} style={styles.pi}></Image>
        </TouchableOpacity>
      </View>

      <View style={styles.MainBottom}>
        <TouchableOpacity onPress={() => createAlert('이름')}>
          <Text style={styles.Name}>여태민</Text>
        </TouchableOpacity>
      </View>

    </View>
    

    
    <View style={styles.Bottom}>

      <View style={styles.Botcontainer}>
        <TouchableOpacity onPress={() => createAlert('나와의 채팅')}>
        <Image source={chatLogo} style={styles.chatLogo}></Image>
      </TouchableOpacity> 
      <TouchableOpacity onPress={() => createAlert('나와의 채팅 글자')}> 
        <Text style={styles.t1}>나와의 채팅</Text>
      </TouchableOpacity>
      </View>

      <View style={styles.Botcontainer}>
        <TouchableOpacity onPress={() => createAlert('프로필 편집')}>
        <Image source={penLogo} style={styles.penLogo}></Image>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => createAlert('프로필 편집 글자')}>
        <Text style={styles.t1}>프로필 편집</Text>
      </TouchableOpacity>
      </View>

      <View style={styles.Botcontainer}>
        <TouchableOpacity onPress={() => createAlert('카카오스토리')}>
        <Image source={quoteLogo} style={styles.quoteLogo}></Image>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => createAlert('카카오스토리 글자')}>
        <Text style={styles.t1}>카카오스토리</Text>
      </TouchableOpacity>
      </View> 

    </View>
    </ImageBackground>
  </SafeAreaView>;
};

// StyleSheet를 사용하여 HTML의 CSS와 유사한 역할을 합니다.
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  backgroundimg:{
    width: 412,
    height: 840,
  },

  Top: {
    flex: 8,
    flexDirection: 'row',
  },
  
  TopLeft:{
    flex: 10,
  },

  xLogo:{
    height: 20,
    width:20,
    margin: 10,
  },

  TopRight:{
    flex: 4,
    flexDirection: 'row',
  },

  giftLogo:{
    height: 20,
    width:20,
    margin: 10,
  },

  qrLogo:{
    height: 20,
    width:20,
    margin: 10,
  },

  setLogo:{
    height: 20,
    width:20,
    margin: 10,
  },

  Main: {
    flex: 2,
    alignItems: 'center',
    borderBottomColor : 'black',
    borderBottomWidth : 0.5
  },

  pi:{
    width:100,
    height:100,
    borderRadius:25,
  },

  Name:{
    fontWeight: 'bold',
    margin:20,
    color: 'white',
  },

  Bottom: {
    flex: 1.75,
    flexDirection: 'row',
  },

  Botcontainer:{
    flex: 3,
    margin: 15,
    flexDirection: 'column',
    alignItems: 'center',
  },

  chatLogo: {
    width: 40,
    height:40,
    margin: 20,
    marginTop:5,
  },

  penLogo: {
    width: 40,
    height:40,
    margin: 20,
    marginTop:5,
  },

  quoteLogo: {
    width: 40,
    height:40,
    margin: 20,
    marginTop:5,
  },

  t1: {
    color: 'white',
    fontWeight: 'bold',
  }
});


// 다음과 같이 앱 전체에서 사용하기 위해 JavaScript의 내보내기 기본값으로
// 사용자 지정 컴포넌트를 내보낼 수 있습니다.
export default App;