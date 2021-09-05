import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";

import Styles from "../styles/Styles";
import { User } from "../types/types";

type Props = {
  user: User;
  getDetails: Function;
  navigation: {
    navigate: Function;
  };
};

const imgUrl: string =
  "https://cdn0.iconfinder.com/data/icons/professional-avatar-5/48/Gamer_male_avatar_men_character_professions-512.png";

const UserCard = ({ user, navigation, getDetails }: Props) => {
  return (
    <TouchableOpacity
      style={Styles.userCard}
      activeOpacity={0.8}
      onPress={() => {
        getDetails(user);
        navigation.navigate("userDetail");
      }}
    >
      <View>
        <Image
          style={Styles.dp}
          source={{ uri: user.picture.thumbnail || imgUrl }}
        />
      </View>
      <View>
        <Text style={Styles.name}>
          {user.name.first} {user.name.last}
        </Text>
        <Text style={Styles.email}>{user.email}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default UserCard;