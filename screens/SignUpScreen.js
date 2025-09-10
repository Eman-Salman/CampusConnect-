import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

export default function SignupScreen({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = () => {
    if (!name || !email || !password || !confirmPassword) {
      alert("Please fill all fields");
      return;
    }
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    // demo: proceed to main app
    navigation.replace("MainTabs");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create an account</Text>

      <TextInput placeholder="Full name" value={name} onChangeText={setName} style={styles.input} />
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} style={styles.input} autoCapitalize="none" />
      <TextInput placeholder="Password" secureTextEntry value={password} onChangeText={setPassword} style={styles.input} />
      <TextInput placeholder="Confirm password" secureTextEntry value={confirmPassword} onChangeText={setConfirmPassword} style={styles.input} />

      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Sign up</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.link}>Already have an account? Log in</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 24, backgroundColor: "#ffffff" },
  title: { fontSize: 22, fontWeight: "700", color: "#6C63FF", marginBottom: 20 },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#e6e0ff",
    borderRadius: 10,
    padding: 12,
    marginBottom: 10,
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
  link: { color: "#6C63FF", marginTop: 12 }
});
