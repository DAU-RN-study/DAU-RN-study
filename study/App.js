import React from 'react'
import {
    View,
    Text,
	StyleSheet,
	ScrollView,
    Linking,
    TouchableOpacity,
    SafeAreaView,
	Image,
	FlatList,
} from 'react-native'

import chatData from './DATA/DATA.json';
import chatImg from './image/week03_chat/chat.png';
import arrowImg from './image/week03_chat/left-arrow.png';
import magnifierImg from './image/week03_chat/magnifier.png';
import musicImg from './image/week03_chat/music.png';
import settingImg from './image/week03_chat/setting.png';
import profileImg from './image/profileimg.jpg';

const ChatItem = ({ item }) => (
  <View style={styles.chatItem}>
    <Image source={profileImg} style={styles.profileImg} />
    <View style={styles.chatTextContainer}>
      <View style={styles.chatHeader}>
        <Text style={styles.chatTitle}>{item.title}</Text>
        <Text style={styles.chatDate}>{item.date}</Text>
      </View>
      <Text style={styles.chatDescription}>{item.description}</Text>
    </View>
  </View>
);

const App = () => {
	return (
        <SafeAreaView style={{flex: 1}}>
			
		<ScrollView style={{flex: 1, padding: 10, backgroundColor: 'white'}}>
				{/* 상단 1 */}
				<View style={styles.highbar}>
						<Image source={arrowImg} style={styles.higharrow} />
						<Text style={styles.hightext}>KakaoChat</Text>
				</View>

				{/* 상단 2 */}
				<View style={styles.highfunction}>
					<View style={styles.highiconsLeft}>
						<Text style={styles.ChatText}>채팅</Text>
					</View>
					<View style={styles.highiconsRight}>
						<Image source={magnifierImg} style={styles.highicon}></Image>
						<Image source={chatImg} style={styles.highicon}></Image>
						<Image source={musicImg} style={styles.highicon}></Image>
						<Image source={settingImg} style={styles.highicon}></Image>
					</View>
				</View>

				{/* 상단 3 */}
				<View>
					<View style={styles.banner}>
						<Text style={styles.bannerText}>광고배너</Text>
					</View>
				</View>
				<FlatList
					data={chatData}
					renderItem={({ item }) => <ChatItem item={item} />}
					keyExtractor={(item) => item.id.toString()}
					contentContainerStyle={styles.chatList}
				/>
				

			</ScrollView>
        </SafeAreaView>
	)
}

const styles = StyleSheet.create({
	highbar: {
		flex: 0.1,
		flexDirection: 'row',     // 가로 정렬
  		alignItems: 'center',     // 세로 가운데 정렬
  		borderBottomWidth: 0.8,
  		borderBottomColor: 'rgba(24, 18, 18, 0.71)',
		marginBottom: 10,
	},
	higharrow: {
		width: 24,
  		height: 24,
  		marginRight: 12,   
		marginBottom: 5,
	},
	hightext: {
		fontSize: 20,
  		fontWeight: 'bold',
		marginBottom: 5,
	},

	highfunction: {
		flex: 0.1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
		marginBottom: 1,
	},

	highicon: {
		width: 24,
        height: 24,
        marginHorizontal: 5, // 아이콘 간 여백
	},

	highiconsRight: {
		flexDirection: 'row', 
        alignItems: 'center',
	},

	ChatText: {
		fontSize: 18,
  		fontWeight: 'bold',

	},

	banner: {
		backgroundColor: '#d1d1d1ff',
		borderRadius: 12,
		paddingVertical: 30,
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 3,    
		marginBottom: 3, 
	},

	bannerText: {
		fontSize: 16,
	},

	chatList: {
    padding: 10,
    backgroundColor: 'white',
	},

	chatItem: {
		flexDirection: 'row',
		marginBottom: 20,
		alignItems: 'flex-start',
	},

	profileImg: {
		width: 50,
		height: 50,
		borderRadius: 20,
		marginRight: 12,
	},
	chatTextContainer: {
		flex: 1,
		borderBottomWidth: 0.3,
		borderColor: '#ccc',
		paddingBottom: 10,
	},
	chatHeader: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	chatTitle: {
		fontSize: 16,
		fontWeight: 'bold',
	},
	chatDate: {
		fontSize: 12,
		color: 'gray',
	},
	chatDescription: {
		marginTop: 4,
		fontSize: 14,
		color: '#333',
	},

	// testContainer: {
	// 	borderRadius: 10,
	// 	justifyContent: 'center',
	// 	margin: 20
	// },
	// testText: {
	// 	fontSize: 25,
	// 	marginVertical: 70,
	// 	marginHorizontal: 20,
	// 	color: 'black'
	// },
	
})

export default App