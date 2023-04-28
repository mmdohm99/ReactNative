import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  btnsArea: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",

    width: "50%",
  },
  addArea: {
    backgroundColor: "#aaa0bf",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderBottomColor: "grey",
    borderBottomWidth: 1,
  },
  goalsArea: { flex: 4, marginTop: 30 },
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

    marginBottom: 8,
    marginHorizontal: 10,
  },
  goalItemText: {
    fontSize: 18,
    padding: 10,
    fontWeight: "500",
    borderRadius: 10,
    color: "white",
  },
  img: {
    width: 100,
    height: 100,
    margin: 10,
  },
});
