// App.js (또는 메인 내비게이터 파일)

import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// 각 탭에 표시될 화면 컴포넌트
function HomeScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>홈 화면입니다!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>설정 화면입니다!</Text>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>프로필 화면입니다!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'tomato', // 활성화된 탭 아이콘 및 텍스트 색상
        tabBarInactiveTintColor: 'gray', // 비활성화된 탭 아이콘 및 텍스트 색상
        tabBarLabelStyle: {fontSize: 12}, // 탭 라벨 스타일
        tabBarStyle: {backgroundColor: '#f0f0f0'}, // 탭 바 배경색
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: '홈', // 탭에 표시될 이름
          // tabBarIcon: ({ color, size }) => ( // 탭 아이콘을 추가할 수 있습니다.
          //   <Ionicons name="home" color={color} size={size} />
          // ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          title: '설정',
          // tabBarIcon: ({ color, size }) => (
          //   <Ionicons name="settings" color={color} size={size} />
          // ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: '프로필',
          // tabBarIcon: ({ color, size }) => (
          //   <Ionicons name="person" color={color} size={size} />
          // ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
