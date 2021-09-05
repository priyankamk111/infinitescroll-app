import React, { useState, useEffect } from "react";
import { Button, FlatList, Text, View, ActivityIndicator } from "react-native";
import { connect } from "react-redux";
import UserCard from "../components/UserCard";
import { Storetype, User } from "../types/types";
import { getUsers, getUserDetails } from "../redux/action";
import Styles from "../styles/Styles";

type Props = {
  users: User[];
  getUsers: Function;
  getUserDetails: Function;
  navigation: {
    navigate: Function;
  };
};

const Home = ({ users, getUsers, navigation, getUserDetails }: Props) => {
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUsers(10, page);
    setLoading(false);
  }, [page]);

  return (
    <View style={Styles.container}>
      <Text style={Styles.bText}>List of users</Text>
      <FlatList
        data={users}
        renderItem={({ item }) => (
          <UserCard
            navigation={navigation}
            getDetails={getUserDetails}
            user={item}
          />
        )}
        keyExtractor={(item) => item.email}
        ListEmptyComponent={<Text>No users found</Text>}
        onEndReached={() => {
          setLoading(true);
          setPage(page + 1);
        }}
        onEndReachedThreshold={10}
        refreshing={loading}
        onRefresh={() => setPage(1)}
      />
      {loading && <ActivityIndicator size="large" color="#00ff00" />}
    </View>
  );
};

const mapstateToProps = (state: Storetype) => ({
  users: state.userState.users,
});

export default connect(mapstateToProps, { getUsers, getUserDetails })(Home);