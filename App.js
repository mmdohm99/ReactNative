import { ScrollView, Text, View, Button, TextInput } from "react-native";

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
        <ScrollView>
          {goalsList.map((goal, id) => (
            // some platform like ios may have some issue with elemnt compiling support styling in this case we add warper
            // like view around text to solve it insted pf adding text directly
            <View key={id} style={styles.goalItem}>
              <Text style={styles.goalItemText}>{goal}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}
