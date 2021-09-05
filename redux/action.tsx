import axios from "axios";
import { Dispatch } from "redux";
import { User } from "../types/types";

const getUsers =
  (count = 10, page = 1) =>
  (dispatch: Dispatch) =>
    axios
      .get(`https://randomuser.me/api/?page=${page}&results=${count}`)
      .then((res) => {
        dispatch({
          type: page === 1 ? "SET_USERS" : "ADD_USERS",
          payload: res.data.results,
        });
      })
      .catch((err) => {
        alert(JSON.stringify(err, null, 2));
      });

const getUserDetails = (user: User) => (dispatch: Dispatch) =>
  dispatch({ type: "SET_SINGLE_USER", payload: user });

export { getUsers, getUserDetails };