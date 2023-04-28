import { styles } from "../style";
import { Text, View, FlatList, Pressable } from "react-native";
function GoalsList({ data, deletex }) {
  return (
    <View style={styles.goalsArea}>
      <FlatList
        data={data}
        keyExtractor={(item, index) => {
          return index;
        }}
        renderItem={(dataItem) => (
          <View style={styles.goalItem}>
            <Pressable
              android_ripple={{ color: "grey" }}
              onPress={() => deletex(dataItem.index)}
            >
              <Text style={styles.goalItemText}>{dataItem.item}</Text>
            </Pressable>
          </View>
        )}
      />
    </View>
  );
}
export default GoalsList;
