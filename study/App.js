import React from 'react'
import {
	View,
  Text,
	StyleSheet,
	ScrollView,
	Image
} from 'react-native'


const App = () => {
	return (
		<View style={styles.container}>
			<View style={styles.first}>
				<Text>powderblue</Text>
			</View>
			<View style={styles.second}>
				<View style={styles.pink}>
					<Text>pink</Text>
				</View>
				<View style={styles.else}>
					<View style={styles.lavender}>
						<Text>lavender</Text>
					</View>
					<View style={styles.yellow}>
						<Text>yellow</Text>
					</View>

				</View>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container:{
		backgroundColor: "red",
		flex: 1,
		flexDirection: 'column',
	},
	first:{
		backgroundColor: "powderblue",
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
	second:{
		backgroundColor: "pink",
		flex: 3,
		flexDirection : "row-reverse"
	},
	pink:{
		backgroundColor: "pink",
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	else:{
		backgroundColor: "yellow",
		flex: 1,
		flexDirection : "column-reverse"
	},
	lavender:{
		backgroundColor: "lavender",
		flex: 2,
		justifyContent: 'center',
		alignItems: 'center',
	},
	yellow:{
		backgroundColor: "yellow",
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
})

export default App