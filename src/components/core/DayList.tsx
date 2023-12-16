import { StyleSheet, Text, View } from "react-native";

type DayListItem = {
    day: number;
}
export default function DayListItem({ day }: DayListItem)  {
    return (
        <View style={styles.box}>
            <Text style={styles.text}>Day &nbsp;{day}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      // alignItems: 'center',
      // justifyContent: 'center',
    },
    box: {
      backgroundColor: '#F9EDE3',
      flex: 1,
      aspectRatio: 1,
      // width: 300,
      // height: 300,
  
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: '#9b4521',
      borderRadius: 20,
  
      justifyContent: 'center',
      alignItems: 'center',
    },
    column: {
      gap: 10,
    },
    content: {
      gap: 10,
      padding: 10,
    },
    text: {
      color: '#9b4521',
      fontSize: 70,
    }
  });