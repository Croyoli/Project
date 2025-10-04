import { Text, View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { router } from "expo-router";

export default function Profile() {
  // Static data that will be replaced with dynamic data
  const statsData = [
    'Total Tokens: 0',
    'Adventures Completed: 0', 
    'Adventure Upvotes: 0',
    'Completion Rate: 0%'
  ];

  // Adventure data that will eventually come from database
  const completedAdventures = [
    { id: 1, title: 'Downtown Explorer', completed: true },
    { id: 2, title: 'Historic District Tour', completed: true },
    { id: 3, title: 'Waterfront Adventure', completed: true },
    { id: 4, title: 'Campus Quest', completed: false },
    { id: 5, title: 'Park Discovery', completed: true },
  ];

  const handleAdventurePress = (adventure: { id: number; title: string; completed: boolean }) => {
    console.log(`Selected adventure: ${adventure.title}`);
    // TODO: Navigate to adventure details or replay
    // router.push(`/adventure/${adventure.id}`);
  };
  
  return (
    <ScrollView style={styles.container}>
      {/* Profile Header */}
      <View style={styles.content}>
        <Text style={styles.title}>Profile Name</Text>
      </View>

      {/* Stats Section */}
      <View style={styles.content}>
        <Text style={styles.sectionTitle}>Stats</Text>
        <View style={styles.statsContainer}>
          {statsData.map((stat, index) => (
            <View key={index} style={styles.statItem}>
              <Text style={styles.statText}>{stat}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Completed Adventures Section */}
      <View style={styles.content}>
        <Text style={styles.sectionTitle}>Completed Adventures</Text>
        <View style={styles.adventuresContainer}>
          {completedAdventures.map((adventure) => (
            <TouchableOpacity
              key={adventure.id}
              style={[
                styles.adventureButton,
                adventure.completed ? styles.completedButton : styles.incompleteButton
              ]}
              onPress={() => handleAdventurePress(adventure)}
            >
              <Text style={[
                styles.adventureButtonText,
                adventure.completed ? styles.completedText : styles.incompleteText
              ]}>
                {adventure.title}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  content: {
    padding: 20,
    paddingTop: 60, // Extra padding to move title to top
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: 20,
  },
  statsContainer: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  statItem: {
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  statText: {
    fontSize: 16,
    color: "#555",
  },
  adventuresContainer: {
    gap: 10,
  },
  adventureButton: {
    padding: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  completedButton: {
    backgroundColor: "#34C759", // Green for completed
  },
  incompleteButton: {
    backgroundColor: "#FF9500", // Orange for incomplete
  },
  adventureButtonText: {
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
  completedText: {
    color: "#fff",
  },
  incompleteText: {
    color: "#fff",
  },
});
