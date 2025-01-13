import React, { useEffect, useState, useRef } from 'react';
import { View, Text, TouchableOpacity, Animated } from 'react-native';
import { styles } from '@/components/styles/homeScreenStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { auth } from "@/firebaseConfig";
import { Ionicons } from '@expo/vector-icons';


export default function HomeScreen() {
// State management for user data
const [userData, setUserData] = useState(null);
const navigation = useNavigation();

// Create animated value for card
const cardScale = useRef(new Animated.Value(1)).current;
const cardRotation = useRef(new Animated.Value(0)).current;

// Pulse animation
const pulseCard = () => {
    Animated.sequence([
        Animated.spring(cardScale, {
            toValue: 1.05,
            useNativeDriver: true,
            friction: 3,
        }),
        Animated.spring(cardScale, {
            toValue: 1,
            useNativeDriver: true,
            friction: 3,
        }),
    ]).start();
};

// Floating animation
useEffect(() => {
    Animated.loop(
        Animated.sequence([
            Animated.timing(cardRotation, {
                toValue: 1,
                duration: 2000,
                useNativeDriver: true,
            }),
            Animated.timing(cardRotation, {
                toValue: 0,
                duration: 2000,
                useNativeDriver: true,
            }),
        ])
    ).start();
}, []);

const animatedStyles = {
    transform: [
        { scale: cardScale },
        {
            translateY: cardRotation.interpolate({
                inputRange: [0, 1],
                outputRange: [0, -10],
            }),
        },
    ],
};

// Fetch user data from AsyncStorage when the component mounts
useEffect(() => {
  const fetchUserData = async () => {
    try {
      const userDataString = await AsyncStorage.getItem('userData');
      if (userDataString) {
        const parsedUserData = JSON.parse(userDataString);
        setUserData(parsedUserData);
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  fetchUserData();
}, []);

// Handle logout and clear user data (Redirect to WelcomeScreen)
const handleLogout = async () => {
  try {
    await auth.signOut();
    await AsyncStorage.clear();
    navigation.reset({
      index: 0,
      routes: [{ name: 'WelcomeScreen' }],
    });
  } catch (error) {
    console.error('Error logging out:', error);
  }
};

// Navigation handler functions
// Naviagate to GameScreen
const handlePlayGame = () => {
  navigation.navigate('GameScreen');
};

// Navigate to CardPacksScreen
const handleCardPacks = () => {
  navigation.navigate('CardPacksScreen');
};

// Navigate to AccoladesScreen
const handleAccolades = () => {
  navigation.navigate('AccoladesScreen');
};

// Navigate to SettingsScreen
const handleSettings = () => {
  navigation.navigate('SettingsScreen');
};

// Navigate to EditProfileScreen
const handleEditProfile = () => {
  navigation.navigate('EditProfileScreen');
};

const [menuVisible, setMenuVisible] = useState(false);

return (
  <View style={styles.container}>
    {/* Hamburger Menu */}
    <TouchableOpacity
      style={styles.menuButton}
      onPress={() => setMenuVisible(!menuVisible)}
    >
      <Ionicons name="menu" style={styles.menuIcon} />
    </TouchableOpacity>  

    {menuVisible && (
      <View style={styles.menuContent}>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={handleSettings}
        >
          <Text style={styles.menuItemText}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.menuItem} 
          onPress={handleEditProfile}
        >
          <Text style={styles.menuItemText}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.menuItem} 
          onPress={handleLogout}
        >
          <Text style={styles.menuItemText}>Logout</Text>
        </TouchableOpacity>
      </View>
    )}
    {/* Title Section */}
    <View style={styles.titleSection}>
        <Text style={styles.titleText}>Streets Of</Text>
    </View>

    {/* Center Play Card */}
    <TouchableOpacity onPress={pulseCard}>
        <Animated.View style={[styles.playCard, animatedStyles]}>
            <Text style={styles.playCardText}>
                Hi <Text style={styles.playCardUsername}>{userData?.userName}</Text>{'\n'}
                Let's play!
            </Text>
            <Ionicons 
                name="beer-outline" 
                size={64} 
                color="#ff0092" 
                style={styles.cardIcon}
            />
        </Animated.View>
    </TouchableOpacity>
    
    {/* Bottom Navigation */}
    <View style={styles.bottomNav}>
      <TouchableOpacity style={styles.sideButton} onPress={handleCardPacks}>
        <Ionicons name="layers" size={24} color="#ff0092" />
        <Text style={[styles.buttonText, {color: '#ff0092'}]}>Packs</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.centerButton} onPress={() => navigation.navigate('HomeScreen')}>
        <Ionicons name="home" size={30} color="#ffffff" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.sideButton} onPress={handleAccolades}>
        <Ionicons name="trophy" size={24} color="#ff0092" />
        <Text style={[styles.buttonText, {color: '#ff0092'}]}>Accolades</Text>
      </TouchableOpacity>
    </View>

  </View>
  );
}
