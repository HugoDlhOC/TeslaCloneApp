import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  carContainer: {
    width: "100%",
    height: Dimensions.get("window").height, //notre composant s'affiche sur tout l'écran, et nous pouvons scroll, contrairement à du height 100%
  },

  titles: {
    width: "100%",
    marginTop: "30%",
    alignItems: "center",
  },

  title: {
    fontSize: 40,
    fontWeight: "600",
  },

  subtitle: {
    fontSize: 18,
    color: "grey",
  },

  subtitleCTA: {
    textDecorationLine: "underline",
  },

  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
  },

  buttonsContainer: {
    position: "absolute",
    bottom: 50,
    width: "100%",
  },
});

export default styles;
