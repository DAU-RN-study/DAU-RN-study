import React from 'react';
import {
  View,
  Text,
  Linking,
  FlatList,
  Image,
  Alert,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

import data from './data/data.js'
import arrowleft from './Image/arrowleft.png';
import messages from './Image/messages.png';
import settings from './Image/settings.png';
import profile from './Image/profilepic.jpg';
import music from './Image/music.png';
import glass from './Image/glass.png';

const App = () => {
  const showAlert = (text) => {
    Alert.alert("알림", `${text} 버튼을 눌렀습니다.`);
  };

  // 채팅 항목 UI
  const renderChat = ({ item }) => (
    <TouchableOpacity style={styles.chatBox} onPress={() => Alert.alert("알림", `${item.title}님과의 채팅입니다.`)}>
      <Image source={profile} style={styles.chatImage} />
      <View style={styles.chatBoxInfo}>
        <Text style={styles.titleText}>{item.title}</Text>
        <Text style={styles.descriptionText}>{item.description}</Text>
      </View>
      <View style={styles.chatBoxDate}>
        <Text style={styles.dateText}>{item.date}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.mainContainer}>
      {/* 상단 */}
      <View style={styles.navigationBar}>
        <TouchableOpacity onPress={() => showAlert('뒤로가기')}>
          <Image source={arrowleft} style={styles.navigationIcon} />
        </TouchableOpacity>
        <Text style={styles.navigationText}>KaKaoChat</Text>
      </View>

      {/* 툴바 */}
      <View style={styles.toolBar}>
        <View style={styles.toolBarLeft}>
          <Text style={styles.toolBarText}>채팅</Text>
        </View>
        <View style={styles.toolBarRight}>
          <TouchableOpacity onPress={() => showAlert("찾기")}>
            <Image source={glass} style={styles.toolBarIcon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => showAlert("오픈채팅")}>
            <Image source={messages} style={styles.toolBarIcon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => showAlert("음악")}>
            <Image source={music} style={styles.toolBarIcon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => showAlert("설정")}>
            <Image source={settings} style={styles.toolBarIcon} />
          </TouchableOpacity>
        </View>
      </View>

      {/* 구분선 */}
      <View style={styles.divider} />

      {/* 광고 배너 */}
      <TouchableOpacity style={styles.adBar} onPress={() => Linking.openURL('https://www.naver.com')}>
        <Text style={styles.adText}>광고 배너</Text>
      </TouchableOpacity>

      {/* 채팅 목록 */}
      <FlatList
        data={data}
        renderItem={renderChat}
        keyExtractor={(item) => item.id.toString()}
        ItemSeparatorComponent={() => <View style={styles.divider} />}
        contentContainerStyle={{ paddingBottom: 10 }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  navigationBar: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: '#e2e2e2',
  },
  navigationIcon: {
    height: 40,
    width: 40,
  },
  navigationText: {
    fontSize: 20,
    marginLeft: 30,
    color: 'black',
  },
  toolBar: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e2e2e2',
  },
  toolBarLeft: {
    flex: 1,
  },
  toolBarRight: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    flex: 1,
  },
  toolBarText: {
    fontSize: 20,
    color: 'black',
  },
  toolBarIcon: {
    width: 20,
    height: 20,
    marginHorizontal: 5,
  },
  divider: {
    height: 1,
    backgroundColor: 'gray',
    marginVertical: 5,
  },
  adBar: {
    height: 60,
    margin: 10,
    borderRadius: 10,
    backgroundColor: 'lightgray',
    justifyContent: 'center',
    alignItems: 'center',
  },
  adText: {
    fontSize: 25,
  },
  chatBox: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
  },
  chatImage: {
    width: 45,
    height: 45,
    borderRadius: 10,
    marginRight: 10,
  },
  chatBoxInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 15,
  },
  descriptionText: {
    fontSize: 10,
    color: '#555',
  },
  chatBoxDate: {
    marginLeft: 10,
  },
  dateText: {
    fontSize: 10,
    color: '#888',
  },
});

export default App;
