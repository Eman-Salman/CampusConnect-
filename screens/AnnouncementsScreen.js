import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ANNOUNCEMENTS = [
  {
    id: "a1",
    title: "Holiday Notice",
    body: "Campus will be closed on March 23, 2025."
  },
  {
    id: "a2",
    title: "Library Hours",
    body: "Library hours extended until 9:00 PM starting next week."
  },
  {
    id: "a3",
    title: "Shuttle Service",
    body: "New shuttle schedule will be effective on 14 September."
  }
];

export default function AnnouncementsScreen() {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.body}>{item.body}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Announcements</Text>
      <FlatList data={ANNOUNCEMENTS} keyExtractor={(i) => i.id} renderItem={renderItem} contentContainerStyle={{ paddingBottom: 24 }} />
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
  body: { fontSize: 14, color: "#333", marginTop: 8 }
});
