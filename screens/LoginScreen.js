import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // simple hardcoded check for demo
    if (email.trim().toLowerCase() === "eman" && password === "1234") {
      navigation.replace("MainTabs");
    } else {
      // allow navigate for demo but show invalid if fields empty
      if (!email || !password) {
        alert("Please enter both email and password");
        return;
      }
      // for demo allow any credentials but show notice
      navigation.replace("MainTabs");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>CampusConnect+</Text>

      <TextInput
        placeholder="Email or username"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        autoCapitalize="none"
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={styles.input}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.outlineButton} onPress={() => navigation.navigate("Signup")}>
        <Text style={styles.outlineText}>Get started / Signup</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 24, backgroundColor: "#ffffff" },
  title: { fontSize: 28, fontWeight: "700", color: "#6C63FF", marginBottom: 36 },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#e6e0ff",
    borderRadius: 10,
    padding: 12,
    marginBottom: 12,
    backgroundColor: "#faf8ff"
  },
  button: {
    width: "100%",
    backgroundColor: "#6C63FF",
    padding: 14,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 8
  },
  buttonText: { color: "#fff", fontWeight: "600", fontSize: 16 },
  outlineButton: {
    width: "100%",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 12,
    borderWidth: 1,
    borderColor: "#6C63FF",
    backgroundColor: "#fff"
  },
  outlineText: { color: "#6C63FF", fontWeight: "600" }
});
