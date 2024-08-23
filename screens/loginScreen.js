import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { styles } from '../components/styles/loginScreenStyles.js';
import { useNavigation } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';

import { View, TextField, Text, Image } from 'react-native';

import { Input, InputField, InputIcon, InputSlot } from '@/components/ui/input';

import { EyeIcon, EyeOffIcon } from 'lucide-react-native';

const googleIcon = require('../assets/googleIcon.png');

export default function LoginScreen() {
   
    const navigation = useNavigation();

    const handleBackPress = () => {
        navigation.navigate('WelcomeScreen');
    };

    // Password 
    const [showPassword, setPassword] = useState(false);

    const handleTogglePassword = () => {
        setPassword(!showPassword);
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
                <Text style={styles.inputHeading}>Username or Email</Text>
                <Input 
                    variant='outline' 
                    size='lg' 
                    style={styles.input}
                >
                    <InputField 
                        placeholder='Enter...' 
                        style={styles.inputText}
                    />
                </Input>

                <Text style={styles.inputHeading}>Password</Text>
                <Input variant='outline' size='lg' style={styles.input}>
                    <InputField 
                        placeholder='Enter...' 
                        type={showPassword ? "text" : "password"}
                        style={styles.inputText}
                    />
                    <InputSlot onPress={handleTogglePassword} style={styles.inputSlot}>
                        <InputIcon style={styles.inputIcon}>
                            {showPassword ? 
                                <EyeIcon  /> 
                                : <EyeOffIcon  />}
                        </InputIcon>
                    </InputSlot>
                </Input>
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
