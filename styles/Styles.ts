import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  bText: {
    fontSize: 20,
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
  },
  userCard: {
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    elevation: 1,
    marginVertical: 6,
    borderRadius: 5,
  },

  dp: {
    height: 50,
    width: 50,
    marginRight: 15,
    borderRadius: 25,
  },
  name: {
    color: "black",
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "left",
  },
  email: {
    color: "grey",
    fontSize: 12,
  },
  profileContainer: {
    padding: 15,
    alignItems: "center",
  },
  mDp: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  detailCard: {
    backgroundColor: "#fff",
    padding: 20,
    elevation: 1,
    marginVertical: 10,
    borderRadius: 5,
  },
});

export default Styles;