import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function ProfileScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>My Profile</Text>

      <Image
        source={{
          uri: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
        }}
        style={styles.avatar}
      />

      <Text style={styles.name}>Eman</Text>
      <Text style={styles.info}>BS Computer Science</Text>
      <Text style={styles.info}>ID: BSCS-12345</Text>

      <TouchableOpacity
        style={styles.logout}
        onPress={() => navigation.replace("Login")}
      >
        <Text style={styles.logoutText}>Log out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    alignItems: "center",
  },
  header: {
    fontSize: 20,
    fontWeight: "700",
    color: "#6C63FF",
    marginBottom: 16,
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 55,
    marginBottom: 12,
  },
  name: { fontSize: 18, fontWeight: "700", color: "#222" },
  info: { fontSize: 14, color: "#555", marginTop: 6 },
  logout: {
    marginTop: 30,
    backgroundColor: "#6C63FF",
    paddingVertical: 12,
    paddingHorizontal: 36,
    borderRadius: 10,
  },
  logoutText: { color: "#fff", fontWeight: "700" },
});
