import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { CustomText } from '@/components/CustomText';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function User() {
  return (
    <SafeAreaView>
      <CustomText>User</CustomText>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
