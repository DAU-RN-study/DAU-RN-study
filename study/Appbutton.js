import React from 'react'
import {
    SafeAreaView,
    Text,
    Button,
    View
} from 'react-native'

const App = () => {
    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={{alignItems: 'center', margin: 10}}>
                <Text style={{fontSize: 20}}>버튼을 클릭해보세요</Text>
            </View>
            <Button
							onPress={() => console.log('버튼을 클릭했습니다.')}
							title="BUTTON" // 버튼 안에 이름
							color="#191919"
						/> 
        </SafeAreaView>
    )
}

export default App