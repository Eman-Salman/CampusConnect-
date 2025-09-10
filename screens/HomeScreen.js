import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1529333175560-0a20ca5a0e3d?auto=format&fit=crop&w=1200&q=60",
        }}
        style={styles.banner}
        resizeMode="cover"
      />

      <Text style={styles.header}>Welcome, Eman</Text>
      <Text style={styles.subtitle}>
        Your one-stop app for campus events and announcements
      </Text>

      <View style={styles.card}>
        <Text style={styles.title}>Next Event</Text>
        <Text style={styles.body}>Tech Fest 2025</Text>
        <Text style={styles.bodySmall}>March 15, 2025 · Auditorium</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Events")}
        >
          <Text style={styles.buttonText}>View all events</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 16 },
  banner: {
    width: "100%",
    height: 200,
    borderRadius: 12,
    marginBottom: 16,
  },
  header: {
    fontSize: 22,
    fontWeight: "700",
    color: "#6C63FF",
    textAlign: "center",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: "#333",
    textAlign: "center",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#f6f3ff",
    padding: 14,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 1,
  },
  title: { fontSize: 16, fontWeight: "700", color: "#222", marginBottom: 6 },
  body: { fontSize: 14, color: "#333", marginBottom: 4 },
  bodySmall: { fontSize: 13, color: "#666", marginBottom: 10 },
  button: {
    backgroundColor: "#6C63FF",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
  },
});
