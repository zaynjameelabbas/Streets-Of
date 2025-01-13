import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { useNavigation } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { styles } from "@/components/styles/signUpScreenStyle";
import { auth, db } from "@/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SignUpScreen() {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleBackPress = () => {
    navigation.navigate('WelcomeScreen');
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const createUser = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      
      const userData = {
        userEmail: user.email,
        userName: username,
        createdAt: new Date().toISOString(),
      };

      await setDoc(doc(db, 'user', user.uid), userData);
      await AsyncStorage.setItem('userData', JSON.stringify(userData));

      console.log('User created and logged in successfully:', user.email);
      navigation.navigate('HomeScreen');
    } catch (error) {
      console.error('Error creating user:', error.code, error.message);
      Alert.alert('Sign Up Error', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backBtn} onPress={handleBackPress}>
        <Ionicons name='chevron-back-outline' style={styles.backBtn} />
      </TouchableOpacity>

      <Text style={styles.titleText}>Sign Up!</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.inputHeading}>Email</Text>
        <View style={styles.inputWithBorder}>
          <Ionicons name="mail-outline" style={styles.inputIcon} />
          <TextInput
            placeholder="Enter your email"
            placeholderTextColor="#FF0092"
            style={styles.inputText}
            value={email}
            onChangeText={setEmail}
          />
        </View>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputHeading}>Username</Text>
        <View style={styles.inputWithBorder}>
          <Ionicons name="person-outline" style={styles.inputIcon} />
          <TextInput
            placeholder="Enter your username"
            placeholderTextColor="#FF0092"
            style={styles.inputText}
            value={username}
            onChangeText={setUsername}
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

      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.signUpBtn} onPress={createUser}>
          <Text style={styles.signUpBtnText}>Sign Up!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
