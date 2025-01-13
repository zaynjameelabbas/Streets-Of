import React, { useCallback, useEffect, useState } from 'react';
import "@/global.css";
import { View } from 'react-native';
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { auth } from "@/firebaseConfig";
import AsyncStorage from '@react-native-async-storage/async-storage';

// Screens
import WelcomeScreen from './screens/welcomeScreen';
import LoginScreen from './screens/loginScreen';
import SignUpScreen from './screens/signUpScreen';
import HomeScreen from './screens/homeScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  const [initialRoute, setInitialRoute] = useState('AuthNavigator');

  useEffect(() => {
    const checkAuth = async () => {
      const userDataString = await AsyncStorage.getItem('userData');
      
      auth.onAuthStateChanged((user) => {
        if (user && userDataString) {
          setInitialRoute('AppNavigator');
        }
      });
    };

    checkAuth();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <GluestackUIProvider mode='light'>
        <NavigationContainer>
          <Stack.Navigator 
            initialRouteName={initialRoute}
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </GluestackUIProvider>
    </View>
  );
}