import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyDx0krTmfrlaL6umLvD8CdOPCXtGMrYQ3U",
  authDomain: "streets-of.firebaseapp.com",
  projectId: "streets-of",
  storageBucket: "streets-of.appspot.com",
  messagingSenderId: "538228556758",
  appId: "1:538228556758:web:9ad457bfaa57bacc705a77",
  measurementId: "G-C6K1Y66NDH"
};

const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

const db = getFirestore(app);

isSupported().then((supported) => {
  if (supported) {
    const analytics = getAnalytics(app);
    console.log("Firebase Analytics initialized successfully");
  } else {
    console.log("Firebase Analytics is not supported in this environment");
  }
});

export { app, auth, db };
