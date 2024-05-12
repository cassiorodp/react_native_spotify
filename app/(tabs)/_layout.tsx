import { Redirect, Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { useTheme } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import useAuth from '@/hooks/useAuth';

export default function TabLayout() {
  const isAuthenticated = useAuth();
  const { colors } = useTheme();

  if (!isAuthenticated) {
    return <Redirect href="/" />;
  }

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.background,
          borderTopWidth: 0,
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.text,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Artistas',
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="disc-outline" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Playlists',
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="play-outline" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="user"
        options={{
          title: 'Perfil',
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="person-outline" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
