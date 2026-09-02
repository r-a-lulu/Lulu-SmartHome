import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from 'expo-router';
import Feather from '@expo/vector-icons/Feather';
import Foundation from '@expo/vector-icons/Foundation';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.tab}>
        <Text style={styles.title}>Smart Home</Text>
      </View>
      <View style={styles.dashboard}>
        <View style={styles.dashboardHeader}>
          <Text style={styles.dashboardHeaderText}>Smart Home</Text>
          <Link href="/settings" asChild><Feather name="settings" size={40} color="#2e71dd" /></Link>
          
        </View>
        <View style={styles.dashboardMainContainer}>
          <Ionicons name="thermometer-outline" size={60} color="#2e71dd" />
          <Text style={{fontSize: 50}}>26°C</Text>
          <Text>Living Room</Text>
        </View>
        <View style={styles.dashboardRow}>
          <View style={styles.dashboardBox}>
            <Foundation name="lightbulb" size={43} color="#2e71dd" />
            <Text style={styles.boxText}>Light</Text>
            <Text style={styles.boxSubText}>ON</Text>
          </View>
          <View style={styles.dashboardBox}>
            <FontAwesome5 name="snowflake" size={40} color="#2e71dd" />
            <Text style={styles.boxText}>AC</Text>
            <Text style={styles.boxSubText}>24°C</Text>
          </View>
        </View>
        <View style={styles.dashboardRow}>
          <View style={styles.dashboardBox}>
            <FontAwesome5 name="lock" size={40} color="#2e71dd" />
            <Text style={styles.boxText}>Door</Text>
            <Text style={styles.boxSubText}>LOCKED</Text>
          </View>
          <View style={styles.dashboardBox}>
            <FontAwesome5 name="camera" size={40} color="#2e71dd" />
            <Text style={styles.boxText}>Camera</Text>
            <Text style={styles.boxSubText}>ON</Text>
          </View>
        </View>
        <View style={styles.viewDevices}>
          <Link href="/devices"><Text style={{fontSize: 15, fontWeight: 'bold'}}>View All Devices ➔</Text></Link>
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
    alignItems: 'flex-start',
    justifyContent: 'center',
    
  },
  dashboard: {
    flex: 1,
    backgroundColor: '#f5f4f4'
  },
  title: {
    color: '#080808',
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 20
  },
  dashboardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 30,
    paddingLeft: 20,
    paddingRight: 20,
  },
  dashboardHeaderText: {
    fontSize: 30
  },
  dashboardMainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 12,
    borderColor: '#000000',
    margin: 20
  },
  dashboardRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
    gap: 15
  },
  dashboardBox: {
    minHeight: 130,
    minWidth: 170,
    marginBottom: 16,
    borderWidth: 1,
    borderRadius: 12,
    borderColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center'
  },
  viewDevices: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  boxText: {
    fontWeight: 'bold',
    padding: 5,
    fontSize: 15
  },
  boxSubText: {

  }
});