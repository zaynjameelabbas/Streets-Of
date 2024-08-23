import React from "react";
import { StyleSheet, Text, View, TextInput, Button, Alert } from "react-native";

import { auth } from "@/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function ExampleSignUp() {
  const createUser = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("User created successfully:", user.email);
        Alert.alert("Success", `User ${user.email} created successfully!`);
        // You can add navigation logic here if needed
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Error creating user:", errorCode, errorMessage);
        Alert.alert("Error creating user", `${errorCode}: ${errorMessage}`);
      });
  };
  
  const [email, onChangeEmail] = React.useState("");
  const [password, onChangePassword] = React.useState("");

  return (
    <View style={styles.container}>
      <Text>Email</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeEmail}
        value={email}
      />
      <Text>Password</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangePassword}
        value={password}
        secureTextEntry={true}
      />
      <Button title="Sign Up!" onPress={createUser} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  input: {
    height: 40,
    width: 200,
    margin: 12,
    borderWidth: 1,
    padding: 10
  }
});
