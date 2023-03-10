import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 50,
    zIndex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 20,
  },
  logo: {
    width: 100,
    height: 30,
    resizeMode: "contain",
  },
  menu: {
    width: 30,
    height: 30,
  },
});

export default styles;
