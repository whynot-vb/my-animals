import {
  DISPLAY_ALERT,
  CLEAR_ALERT,
  GET_ALL_ANIMALS,
  CHANGE_PAGE,
  REGISTER_USER_OK,
  REGISTER_USER_ERROR,
  LOGIN_USER_OK,
  LOGIN_USER_ERROR,
  LOGOUT_USER,
  CHANGE_IS_MEMBER,
} from "../actionTypesAndCreators";

const token = localStorage.getItem("token");
const user = localStorage.getItem("user");

const initialState = {
  user: user ? JSON.parse(user) : null,
  token: token,
  showAlert: false,
  alertText: "",
  alertType: "",
  page: 1,
  animals: [],
  totalAnimals: 0,
  isMember: false,
};

export default function animalReducer(state = initialState, action) {
  switch (action.type) {
    case DISPLAY_ALERT: {
      return {
        ...state,
        showAlert: true,
        alertType: action.payload.alertType,
        alertText: action.payload.alertText,
      };
    }
    case CLEAR_ALERT: {
      return {
        ...state,
        showAlert: false,
        alertType: "",
        alertText: "",
      };
    }

    case REGISTER_USER_OK: {
      return {
        ...state,
        user: action.payload.user,
        isMember: !state.isMember,
      };
    }
    case REGISTER_USER_ERROR: {
      return {
        ...state,
      };
    }
    case LOGIN_USER_OK: {
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        page: 1,
      };
    }
    case LOGIN_USER_ERROR: {
      return {
        ...state,
      };
    }
    case LOGOUT_USER: {
      return {
        ...state,
        user: null,
        token: null,
        isMember: true,
        animals: [],
      };
    }
    case GET_ALL_ANIMALS: {
      return {
        ...state,
        animals: action.payload.items,
        totalAnimals: action.payload.totalNumber,
      };
    }
    case CHANGE_PAGE: {
      return {
        ...state,
        page: action.payload,
      };
    }
    case CHANGE_IS_MEMBER: {
      return {
        ...state,
        isMember: !state.isMember,
      };
    }
    default: {
      return state;
    }
  }
}
