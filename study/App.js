import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, Alert, ScrollView, SafeAreaView, FlatList, Linking} from 'react-native';

import cahtplusLogo from './img/chatplusLogo.png'
import magnifierLogo from './img/magnifierLogo.png'
import musicLogo from './img/musicLogo.png'
import setLogo from './img/setLogo.png'
import kakaotalknormal from './img/kakaotalknormal.jpg'

import {DATA} from './DATA/DATA'

const url = "https://www.naver.com"

const Item = ({ title, description, data }) => (
  <TouchableOpacity onPress={() => createchatAlert(title)}>
    <View style={styles.item}>
      <Image source={kakaotalknormal} style={styles.kakaotalknormal}></Image>
      <View style={styles.CC1}>
          <View style={styles.CC2}>
            <View style={styles.TC}>
              <Text style={styles.title}>{title}</Text>
              </View>
            <View style={styles.DC}>
              <Text style={styles.data}>{data}</Text>
            </View>
          </View>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

const createchatAlert=( title )=>{
  Alert.alert(
    title,
    title + " 님과의 채팅방입니다.",
    [
      {text: "확인", onPress:()=>console.log("확인 버튼을 눌렀습니다")},
      {text: "취소",style: "cancel",onPress:()=> console.log("취소 버튼을 눌렀습니다")}
    ]
  )
}

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

const App = () => {
  return <SafeAreaView style={styles.container} >
    <View style={styles.top}>
      <View style={styles.chating}><Text style={styles.CF}>채팅</Text></View>
      <View style={styles.icon}>
        <TouchableOpacity onPress={() => createAlert('검색')}>
          <Image source={magnifierLogo} style={styles.magnifierLogo}></Image>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => createAlert('오픈채팅')}>
          <Image source={cahtplusLogo} style={styles.cahtplusLogo}></Image>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => createAlert('음악')}>
          <Image source={musicLogo} style={styles.musicLogo}></Image>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => createAlert('설정')}>
          <Image source={setLogo} style={styles.setLogo}></Image>
        </TouchableOpacity>
      </View>
    </View>

    <ScrollView style={styles.C2}>

      <View style={styles.ad}>
        <TouchableOpacity onPress={() => Linking.openURL(url)} style={styles.AD1}>
          <Text style={styles.ADF}>광고 배너</Text>
        </TouchableOpacity>
      </View>


      <View style={styles.chat}>
        <FlatList
        data={DATA.page}
        renderItem={({ item }) => (<Item title={item.title} description={item.description} data={item.date} />)} 
        keyExtractor={item => item.id.toString()}
        />
      </View>

    </ScrollView>


    

    
  </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  top: {
    flex: 0,
    backgroundColor: 'white',
    flexDirection: 'row',
  },

  chating: {
    flex: 6,
    backgroundColor: 'white',
    justifyContent: 'center',
    margin: 5,
  },

  CF:{
    fontSize: 18,
    fontWeight: 'bold',
  },

  icon: {
    flex: 4,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  magnifierLogo:{
    width: 27,
    height: 27,
    margin: 7,
  },

  cahtplusLogo: {
    width: 27,
    height: 27,
    margin: 7
  },

  musicLogo: {
    width: 27,
    height: 27,
    margin: 7,
  },

  setLogo: {
    width: 27,
    height: 27,
    margin: 7,
  },

  C2: {
    flex:1,
    backgroundColor: 'white',
  },

  ad: {
    flex: 2,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },

  AD1: {
    borderRadius: 10,
    height: 70,
    width: 400,
    backgroundColor: '#E2E2E2',
    alignItems: 'center',
    justifyContent: 'center',
  },

  ADF: {
    fontSize: 25,
    fontWeight: 'bold',
  },

  chat: {
    flex: 7,
    backgroundColor: 'white',
  },

  item:{
    flexDirection: 'row',
    margin: 10,

  },

  kakaotalknormal: {
    borderRadius: 15,
    height: 60,
    width: 60,
  },

  CC1: {
    flexDirection: 'colum',
    margin: 10,
  },

  CC2: {
    flexDirection: 'row',
  },

  TC:{
    paddingRight: 220,

  },

  DC:{
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
  fontSize: 18,
  fontWeight: 'bold',
  },

  description: {
    fontSize: 10,
  },

  data: {
    fontSize: 14,
    color: 'gray',
  }

});

export default App;