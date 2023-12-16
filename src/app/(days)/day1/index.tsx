import { Stack } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'

const DayOne = () => {
  return (
    <View>
      <Stack.Screen options={{ title: 'Day 1'}} />
      <Text>DayOne</Text>
    </View>
  )
}

export default DayOne