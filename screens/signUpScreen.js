import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, Alert, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { styles } from "@/components/styles/signUpScreenStyle";
import { Input, InputField, InputIcon, InputSlot } from '@/components/ui/input';
import { EyeIcon, EyeOffIcon } from 'lucide-react-native';

import { auth } from "@/firebaseConfig";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";


export default function SignUpScreen() {
    
    const navigation = useNavigation();

    const handleBackPress = () => {
        navigation.navigate('WelcomeScreen');
    };

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const createUser = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                return updateProfile(user, {
                    displayName: username
                }).then(() => {
                    console.log("User created successfully:", user.email);
                    console.log("Username set:", username);
                    Alert.alert("Success", `User ${user.email} created successfully with username: ${username}!`);
                    // Navigate to the HomeScreen
                    navigation.navigate('HomeScreen');
                });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error("Error creating user:", errorCode, errorMessage);
                Alert.alert("Error creating user", `${errorCode}: ${errorMessage}`);
            });
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
            <Text style={styles.titleText}>Sign Up!</Text>

            {/* Email Input */}
            <View style={styles.inputContainer}>
                <Text style={styles.inputHeading}>Email</Text>
                <Input variant="outline" size="md" style={styles.inputWithBorder}>
                    <InputSlot style={styles.inputSlot}>
                        <InputIcon as={Ionicons} name="mail-outline" style={styles.inputIcon} />
                    </InputSlot>
                    <InputField
                        placeholder="Enter your email"
                        placeholderTextColor="#FF0092"
                        style={styles.inputText}
                        value={email}
                        onChangeText={setEmail}
                    />
                </Input>
            </View>

            {/* Username Input */}
            <View style={styles.inputContainer}>
                <Text style={styles.inputHeading}>Username</Text>
                <Input variant="outline" size="md" style={styles.inputWithBorder}>
                    <InputSlot style={styles.inputSlot}>
                        <InputIcon as={Ionicons} name="person-outline" style={styles.inputIcon} />
                    </InputSlot>
                    <InputField 
                        placeholder="Enter your username"
                        placeholderTextColor="#FF0092"
                        style={styles.inputText}
                        value={username}
                        onChangeText={setUsername}
                    />
                </Input>
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

            {/* Sign Up Button */}
            <View style={styles.btnContainer}>
                <TouchableOpacity style={styles.signUpBtn} onPress={createUser}>
                    <Text style={styles.signUpBtnText}>Sign Up!</Text>
                </TouchableOpacity>
            </View>

        
        </View>
    );
}