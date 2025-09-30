import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { router } from "expo-router";

export default function Index() {
  const handleProfilePress = () => {
    // Navigate to profile screen
    router.push("/profile");
  };

  const handleStartPress = () => {
    // Navigate to start screen
    router.push("/start");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>The Four Beautiful Guys!</Text>
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleProfilePress}>
          <Text style={styles.buttonText}>Profile</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.button} onPress={handleStartPress}>
          <Text style={styles.buttonText}>Start</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 50,
    textAlign: "center",
  },
  buttonContainer: {
    width: "100%",
    maxWidth: 300,
    gap: 15,
  },
});
