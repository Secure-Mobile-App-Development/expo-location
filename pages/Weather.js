import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Alert } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { TextInput } from "react-native-paper";
import { WEATHER_API_KEY as API_key } from "@env";

const WeatherApp = ({ route }) => {
  const [loading, setLoading] = useState(true);
  const [currWeatherData, setCurrWeatherData] = useState({});
  const [searchCity, setSearchCity] = useState("");

  async function getWeather(latitude, longitude) {
    try {
      const weather = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_key}`
      );
      var data = await weather.json(); 
      if (!(data.cod === 200))
        throw Error("Something went wrong");
      return data;
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
  }

  function getTime(time) {
    var date = new Date(time * 1000);
    var hours = date.getHours();
    var minutes = "0" + date.getMinutes();
    var seconds = "0" + date.getSeconds();

    return `${hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2)}`;
  }

  useEffect(() => {
    (async () => {
      setLoading(true)
      const weatherData = await getWeather(
        route.params.latitude,
        route.params.longitude
      );
      setCurrWeatherData(weatherData);
      setLoading(false);
    })();
  }, []);

  async function submitText() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=${API_key}`
      );
      const data = await response.json();
      if (!(data.cod === 200))
        throw Error("City isn't available to view");
      setCurrWeatherData(data);
      setLoading(false);
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
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Weather App</Text>
      </View>
      <TextInput
        style={styles.weatherCityInput}
        placeholder="Enter City"
        value={searchCity}
        onChange={(text) => setSearchCity(text.nativeEvent.text)}
        onSubmitEditing={submitText}
      />
      <View style={styles.content}>
        {loading ? (
          <ActivityIndicator size="large" />
        ) : (
          <>
            <Text style={styles.weatherCityName}>{currWeatherData.name} </Text>
            <Text style={styles.temperatureCity}>
              {" "}
              {Math.round(currWeatherData.main.temp - 273)}°
            </Text>
            <Text style={styles.tempText}>
              {currWeatherData.weather[0].main},{" "}
              {currWeatherData.weather[0].description}
            </Text>
            <View style={styles.weatherDataContainer}>
              <View style={styles.weatherColumns}>
                <Text style={{ fontSize: 16, fontWeight: "600" }}>
                  Pressure : {currWeatherData.main.pressure}hPa
                </Text>
                <Text style={{ fontSize: 16, fontWeight: "600" }}>
                  Humidity : {currWeatherData.main.humidity}%
                </Text>
                <Text style={{ fontSize: 16, fontWeight: "600" }}>
                  Sea Level : {currWeatherData.main.sea_level || " - "}
                </Text>
                <Text style={{ fontSize: 16, fontWeight: "600" }}>
                  Ground : {currWeatherData.main.grnd_level || " - "}
                </Text>
              </View>

              <View style={styles.weatherColumns}>
                <Text style={{ fontSize: 16, fontWeight: "600" }}>
                  Visibility : {Math.round(currWeatherData.visibility / 1000)}{" "}
                  Km
                </Text>
                <Text style={{ fontSize: 16, fontWeight: "600" }}>
                  Wind : {currWeatherData.wind.speed} mi/hr
                </Text>
                <Text style={{ fontSize: 16, fontWeight: "600" }}>
                  Sunrise : {getTime(currWeatherData.sys.sunrise)}
                </Text>
                <Text style={{ fontSize: 16, fontWeight: "600" }}>
                  Sunset : {getTime(currWeatherData.sys.sunset)}
                </Text>
              </View>
            </View>
            <View style={styles.weatherFooter}>
              <View
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text style={{ color: "#fff", fontWeight: 400 }}>
                  Temp Max.
                </Text>
                <Text style={{ color: "#fff", fontWeight: 400 }}>
                  {Math.round(currWeatherData.main.temp_max - 273)}
                </Text>
              </View>
              <View
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text style={{ color: "#fff", fontWeight: 400 }}>
                  Temp Min.
                </Text>
                <Text style={{ color: "#fff", fontWeight: 400 }}>
                  {Math.round(currWeatherData.main.temp_min - 273)}
                </Text>
              </View>
              <View
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text style={{ color: "#fff", fontWeight: 400 }}>
                  Feels Like
                </Text>
                <Text style={{ color: "#fff", fontWeight: 400 }}>
                  {Math.round(currWeatherData.main.feels_like - 273)}
                </Text>
              </View>
            </View>
          </>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eef5fb",
  },
  header: {
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3498db",
  },
  headerText: {
    paddingTop: 20,
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  weatherCityInput: {
    width: "85%",
    height: 50,
    borderRadius: 10,
    backgroundColor: "transparent",
    margin: 20,
  },
  content: {
    flex: 1,
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
  footer: {
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3498db",
  },
  footerText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },
  weatherCityName: {
    fontSize: 30,
    fontWeight: "bold",
  },
  temperatureCity: {
    fontSize: 70,
    fontWeight: 900,
  },
  weatherColumns: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
  },
  weatherDataContainer: {
    height: "45%",
    width: "85%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "space-around",
  },
  tempText: {
    fontSize: 20,
  },
  weatherFooter: {
    width: "85%",
    height: 60,
    backgroundColor: "#000080",
    borderRadius: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});

export default WeatherApp;
