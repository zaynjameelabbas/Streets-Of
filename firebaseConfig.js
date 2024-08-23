// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDx0krTmfrlaL6umLvD8CdOPCXtGMrYQ3U",
//   authDomain: "streets-of.firebaseapp.com",
//   projectId: "streets-of",
//   storageBucket: "streets-of.appspot.com",
//   messagingSenderId: "538228556758",
//   appId: "1:538228556758:web:9ad457bfaa57bacc705a77",
//   measurementId: "G-C6K1Y66NDH"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// export default app;

import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
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

isSupported().then((supported) => {
  if (supported) {
    const analytics = getAnalytics(app);
    console.log("Firebase Analytics initialized successfully");
  } else {
    console.log("Firebase Analytics is not supported in this environment");
  }
});

export { app, auth };
