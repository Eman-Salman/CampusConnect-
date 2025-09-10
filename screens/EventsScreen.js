import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert } from "react-native";

const EVENTS = [
  {
    id: "1",
    title: "Job Fair",
    date: "10 September 2025",
    venue: "Auditorium",
    description: "Meet top companies and submit your CV."
  },
  {
    id: "2",
    title: "Hackathon",
    date: "15 September 2025",
    venue: "Computer Lab",
    description: "24-hour coding competition with prizes."
  },
  {
    id: "3",
    title: "Sports Day",
    date: "20 September 2025",
    venue: "Main Ground",
    description: "Athletic events and team competitions."
  }
];

export default function EventsScreen() {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.meta}>{item.date} · {item.venue}</Text>
      <Text style={styles.desc}>{item.description}</Text>
      <TouchableOpacity style={styles.register} onPress={() => Alert.alert("Registration", `You registered for ${item.title}`)}>
        <Text style={styles.registerText}>Register</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Campus Events</Text>
      <FlatList data={EVENTS} keyExtractor={(i) => i.id} renderItem={renderItem} contentContainerStyle={{ paddingBottom: 24 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 16 },
  header: { fontSize: 20, fontWeight: "700", color: "#6C63FF", marginBottom: 12 },
  card: {
    backgroundColor: "#f6f3ff",
    padding: 14,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 1
  },
  title: { fontSize: 16, fontWeight: "700", color: "#222" },
  meta: { fontSize: 13, color: "#666", marginTop: 6 },
  desc: { fontSize: 14, color: "#333", marginTop: 8 },
  register: {
    marginTop: 10,
    alignSelf: "flex-start",
    backgroundColor: "#6C63FF",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8
  },
  registerText: { color: "#fff", fontWeight: "600" }
});
