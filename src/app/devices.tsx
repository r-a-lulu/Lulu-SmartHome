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
                <Text style={styles.title}>Devices</Text>
            </View>
            <View style={styles.bg}>
                <View style={styles.main}>
                    <Text style={styles.header}>My Devices</Text>
                    <View style={styles.list}>
                        <View>
                            <Text style={styles.listText}>Light</Text>
                            <Text>Living Room</Text>
                        </View>
                        <Text>ON</Text>
                    </View>
                    <View style={styles.list}>
                        <View>
                            <Text style={styles.listText}>Air Conditioner</Text>
                            <Text>Living Room</Text>
                        </View>

                        <Text>24°C</Text>
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
        marginTop: 40
    },
    header: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20
    },
    list: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        borderWidth: 1,
        borderRadius: 12,
        borderColor: 'black',
        marginTop: 10
    },
    listText: {
        fontSize: 17,
        fontWeight: 'bold'
    }
});