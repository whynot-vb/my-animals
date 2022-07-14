import * as api from "../api";

export const DISPLAY_ALERT = "DISPLAY_ALERT";
export const CLEAR_ALERT = "CLEAR_ALERT";

export const WAITING_TO_FETCH = "WAITING_TO_FETCH";
export const GET_ALL_ANIMALS = "GET_ALL_ANIMALS";
export const CHANGE_PAGE = "CHANGE_PAGE";

export const OPERATION_USER_BEGIN = "OPERATION_USER_BEGIN";
export const REGISTER_USER_OK = "REGISTER_USER_OK";
export const REGISTER_USER_ERROR = "REGISTER_USER_ERROR";
export const LOGIN_USER_OK = "LOGIN_USER_OK";
export const LOGIN_USER_ERROR = "LOGIN_USER_ERROR";
export const LOGOUT_USER = "LOGOUT_USER";

export const addUserToLocalStorage = ({ user, token }) => {
  localStorage.setItem("user", JSON.stringify(user));
  localStorage.setItem("token", token);
};

export const removeUserFromLocalStorage = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};

export const register = (newUser) => async (dispatch) => {
  dispatch({ type: OPERATION_USER_BEGIN });
  try {
    const { data } = await api.register(newUser);
    const { user } = data;
    dispatch({ type: REGISTER_USER_OK, payload: { user } });
  } catch (error) {
    dispatch({ type: REGISTER_USER_ERROR });
  }
};

export const login = (existingUser) => async (dispatch) => {
  dispatch({ type: OPERATION_USER_BEGIN });
  try {
    const { data } = await api.login(existingUser);
    const { user, token } = data;
    dispatch({ type: LOGIN_USER_OK, payload: { user, token } });
    addUserToLocalStorage({ user, token });
    // dispatch(
    //   displayAlert(
    //     "success",
    //     "You logged in successfully. Rerouting to the home page."
    //   )
    // );
  } catch (error) {
    dispatch({ type: LOGIN_USER_ERROR });
    // dispatch(displayAlert("error", "Failed to login user"));
  }
};

export const logout = () => async (dispatch) => {
  await dispatch({ type: LOGOUT_USER });
  removeUserFromLocalStorage();
};

export const getAllAnimals = () => async (dispatch) => {
  dispatch({ type: WAITING_TO_FETCH });
  try {
    const { data } = await api.getAllAnimals();
    dispatch({
      type: GET_ALL_ANIMALS,
      payload: {
        items: data.items,
        totalNumber: data.totalNumber,
      },
    });
  } catch (error) {}
};
