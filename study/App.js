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
				<View style={styles.yblue}>
					<View style={styles.yel}></View>
					<View style={styles.blu}></View>
				</View>
				<View style={styles.wbb}>
					<View style={styles.whi}></View>
					<View style={styles.bb}>
						<View style={styles.wb}>
							<View style={styles.white}></View>
							<View style={styles.blue}></View>
						</View>
						<View style={styles.bla}></View>
					</View>
				</View>
			</View>
			<View style={styles.second}>
				<View style={styles.red}></View>
				<View style={styles.yb}>
					<View style={styles.yellow}></View>
					<View style={styles.black}></View>
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
		backgroundColor: "white",
		flex: 6,
		flexDirection: 'row-reverse',
	},
	yblue:{
		backgroundColor: "blue",
		flex: 1,
		flexDirection: 'column',
	},
	yel:{
		backgroundColor: "yellow",
		flex: 1,
	},
	blu:{
		backgroundColor: "blue",
		flex: 2,
	},
	wbb:{
		backgroundColor: "white",
		flex: 2,
		flexDirection: 'column-reverse',
	},
	whi:{
		backgroundColor: "white",
		flex: 1,
	},
	bb:{
		backgroundColor: "black",
		flex: 1,
		flexDirection: 'row',
	},
	wb:{
		backgroundColor: "white",
		flex: 1,
		flexDirection: 'column',
	},
	white:{
		backgroundColor: "white",
		flex: 2,
	},
	blue:{
		backgroundColor: "blue",
		flex: 1,
	},
	bla:{
		backgroundColor: "black",
		flex: 0.9,
	},
	second:{
		backgroundColor: "red",
		flex: 2,
	},
	red:{
		backgroundColor: "red",
		flex: 1,
	},
	yb:{
		backgroundColor: "yellow",
		flex: 1,
		flexDirection : "row"
	},
	yellow:{
		backgroundColor: "yellow",
		flex: 1,
	},
	black:{
		backgroundColor: "black",
		flex: 2,
	},
})

export default App