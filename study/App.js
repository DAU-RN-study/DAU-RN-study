// import React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
// import BottomTabNavigator from './BottomTabNavigator/BottomTabNavigator';

// export default function App() {
//   return (
//     <NavigationContainer>
//       <BottomTabNavigator />
//     </NavigationContainer>
//   );
// }

import React from 'react'
import {
	View,
  Text,
	StyleSheet,
	ScrollView,
  TouchableOpacity,
  Linking
} from 'react-native'

import DATA from './DATA/DATA.json'

const SearchButton = ({ name, url, color }) => {
	return (
		<TouchableOpacity style={[styles.button, {backgroundColor: color}]} onPress={() => Linking.openURL(url)}>
			<Text style={styles.buttonText}>Go to {name}</Text>
		</TouchableOpacity>
	)
}

const App = () => {
	return (
		<ScrollView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.header}>
			  <Text style={styles.title}>검색 엔진 모음</Text>
			</View>

      {DATA.page.map((item, index) => (
        <SearchButton
          key={index}
          name={item.name}
          url={item.url}
          color={item.mainColor}
          />
      ))}
		</ScrollView>
	)
}

const styles = StyleSheet.create({
  header:{
    alignItems:'center',
    marginTop: 30
  },
	title: {
    fontSize: 30,
    color: 'gray',
    fontWeight: '500'
	},
	button: {
		margin: 30,
    borderRadius: 30,
    paddingVertical: 20,
    paddingHorizontal: 10,
    alignItems: 'center'
	},
  buttonText: {
    fontSize: 20,
    color: 'white',
    fontWeight: '600'
  }
})

export default App