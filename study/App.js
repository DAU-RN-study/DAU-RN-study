import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  View,
  SafeAreaView
} from 'react-native';


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
};

const App = () => {
    return (           
            <SafeAreaView style={styles.container}>
                <ImageBackground source={images.background} resizeMode="cover">
                    <View style={styles.overlay}/>
                </ImageBackground>
            </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    overlay: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.4)', // 검정색 + 40% 투명
    },
    touchContainer: {
        backgroundColor: 'blue',
        paddingHorizontal: 50,
        paddingVertical: 20,
        margin: 20
    },
    text: {
        color: 'white',
        fontSize: 20
    }
})


export default App