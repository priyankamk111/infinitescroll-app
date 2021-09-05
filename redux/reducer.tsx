import { UserState, UserAction, UserListAction } from "../types/types";

const initState: UserState = {
  users: [],
  user: {
    name: {
      first: "",
      last: "",
    },
    email: "",
    phone: "",
    cell: "",
    login: {
      username: "",
    },
    picture: {
      thumbnail: "",
      medium: "",
    },
    dob: {
      age: "",
    },
    location: {
      city: "",
      country: "",
      state: "",
    },
  },
};

const reducer = (state = initState, action: UserAction | UserListAction) => {
  switch (action.type) {
    case "SET_USERS":
      return {
        ...state,
        users: action.payload,
      };

    case "ADD_USERS":
      return {
        ...state,
        users: [...state.users, ...action.payload],
      };

    case "SET_SINGLE_USER":
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;