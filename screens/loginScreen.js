import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { styles } from '../components/styles/styles.js';
import { BsChevronLeft } from "react-icons/bs";
import { useNavigation } from '@react-navigation/native';
const googleIcon = require('../assets/googleIcon.png');

export default function LoginScreen() {
    
    const navigation = useNavigation();

    const handleBackPress = () => {
        navigation.navigate('WelcomeScreen');
    };

    return (
        <View>
            <TouchableOpacity style={styles.backBtn} onPress={handleBackPress}>
                <BsChevronLeft size={24} color="#FF0092" />
            </TouchableOpacity>

            <Text>Login</Text>
            
        </View>
    );
}