import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs>
    <Tabs.Screen
      name="index"
      options = {{
        title: 'Home',
      }}
    />

    <Tabs.Screen
      name="profile"
      options = {{
        title: 'Profile',
      }}
    />

    <Tabs.Screen
      name="start"
      options = {{
        title: 'Start',
      }}
    />

    <Tabs.Screen
      name="map"
      options = {{
        title: 'Map',
      }}
    />
  </Tabs>
  );
}
