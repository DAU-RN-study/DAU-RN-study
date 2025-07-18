import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  Image,
  Alert,
  TouchableOpacity,
} from 'react-native';

const EditProfile = () => {
  Alert.alert(
    '프로필 편집',
    '프로필 편집 버튼입니다.',
    [
      {
        text: 'CANCEL',
        onPress: () => console.log('취소'),
        style: 'cancel'
      },
      {
        text: 'OK',
        onPress: () => console.log('확인')
      }
    ]
  );
};

const images = {
  background: require('./Image/backgroundpic.jpg'),
  profile: require('./Image/profilepic.jpg'),
  arrow: require('./Image/arrowleft.png'),
  cross: require('./Image/cross.png'),
  gift: require('./Image/gift.png'),
  pencil: require('./Image/pencil.png'),
  qr: require('./Image/qr.png'),
  quote: require('./Image/quote.png'),
  settings: require('./Image/settings.png'),
  messages: require('./Image/messages.png'),
};

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image source={images.arrow} style={styles.arrow} />
        <Text style={styles.headerText}>KakaoProfile</Text>
      </View>

      <ImageBackground source={images.background} resizeMode="cover" style={styles.flex1}>
        <View style={styles.overlay}>
          <View style={styles.topContainer}>
            <Image source={images.cross} style={styles.icon} />
            <View style={styles.rightIcons}>
              <Image source={images.gift} style={styles.icon} />
              <Image source={images.qr} style={styles.icon} />
              <Image source={images.settings} style={styles.icon} />
            </View>
          </View>

          <View style={styles.profileSection}>
            <Image source={images.profile} style={styles.profileImage} />
            <Text style={styles.profileName}>류화영</Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.bottomMenu}>
            <View style={styles.menu}>
              <Image source={images.messages} style={styles.iconMedium} />
              <Text style={styles.menuText}>나와의 채팅</Text>
            </View>
            <View style={styles.menu}>
                <TouchableOpacity style={styles.menu} onPress={EditProfile}>
                    <Image source={images.pencil} style={styles.iconMedium} />
                    <Text style={styles.menuText}>프로필 편집</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.menu}>
              <Image source={images.quote} style={styles.iconMedium} />
              <Text style={styles.menuText}>카카오스토리</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  flex1: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    height: 40,
    backgroundColor: '#d6d6d6',
  },
  headerText: {
    fontSize: 16,
    marginLeft: 10,
    fontWeight: '600',
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 480,
  },
  rightIcons: {
    flexDirection: 'row',
    gap: 10,
  },
  arrow: {
    width: 28,
    height: 28,
    marginHorizontal: 5,
  },
  icon: {
    width: 23,
    height: 23,
    marginHorizontal: 5,
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 25,
    marginBottom: 10,
  },
  profileName: {
    color: 'white',
    fontSize: 18,
  },
  divider: {
    height: 1,
    backgroundColor: '#fff',
    marginBottom: 30,
  },
  bottomMenu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  menu: {
    alignItems: 'center',
  },
  iconMedium: {
    width: 27,
    height: 27,
    marginBottom: 5,
  },
  menuText: {
    color: 'white',
    fontSize: 12,
  },
});

export default App;
