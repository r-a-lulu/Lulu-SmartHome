import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function SettingsScreen() {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.tab}>
                <Link href="/"><Ionicons name="arrow-back" size={24} color="black" /></Link>
                <Text style={styles.title}>Settings</Text>
            </View>
            <View style={styles.bg}>
                <View style={styles.main}>
                    <Text style={styles.header}>Settings</Text>
                    <View style={styles.list}>
                        <Text style={styles.listText}>Notifications</Text>
                        <FontAwesome name="toggle-off" size={24} color="black" />
                    </View>
                    <View style={styles.list}>
                        <Text style={styles.listText}>Temperature Unit</Text>
                        <Text>°C</Text>
                    </View>
                </View>
                
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
    flex: 1,
    backgroundColor: '#000000'
  },
  tab: {
    height: 65,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    paddingLeft: 20
  },
  title: {
    color: '#080808',
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 20
  },
  bg: {
    flex: 1,
    backgroundColor: '#f5f4f4'
  },
  main: {
    marginHorizontal: 20,
    marginTop: 30
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20
  },
  list: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'black'
  },
  listText: {
    fontWeight: 'bold'
  }
});