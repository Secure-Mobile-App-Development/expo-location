import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import WeatherPage from "../pages/Weather";
import MapsPage from "../pages/Maps";
import ProfileScreen from "../pages/Profile";

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createMaterialBottomTabNavigator();

export default function App({ route }) {
  return (
    <Tab.Navigator
      activeColor="#0F52BA"
      inactiveColor="#000"
      barStyle={{ backgroundColor: "#abccff" }}
      initialRouteName="Profile"
    >
      <Tab.Screen
        name="Weather"
        component={WeatherPage}
        initialParams={route.params}
        options={{
          tabBarLabel: "Weather",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="weather-partly-cloudy" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen name="Profile" component={ProfileScreen} initialParams={route.params} options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account-circle-outline" color={color} size={26} />
          ),
        }}/>
      <Tab.Screen name="Near by" component={MapsPage} initialParams={route.params}  options={{
          tabBarLabel: "Near By",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="map" color={color} size={26} />
          ),
        }}/>
    </Tab.Navigator>
  );
}
