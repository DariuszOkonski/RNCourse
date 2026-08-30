import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text>Another peace of text</Text>
      </View>
      <Text
        style={{
          margin: 16,
          borderWidth: 2,
          borderColor: "red",
          padding: 16,
        }}
      >
        Hello world
      </Text>
      <Button title="Tap Me" />
    </View>
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
