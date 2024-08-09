import { View, Image, Text, TouchableOpacity } from "react-native";
import ImageProfile from "../../../assets/profile.jpg";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

import { styles } from "./styles";

interface ItemListProps {
  name: string;
  value: number | string;
}

export function ItemList({ name, value }: ItemListProps) {
  const buttonBackgroundColor = typeof value === "string" ? "red" : "green";
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 6 }}>
        <Image style={styles.imageContainer} source={ImageProfile} />
        <Text style={styles.textContainer}>{name}</Text>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 20 }}>
        <View
          style={[
            styles.buttonContainer,
            { backgroundColor: buttonBackgroundColor },
          ]}
        >
          <Text style={styles.textButton}>{value}</Text>
        </View>
        <View
          style={{
            width: 35,
            height: 30,
            borderRadius: 5,
            backgroundColor: "#dbdfe4",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <FontAwesome5 name="user-plus" size={18} color="black" />
        </View>
      </View>
    </View>
  );
}
