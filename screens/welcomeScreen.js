import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
// import s    tyles from './components/styles/mainStyles.css';
import { styles } from '../components/styles/styles.js';

const googleIcon = require('../assets/googleIcon.png');

export default function WelcomeScreen() {
    return (
      <View style={styles.container}>
        {/* Title */}
        <View style={styles.titleView}>
          <Text style={styles.titleText}>Streets</Text>
          <Text style={styles.titleText}>Of...</Text>
        </View>

        {/* Button Container */}
        <View style={styles.buttonContainer}>
          {/* Login Button */}
          <TouchableOpacity style={styles.loginBtn}>
              <Text style={styles.loginBtnText}>Login Now!</Text>
          </TouchableOpacity>

          {/* Google Button */}
          <TouchableOpacity style={styles.googleBtn}>
              <Image source={googleIcon} style={styles.googleIcon}/>
              <Text style={styles.googleBtnText}>Continue with Google</Text>
          </TouchableOpacity>

          {/* Divider */}
          <View style={styles.dividerContainer}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>OR</Text>
            <View style={styles.dividerLine} />
          </View>

          {/* Create Account Button */}
          <View style={styles.container}>
            <TouchableOpacity style={styles.loginBtn}>
              <Text style={styles.loginBtnText}>Create a Free Account!</Text>
            </TouchableOpacity>
            <StatusBar style="auto" />
          </View>
        </View>

      </View>
    );
}
