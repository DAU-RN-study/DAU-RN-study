import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// 컴포넌트 경로
import HomeStack from '../components/HomeScreen/HomeNavigator/HomeStackNavigator';
import ProfileScreen from '../components/ProfileScreen/ProfileScreen';
import SettingsScreen from '../components/SettingScreen/SettingScreen';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
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
        component={HomeStack} // 여기서 home컴포넌트를 바로 불러오는게 아니라 스택 네비게이션으 불러옵니다.
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
