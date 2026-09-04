import { useState } from "react";
import { Button, StyleSheet, TextInput, View, Modal } from "react-native";

const GoalInput = (props) => {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    // marginBottom: 24,
    padding: 16,
    // borderBottomWidth: 1,
    // borderBottomColor: "#ccc",
    gap: 8,
    // backgroundColor: "yellow",
  },
  textInput: {
    borderWidth: 1,
    // backgroundColor: "green",
    borderColor: "#ccc",
    width: "100%",
    padding: 8,
  },
  buttonContainer: {
    // backgroundColor: "yellow",
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    gap: 8,
  },
  button: {
    width: 100,
  },
});
