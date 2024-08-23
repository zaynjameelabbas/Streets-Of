import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { styles } from '@/components/styles/homeScreenStyles';
import { auth } from "@/firebaseConfig";

export default function HomeScreen() {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      setUserName(user.displayName || 'User');
    }
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Welcome to Streets of,</Text>
      <Text style={styles.userText}>{userName}</Text>
    </View>
  );
}
