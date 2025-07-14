import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  View,
  SafeAreaView,
  Text

} from 'react-native';
/*import {
  SafeAreaView,
} from 'react-native-safe-area-context';*/


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
                <ImageBackground source={images.background} resizeMode="cover" style={{ flex: 1 }}>
                    <View style={styles.overlay}>
                    </View>
                </ImageBackground>
            </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        flex:1,
    },
    touchContainer: {
        backgroundColor: 'blue',
    },
    text: {
        color: 'white',
        fontSize: 20
    }
})

export default App