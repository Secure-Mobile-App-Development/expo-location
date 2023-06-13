import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import LoginScreen from "./pages/LoginPage";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NavigatorTabs from "./utility/bottomNavigation";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <Button
      title="Go to Jane's profile"
      onPress={() => navigation.navigate("Profile", { name: "Jane" })}
    />
  );
};

const ProfileScreen = () => {
  // {route.params.name}'
  return <Text>This is s profile</Text>;
};

function Home() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Feed"  component={HomeScreen} />
      <Tab.Screen name="Messages" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  
  

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={LoginScreen}
          options={{ title: "Welcome", headerShown: false }}
        />
        <Stack.Screen name="UserHome" options={{headerShown: false}} component={NavigatorTabs}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
