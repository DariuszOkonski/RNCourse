import { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      {
        text: enteredGoalText,
        id: Math.random().toString(),
      },
    ]);
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} onGoalInput={goalInputHandler} />

      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          keyExtractor={(item) => item.id}
          renderItem={(itemData) => {
            return <GoalItem text={itemData.item.text} />;
          }}
          alwaysBounceVertical={true}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    // backgroundColor: "yellow",
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    backgroundColor: "red",
    flex: 5,
  },
});
