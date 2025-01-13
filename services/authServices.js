import AsyncStorage from '@react-native-async-storage/async-storage';
import { auth, db } from '@/firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';

export const checkLoginStatus = async () => {
    try {
        const userInfo = await AsyncStorage.getItem('userInfo');
        return userInfo !== null;
    } catch (error) {
        console.error('Error checking login status:', error);
        return false;
    }
};

export const loginUser = async (user) => {
    try {
        const userDoc = await getDoc(doc(db, 'user', user.uid));
        if (userDoc.exists()) {
            const userData = userDoc.data();
            const userInfo = {
            uid: user.uid,
            email: userData.userEmail,
            username: userData.userName,
            // Add any other relevant user information
        };
        await AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
        } else {
            throw new Error('User data not found');
        }
    } catch (error) {
        console.error('Error logging in:', error);
        throw error;
    }
};

export const logoutUser = async () => {
    try {
        await AsyncStorage.removeItem('userInfo');
        await auth.signOut();
    } catch (error) {
        console.error('Error logging out:', error);
        throw error;
    }
};

export const getUserInfo = async () => {
    try {
        const userInfo = await AsyncStorage.getItem('userInfo');
        return userInfo ? JSON.parse(userInfo) : null;
    } catch (error) {
        console.error('Error getting user info:', error);
        return null;
    }
};
