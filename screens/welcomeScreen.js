import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';
// import s    tyles from './components/styles/mainStyles.css';
import { styles } from '../components/styles/styles.js';

export default function welcomeScreen() {
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>Streets</Text>
        <Text style={styles.titleText}>Of...</Text>
        <Pressable style={styles.loginBtn}>
            <Text>Continue with Google</Text>
        </Pressable>
        <Pressable style={styles.googleBtn}>
            <Text>Login</Text>
        </Pressable>
        <Text style={styles.pinkText}>------ Or</Text>
        <StatusBar style="auto" />
      </View>
    );
}
