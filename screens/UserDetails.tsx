import React from "react";
import { connect } from "react-redux";
import { View, Text, Image } from "react-native";
import Styles from "../styles/Styles";
import { User, Storetype } from "../types/types";

type Props = {
  user: User;
};

export const UserDetails = ({ user }: Props) => {
  return (
    <View style={Styles.container}>
      <View style={{ alignItems: "center", margin: 20 }}>
        <Image style={Styles.mDp} source={{ uri: user.picture.medium }} />
      </View>
      <Text style={Styles.bText}>Account Details</Text>
      <View style={Styles.detailCard}>
        <Text style={Styles.name}>
          {user.name.first} {user.name.last}
        </Text>
        <Text style={Styles.email}>{user.login.username}</Text>
        <Text style={Styles.email}>{user.email}</Text>
      </View>
      <Text style={Styles.bText}>Address</Text>
      <View style={Styles.detailCard}>
        <Text style={Styles.email}>City: {user.location.city}</Text>
        <Text style={Styles.email}>Country: {user.location.country}</Text>
        <Text style={Styles.email}>State: {user.location.state}</Text>
      </View>
      <Text style={Styles.bText}>Personal Details</Text>
      <View style={Styles.detailCard}>
        <Text style={Styles.email}>Age: {user.dob.age}</Text>
        <Text style={Styles.email}>Phone: {user.phone}</Text>
        <Text style={Styles.email}>Mobile: {user.cell}</Text>
      </View>
    </View>
  );
};

const mapStateToProps = (state: Storetype) => ({
  user: state.userState.user,
});

export default connect(mapStateToProps)(UserDetails);