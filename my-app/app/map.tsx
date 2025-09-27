import React, { useEffect, useState } from "react";
import { StyleSheet, View, ActivityIndicator, Alert, Platform } from "react-native";
import MapView, { Marker, Region } from "react-native-maps";
import * as Location from "expo-location";

export default function MapScreen() {
  const [region, setRegion] = useState<Region>({
    latitude: 37.7749,       // default: San Francisco
    longitude: -122.4194,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      // Ask for location permissions
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        Alert.alert("Permission denied", "Enable location in settings to use the map.");
        setLoading(false);
        return;
      }

      // Get current location
      let { coords } = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.High,
      });

      setRegion({
        latitude: coords.latitude,
        longitude: coords.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      });

      setLoading(false);
    })();
  }, []);

  if (loading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <MapView
      style={styles.map}
      region={region}
      showsUserLocation={true}
      showsMyLocationButton={true}
      mapType={Platform.OS === "ios" ? "standard" : "mutedStandard"} // Android styling
    >
      <Marker coordinate={{ latitude: region.latitude, longitude: region.longitude }} title="You are here" />
    </MapView>
  );
}

const styles = StyleSheet.create({
  map: { flex: 1 },
  loading: { flex: 1, justifyContent: "center", alignItems: "center" },
});

