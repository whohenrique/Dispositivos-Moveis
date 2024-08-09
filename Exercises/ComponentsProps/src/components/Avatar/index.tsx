import { View, Image, Text } from "react-native";
import { Button } from "../Button";
import ImageProfile from "../../../assets/profile.jpg";

import { styles } from "./styles";

interface AvatarGroupProps {
  name: string;
}

export function Avatar({ name }: AvatarGroupProps) {
  return (
    <View style={styles.container}>
      <View
        style={{
          width: "80%",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: 20,
        }}
      >
        <Image style={styles.imageContainer} source={ImageProfile} />
        <Text style={styles.titleContainer}>{name}</Text>
      </View>
      <View style={{ width: "80%", height: 2, backgroundColor: "#dbdfe4" }} />
      <View
        style={{
          width: "90%",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <Button title="View Profile" height={40} width={120} color="gray" />
        <Button title="Update" height={40} width={120} color="green" />
      </View>
    </View>
  );
}
