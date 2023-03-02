import React from "react";
import { View, Text, ImageBackground } from "react-native";
import styles from "./styles";
import StyledButton from "../StyledButton";

const CarItem = (props) => {
  const { name, tagLine, image, tagLineCTA } = props.car;
  return (
    <View style={styles.carContainer}>
      <ImageBackground source={image} style={styles.image} />
      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>
          {tagLine} <Text style={styles.subtitleCTA}>{tagLineCTA}</Text>
        </Text>
      </View>
      <View style={styles.buttonsContainer}>
        <StyledButton
          type="primary"
          content="Découvrir nos véhicules disponibles"
          onPress={() => {
            console.warn("Plus aucun véhicule de disponible");
          }}
        />
        <StyledButton
          type="secondary"
          content="Inventaire disponible"
          onPress={() => {
            console.warn("Les Tesla sont hors stock");
          }}
        />
      </View>
    </View>
  );
};

export default CarItem;
