import { AmaticSC_400Regular, AmaticSC_700Bold } from '@expo-google-fonts/amatic-sc';
import { Inter_900Black, useFonts } from '@expo-google-fonts/inter';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import DayListItem from './src/components/core/DayList';


SplashScreen.preventAutoHideAsync();

const days = [...Array(30)].map((val, index) => index + 1);

export default function App() {
  const [ fontsLoaded, fontError] = useFonts({
    Inter: Inter_900Black,
    Amatic: AmaticSC_400Regular,
    AmaticBold: AmaticSC_700Bold
  });

  useEffect(() => {
    if (fontsLoaded &&  !fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError])

  if (!fontsLoaded && !fontError) {
    return null;
  }
  
  return (
    <View style={styles.container}>
      <FlatList data={days} contentContainerStyle={styles.content} numColumns={2} columnWrapperStyle={styles.column}
      renderItem={({ item }) => <DayListItem day={item} />} />
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
 
  column: {
    gap: 10,
  },
  content: {
    gap: 10,
    padding: 10,
  }
});
