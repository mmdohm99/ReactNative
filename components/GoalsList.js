import { styles } from "../style";
import { Text, View, FlatList } from "react-native";
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
            <Text
              onPress={() => deletex(dataItem.index)}
              style={styles.goalItemText}
            >
              {dataItem.item}
            </Text>
          </View>
        )}
      />
    </View>
  );
}
export default GoalsList;
