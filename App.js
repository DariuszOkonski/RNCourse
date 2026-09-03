import { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      {
        text: enteredGoalText,
        id: Math.random().toString(),
      },
    ]);
  }

  function deleteGoalHandler() {
    console.log("!!! delete goal");
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} />

      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          keyExtractor={(item) => item.id}
          renderItem={(itemData) => {
            return (
              <GoalItem
                text={itemData.item.text}
                onDeleteItem={deleteGoalHandler}
              />
            );
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
