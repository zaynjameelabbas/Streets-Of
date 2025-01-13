import React, { useState } from 'react';
import { TouchableOpacity, View, Text, Image, TextInput, Alert } from 'react-native';
import { styles } from '../components/styles/loginScreenStyles.js';
import { useNavigation } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from '@/firebaseConfig';
import AsyncStorage from '@react-native-async-storage/async-storage';

const googleIcon = require('../assets/googleIcon.png');

export default function LoginScreen() {
  const navigation = useNavigation();
  const [showPassword, setShowPassword] = useState(false);
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');

  const handleBackPress = () => {
    navigation.navigate('WelcomeScreen');
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async () => {
    try {
      const isEmail = identifier.includes('@');
      let email = isEmail ? identifier : `${identifier}@example.com`;
  
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
  
      const userDoc = await getDoc(doc(db, 'user', user.uid));
      if (userDoc.exists()) {
        const userData = userDoc.data();
        await AsyncStorage.setItem('userData', JSON.stringify(userData));
        console.log('User logged in successfully:', userData.userEmail);
        navigation.navigate('HomeScreen');
      } else {
        throw new Error('User data not found in Firestore');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      Alert.alert("Login Error", error.message);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backBtn} onPress={handleBackPress}>
        <Ionicons style={styles.backBtn} name='chevron-back-outline' />
      </TouchableOpacity>

      <Text style={styles.titleText}>Login</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.inputHeading}>Username or Email</Text>
        <View style={styles.inputWithBorder}>
          <Ionicons name="person-outline" style={styles.inputIcon} />
          <TextInput
            placeholder="Enter your username or email"
            placeholderTextColor="#FF0092"
            style={styles.inputText}
            value={identifier}
            onChangeText={setIdentifier}
          />
        </View>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputHeading}>Password</Text>
        <View style={styles.inputWithBorder}>
          <Ionicons name="lock-closed-outline" style={styles.inputIcon} />
          <TextInput
            placeholder="Enter your password"
            placeholderTextColor="#FF0092"
            style={styles.inputText}
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity onPress={toggleShowPassword}>
            <Ionicons
              name={showPassword ? "eye-outline" : "eye-off-outline"}
              style={styles.inputIconEye}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.loginBtnContainer}>
        <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
          <Text style={styles.loginBtnText}>Login Now!</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.forgotPasswordContainer}>
        <Text style={styles.forgotPasswordText}>
          Forgot password? <Text style={styles.forgotPasswordLink}>Reset it here</Text>
        </Text>
      </View>

      <View style={styles.dividerContainer}>
        <View style={styles.dividerLine} />
        <Text style={styles.dividerText}>or sign in with</Text>
        <View style={styles.dividerLine} />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.googleBtn}>
          <Image source={googleIcon} style={styles.googleIcon}/>
          <Text style={styles.googleBtnText}>Continue with Google</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.titleText}>Streets Of...</Text>
    </View>
  );
}
