import { View, Button, TextInput, Modal, Image, Text } from "react-native";
import GoalsList from "./components/GoalsList";
import { useState } from "react";
import { styles } from "./style";
export default function App() {
  const [showModal, setShowMoadal] = useState(false);
  const [goal, setGoal] = useState("");
  const [goalsList, setGoalsList] = useState([]);
  const [showAdded, setShowAdded] = useState(false);

  function added() {
    setTimeout(() => setShowAdded(false), 1500);
  }
  function deleted() {
    setTimeout(() => setShowDeleted(false), 1500);
  }
  function goalInputHandler(inputText) {
    setGoal(inputText);
  }
  function addGoalHandler() {
    setGoalsList((old) => [...old, goal]);
    setGoal("");
    setShowAdded(true);
    added();
  }
  function deleteHandler(text) {
    setGoalsList(goalsList.filter((item, index) => index != text));
  }
  function closeModalHandler(text) {
    setShowMoadal(false);
  }
  return (
    <View style={styles.container}>
      <Button
        title="Add New Goal"
        color={"#ACB1D6"}
        onPress={() => setShowMoadal(true)}
      />

      <Modal visible={showModal} animationType="slide">
        <View style={styles.addArea}>
          <Image
            style={styles.img}
            source={require("./assets/imgs/goal.png")}
          />
          <TextInput
            onChangeText={goalInputHandler}
            style={styles.textBox}
            placeholder="Enter New Goal!"
            value={goal}
          />
          <View style={styles.btnsArea}>
            <Button
              color={"#ACB1D6"}
              onPress={addGoalHandler}
              title="Add Goal"
            />
            <Button
              color={"#ACB1D6"}
              onPress={closeModalHandler}
              title="Cancel"
            />
          </View>

          <View style={styles.added}>
            <Text style={showAdded ? styles.addedText : styles.hidden}>
              Added !
            </Text>
          </View>
        </View>
      </Modal>

      <GoalsList data={goalsList} deletex={deleteHandler} />
      {/* // some platform like ios may have some issue with elemnt compiling support styling in this case we add warper
            // like view around text to solve it insted pf adding text directly */}
    </View>
  );
}
