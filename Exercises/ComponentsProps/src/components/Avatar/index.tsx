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
      <View style={styles.center}>
        <Image style={styles.imageContainer} source={ImageProfile} />
        <Text style={styles.titleContainer}>{name}</Text>
      </View>
      <View style={styles.containerButtons}>
        <Button title="View Profile" height={44} width={100} color="gray" />
        <Button title="Update" height={44} width={100} color="green" />
        <Button title="Delete" height={44} width={100} color="red" />
      </View>
    </View>
  );
}
