import {
  DISPLAY_ALERT,
  CLEAR_ALERT,
  WAITING_TO_FETCH,
  GET_ALL_ANIMALS,
  CHANGE_PAGE,
  OPERATION_USER_BEGIN,
  REGISTER_USER_OK,
  REGISTER_USER_ERROR,
  LOGIN_USER_OK,
  LOGIN_USER_ERROR,
  LOGOUT_USER,
} from "../actionTypesAndCreators";

const token = localStorage.getItem("token");
const user = localStorage.getItem("user");

const initialState = {
  isLoading: false,
  user: user ? JSON.parse(user) : null,
  token: token,
  showAlert: false,
  alertText: "",
  alertType: "",
  page: 1,
  animals: [],
  totalAnimals: 0,
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
    case OPERATION_USER_BEGIN: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case WAITING_TO_FETCH: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case REGISTER_USER_OK: {
      return {
        ...state,
        isLoading: false,
        user: action.payload.user,
      };
    }
    case REGISTER_USER_ERROR: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case LOGIN_USER_OK: {
      return {
        ...state,
        isLoading: false,
        user: action.payload.user,
        token: action.payload.token,
      };
    }
    case LOGIN_USER_ERROR: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case LOGOUT_USER: {
      return {
        ...state,
        isLoading: false,
        user: null,
        token: null,
      };
    }
    case GET_ALL_ANIMALS: {
      return {
        ...state,
        isLoading: false,
        animals: action.payload.items,
        totalAnimals: action.payload.totalNumber,
      };
    }
    default: {
      return state;
    }
  }
}
