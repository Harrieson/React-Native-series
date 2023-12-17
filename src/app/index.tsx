import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, View } from 'react-native';
import DayListItem from '../components/core/DayList';


SplashScreen.preventAutoHideAsync();

const days = [...Array(30)].map((val, index) => index + 1);

export default function Home() {  
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
