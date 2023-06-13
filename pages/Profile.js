import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const ProfileScreen = ({navigation, route}) => {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image source={require("../assets/icon.png")} style={styles.avatar} />
        <Text style={styles.name}>{route.params.username}</Text>
        <View style={styles.infoContainer}>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Phone:</Text>
            <Text style={styles.infoValue}>{route.params.phoneNumber}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Email:</Text>
            <Text style={styles.infoValue}>{route.params.email}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Location:</Text>
            <Text style={styles.infoValue}>{route.params.latitude}° N, {route.params.longitude}° W</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Password:</Text>
            <Text style={styles.infoValue}>Dont Worry, we wont release your Password</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EAF2F8",
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  profileContainer: {
    backgroundColor: "#FFF",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    elevation: 5,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  infoContainer: {
    width: "100%",
  },
  infoRow: {
    flexDirection: "row",
    marginBottom: 10,
    alignItems: "center",
  },
  infoLabel: {
    width: "30%",
    fontSize: 16,
    color: "#555",
    fontWeight: "bold",
  },
  infoValue: {
    width: "70%",
    fontSize: 16,
    color: "#333",
  },
});

export default ProfileScreen;
