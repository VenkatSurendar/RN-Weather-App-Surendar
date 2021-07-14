import { View, Text, StyleSheet, Dimensions, Image } from "react-native";

export const SLIDER_WIDTH = Dimensions.get("window").width + 80;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);

const CarouselCardItem = ({ item, index }) => {
  return (
    <View style={styles.container} key={index}>
      <Text style={styles.header}>{item.DateTime}</Text>
      {/* <Text style={styles.body}>{item.body}</Text> */}
    </View>
  );
};

export default CarouselCardItem;
