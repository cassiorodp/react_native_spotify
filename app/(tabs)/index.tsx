import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CustomText } from '@/components/CustomText';

export default function Index() {
  return (
    <SafeAreaView>
      <CustomText>Index</CustomText>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
