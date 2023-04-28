import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  addArea: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomColor: "grey",
    borderBottomWidth: 1,
  },
  goalsArea: {  flex: 4, marginTop: 30 },
  textBox: {
    paddingHorizontal: 5,
    borderColor: "grey",
    borderWidth: 1,
    width: "72%",
  },
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
  },
  goalItem: {
    backgroundColor: "#aaa0bf",
    borderRadius: 10,
    padding: 10,
    marginBottom: 8,
    marginHorizontal: 10,
  },
  goalItemText: {
    fontSize: 18,
    fontWeight: "500",
    color: "white",
  },
});
