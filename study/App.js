import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Text,
  ImageBackground,
  Alert,
} from 'react-native';

import bg from './image/bg.png';
import chat from './image/chat.png';
import edit from './image/edit.png';
import exit from './image/exit.png';
import pro from './image/profile.png';
import gift from './image/gift.png';
import qrcode from './image/qrcode.png';
import setting from './image/setting.png';

const alertbutton = message => {
  Alert.alert('알림', message, [
    {text: '취소', onPress: () => console.log('취소됨'), style: 'cancel'},
    {text: '확인', onPress: () => console.log('확인됨')},
  ]);
};

const App = () => {
  return (
    <SafeAreaView style={styles.safearea}>
      <ImageBackground source={bg} style={styles.bg}>
        <View style={styles.overlay}></View>

        <View style={styles.upthings}>
          <TouchableOpacity
            style={styles.exiticon}
            onPress={() => alertbutton('나가기 버튼입니다')}>
            <Image source={exit} style={styles.exit}></Image>
          </TouchableOpacity>

          <View style={styles.rightthings}>
            <TouchableOpacity
              style={styles.servgift}
              onPress={() => alertbutton('선물 버튼입니다')}>
              <Image source={gift} style={styles.gift}></Image>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.qr}
              onPress={() => alertbutton('QR코드 버튼입니다')}>
              <Image source={qrcode} style={styles.qrcode}></Image>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.settings}
              onPress={() => alertbutton('설정 버튼입니다')}>
              <Image source={setting} style={styles.setting}></Image>
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity
          style={styles.profile}
          onPress={() => alertbutton('프로필입니다')}>
          <Image source={pro} style={styles.pro}></Image>
          <Text style={styles.name}>정소민</Text>
        </TouchableOpacity>

        <View style={styles.seperate}></View>

        <View style={styles.things}>
          <TouchableOpacity
            style={styles.chatting}
            onPress={() => alertbutton('채팅 버튼입니다')}>
            <Image source={chat} style={styles.chat}></Image>
            <Text style={styles.mychatting}>나와의 채팅</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.editprofile}
            onPress={() => alertbutton('프로필 편집 버튼입니다')}>
            <Image source={edit} style={styles.edit}></Image>
            <Text style={styles.proflieedit}>프로필 편집</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safearea: {
    flex: 1,
  },
  bg: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  profile: {
    alignItems: 'center',
    marginTop: 500,
  },
  pro: {
    width: 100,
    height: 100,
    borderRadius: 30,
  },
  name: {
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 18,
    color: '#ffffffff',
  },
  seperate: {
    width: '100%',
    height: 0.5,
    backgroundColor: '#fff',
    alignSelf: 'center',
    marginVertical: 30,
  },
  things: {
    flexDirection: 'row',
  },
  chatting: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    flex: 1,
  },
  chat: {
    width: 25,
    height: 25,
  },
  editprofile: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    flex: 1,
  },
  edit: {
    width: 30,
    height: 30,
  },
  mychatting: {
    color: '#fff',
    marginTop: 10,
    fontSize: 15,
  },
  proflieedit: {
    color: '#fff',
    marginTop: 10,
    fontSize: 15,
  },
  upthings: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    marginHorizontal: 18,
  },
  rightthings: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  exit: {
    width: 25,
    height: 25,
  },
  gift: {
    width: 25,
    height: 25,
  },
  qrcode: {
    width: 25,
    height: 25,
  },
  setting: {
    width: 25,
    height: 25,
  },
  servgift: {
    marginRight: 15,
  },
  qr: {
    marginRight: 15,
  },
  settings: {
    marginRight: 0,
  },
});

export default App;
