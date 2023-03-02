import React from "react";
import { View, Text, FlatList, Dimensions } from "react-native";
import styles from "./styles";
import cars from "../../assets/data/cars.js";
import CarItem from "../CarItem";

const CarsList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={cars}
        renderItem={({ item }) => (
          <CarItem car={item} style={styles.container} />
        )}
        snapToAlignment={"start"}
        decelerationRate={"fast"}
        snapToInterval={Dimensions.get("window").height}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
  {
    /*      //snap permet de faire une transition à la tiktok //decelarationRate :
      rapidité de l'animation, showsVerticalScrollIndicator:false enlève la barre de scroll à gauche verticale*/
  }
};

export default CarsList;
