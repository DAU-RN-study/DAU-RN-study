// App.js
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

import { DATA } from './DATA/data.js';

const App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        {DATA.map((item) => (
          <TouchableOpacity key={item.id} style={styles.chatItem}>
            <Image
              source={require('./image/profile.png')}
              style={styles.avatar}
            />
            <View style={styles.textContainer}>
              <View style={styles.headerRow}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.date}>{item.date}</Text>
              </View>
              <Text style={styles.description} numberOfLines={1}>
                {item.description}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    paddingBottom: 20,
  },
  chatItem: {
    flexDirection: 'row',
    padding: 14,
    borderBottomWidth: 0.5,
    borderColor: '#ddd',
    backgroundColor: '#fff',
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 20,
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    maxWidth: '70%',
  },
  date: {
    fontSize: 12,
    color: '#888',
  },
  description: {
    fontSize: 14,
    color: '#444',
  },
});

export default App;
