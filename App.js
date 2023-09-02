import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [lower, setLower] = useState(0);
  const [upper, setUpper] = useState(0);
  const [age, setAge] = useState("");

  const calculateLimits = (text) => {
    if (!isNaN(text) && text !== "") {
      setAge(text);
      setLower((220 - parseFloat(text)) * 0.65);
      setUpper((220 - parseFloat(text)) * 0.85);
    } else {
      setAge("");
      setLower(0);
      setUpper(0);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Age:</Text>
      <TextInput
        style={styles.text}
        placeholder="How old are you?"
        keyboardType="number-pad"
        onChangeText={calculateLimits}
      />
      <Text style={styles.text}>HR limits:</Text>
      {age ? (
        <Text style={styles.text}>
          {lower.toFixed(0)} - {upper.toFixed(0)}
        </Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5BF5D7",
    alignItems: "left",
    paddingTop: 200,
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
    marginLeft: 50,
    marginBottom: 10,
  },
});
