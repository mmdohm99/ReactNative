import {
  ScrollView,
  Text,
  View,
  Button,
  TextInput,
  FlatList,
} from "react-native";

import { useState } from "react";
import { styles } from "./style";
export default function App() {
  const [goal, setGoal] = useState("");
  const [goalsList, setGoalsList] = useState([]);
  function goalInputHandler(inputText) {
    setGoal(inputText);
  }
  function addGoalHandler() {
    setGoalsList((old) => [...old, goal]);
    setGoal("");
  }

  return (
    <View style={styles.container}>
      <View style={styles.addArea}>
        <TextInput
          onChangeText={goalInputHandler}
          style={styles.textBox}
          placeholder="Enter New Goal!"
          value={goal}
        />
        <Button onPress={addGoalHandler} title="Add Goal" />
      </View>
      <View style={styles.goalsArea}>
        <FlatList
          data={goalsList}
          keyExtractor={(item, index) => {
            return item;
          }}
          renderItem={(dataItem) => (
            <View style={styles.goalItem}>
              <Text style={styles.goalItemText}>{dataItem.item}</Text>
            </View>
          )}
        />

        {/* // some platform like ios may have some issue with elemnt compiling support styling in this case we add warper
            // like view around text to solve it insted pf adding text directly */}
      </View>
    </View>
  );
}
