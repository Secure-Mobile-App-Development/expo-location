import React from "react";
import { useState, useEffect } from "react";
import { StyleSheet, View, Button, TextInput } from "react-native";
import { WebView } from "react-native-webview";
import mapTemplate from "../utility/map-template";

export default function MapPage({navigation, route}) {
  let webRef = undefined;

  const [loading, setLoading] = useState(true);
  let [mapCenter, setMapCenter] = useState("-121.913, 37.361");
  const run = `
      document.body.style.backgroundColor = 'blue';
      true;
    `;
  const onButtonClick = async () => {
    const [lng, lat] = mapCenter.split(",");
    setLoading(true);
    await webRef.injectJavaScript(
      `map.setCenter([${parseFloat(lng)}, ${parseFloat(lat)}])`
    );
    setLoading(false);
  };

  const handleMapEvent = (event) => {
    setMapCenter(event.nativeEvent.data);
  };

  useEffect(() => {
    (async () => {
      await webRef.injectJavaScript(
        `map.setCenter([${route.params.longitude}, ${route.params.latitude}])`
      );
      setLoading(false);
    })();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <TextInput
          style={styles.textInput}
          onChangeText={setMapCenter}
          value={mapCenter}
        ></TextInput>
        <Button title="Set Center" onPress={onButtonClick}></Button>
      </View>
        <WebView
          ref={(r) => (webRef = r)}
          onMessage={handleMapEvent}
          style={styles.map}
          originWhitelist={["*"]}
          source={{ html: mapTemplate }}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flex: 1,
  },
  buttons: {
    flexDirection: "row",
    height: "15%",
    backgroundColor: "#fff",
    color: "#000",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 12,
  },
  textInput: {
    height: 40,
    width: "60%",
    marginRight: 12,
    paddingLeft: 5,
    borderWidth: 1,
  },
  map: {
    width: "100%",
    height: "85%",
    alignItems: "center",
    justifyContent: "center",
  },
});
