import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';

export default function PlaylistsLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen
        name="playlist-modal"
        options={{
          presentation: 'modal',
        }}
      />
    </Stack>
  );
}

const styles = StyleSheet.create({});
