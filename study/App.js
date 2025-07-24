import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import data from './data/data.js'

const ChatItem = ({ title, description, date }) => {
  return (
    <TouchableOpacity style={styles.itemContainer}>
      <Image
        source={require('./Image/profilepic.jpg')} // 프로필 이미지 (임시)
        style={styles.profileImage}
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text numberOfLines={1} style={styles.description}>
          {description}
        </Text>
      </View>
      <Text style={styles.date}>{date}</Text>
    </TouchableOpacity>
  );
};

const app = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ChatItem
            title={item.title}
            description={item.description}
            date={item.date}
          />
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </SafeAreaView>
  );
};

export default app;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 15,
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  description: {
    fontSize: 13,
    color: '#555',
  },
  date: {
    fontSize: 12,
    color: '#999',
    marginLeft: 10,
  },
  separator: {
    height: 0.5,
    backgroundColor: '#e0e0e0',
    marginHorizontal: 16,
  },
});
