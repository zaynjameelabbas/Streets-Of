import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { styles } from '../components/styles/loginScreenStyles.js';
import { useNavigation } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';

import { View, TextField, Text, Image, TextInput } from 'react-native';

import { Input, InputField, InputIcon, InputSlot } from '@/components/ui/input';

import { EyeIcon, EyeOffIcon } from 'lucide-react-native';

import { signInWithEmailAndPassword, getAuth, fetchSignInMethodsForEmail } from 'firebase/auth';
import { auth } from '@/firebaseConfig';

const googleIcon = require('../assets/googleIcon.png');

export default function LoginScreen() {
   
    const navigation = useNavigation();

    const handleBackPress = () => {
        navigation.navigate('WelcomeScreen');
    };

    // Password 
    const [showPassword, setShowPassword] = useState(false);

    // const handleTogglePassword = () => {
    //     setShowPassword(!showShowPassword);
    // };

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const [identifier, setIdentifier] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // Login Function
    const handleLogin = async () => {
        try {
          // First, check if the identifier is an email
          const isEmail = identifier.includes('@');
          let email = identifier;
    
          if (!isEmail) {
            // If it's not an email, we need to find the corresponding email
            const methods = await fetchSignInMethodsForEmail(auth, `${identifier}@example.com`);
            if (methods.length > 0) {
              email = `${identifier}@example.com`;
            } else {
              throw new Error('User not found');
            }
          }
    
          const userCredential = await signInWithEmailAndPassword(auth, email, password);
          const user = userCredential.user;
          console.log('User logged in successfully:', user.email);
          navigation.navigate('HomeScreen');
        } catch (error) {
          console.error('Error logging in:', error.code, error.message);
          Alert.alert('Login Error', error.message);
        }
    };

    return (
        <View style={styles.container}>
            {/* Back Button */}
            <TouchableOpacity style={styles.backBtn}>
                <Ionicons 
                    style={styles.backBtn} 
                    name='chevron-back-outline'
                    onPress={handleBackPress} />
            </TouchableOpacity>

            {/* Title */}
            <Text style={styles.titleText}>Login</Text>

            {/* Input Fields */}
            <View style={styles.inputContainer}>
                <Text style={styles.inputHeading}>Username</Text>
                <View style={styles.inputWithBorder}>
                    <Ionicons name="person-outline" style={styles.inputIcon} />
                    <TextInput
                        placeholder="Enter your username"
                        placeholderTextColor="#FF0092"
                        style={styles.inputText}
                        value={identifier}
                        onChangeText={setIdentifier}
                    />
                </View>
            </View>

            {/* Password Input */}
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

            {/* Login Button */}
            <View style={styles.loginBtnContainer}>
                <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
                    <Text style={styles.loginBtnText}>Login Now!</Text>
                </TouchableOpacity>
            </View>

            {/* Forgot Password */}
            <View style={styles.forgotPasswordContainer}>
                <Text style={styles.forgotPasswordText}>
                    Forgot password? <Text style={styles.forgotPasswordLink}>Reset it here</Text>
                </Text>
            </View>

            {/* Divider */}
            <View style={styles.dividerContainer}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>or sign in with</Text>
            <View style={styles.dividerLine} />
            </View>

            {/* Google Button */}
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.googleBtn}>
                    <Image source={googleIcon} style={styles.googleIcon}/>
                    <Text style={styles.googleBtnText}>Continue with Google</Text>
                </TouchableOpacity>
            </View>

            {/* App Name */}
            <Text style={styles.titleText}>Streets Of...</Text>
        
        </View>
    );
}
