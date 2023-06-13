import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Alert,
  Pressable,
} from "react-native";
import { TouchableOpacity } from "react-native-web";
import * as Location from "expo-location";

const LoginScreen = ({ navigation }) => {
  const [userDetails, setUserDetails] = useState({
    username: "",
    email: "",
    password: "",
    phoneNumber: "",
    longitude: "",
    latitude: "",
    confirmPass: "",
  });

  const handleLogin = async () => {
    // TODO: Perform login logic here
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      userDetails.longitude = location.coords.longitude;
      userDetails.latitude = location.coords.latitude;
      if (
        userDetails.username === "" ||
        userDetails.phoneNumber === "" ||
        userDetails.email === "" ||
        userDetails.password === ""
      )
        throw Error("Please fill all fields");
      if (userDetails.longitude === "" || userDetails.latitude === "")
        throw Error("You have to Allow Location Access");
      if (userDetails.password !== userDetails.confirmPass)
        throw Error("Password and Confirm Password are not the same");
      navigation.navigate("UserHome", { ...userDetails });
    } catch (error) {
      Alert.alert("Something Went Wrong", error.message, [
        {
          text: "Cancel",
          onPress: () => pass,
          style: "cancel",
        },
        { text: "OK", onPress: () => pass },
      ]);
    }
  };

  return (
    <View style={styles.loginPageContainer}>
      <Text style={styles.title}>USER REGISTER</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          name="username"
          value={userDetails.username}
          onChangeText={(text) =>
            setUserDetails((prev) => {
              return { ...prev, username: text };
            })
          }
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          name="email"
          value={userDetails.email}
          onChangeText={(text) =>
            setUserDetails((prev) => {
              return { ...prev, email: text };
            })
          }
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          name="phoneNumber"
          value={userDetails.phoneNumber}
          onChangeText={(text) =>
            setUserDetails((prev) => {
              return { ...prev, phoneNumber: text };
            })
          }
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          name="password"
          secureTextEntry={true}
          onChangeText={(text) =>
            setUserDetails((prev) => {
              return { ...prev, password: text };
            })
          }
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          name="confirmPass"
          secureTextEntry={true}
          onChangeText={(text) =>
            setUserDetails((prev) => {
              return { ...prev, confirmPass: text };
            })
          }
        />
      </View>
      <Button onPress={handleLogin} title="Register" color="#0F52BA" />
    </View>
  );
};

const styles = StyleSheet.create({
  loginPageContainer: {
    flex: 1,
    backgroundColor: "#EAF2F8",
    alignItems: "center",
    justifyContent: "center",
    rowGap: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  inputContainer: {
    width: 300,
    height: 40,
    borderRadius: 10,
    borderColor: "#ccc",
    borderWidth: 1,
  },
  input: {
    height: 40,
    padding: 10,
    fontSize: 16,
  },
});

export default LoginScreen;
