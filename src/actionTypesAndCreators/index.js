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

export const changePage = (page) => async (dispatch) => {
  dispatch({ type: CHANGE_PAGE, payload: page });
};

export const displayAlert = (alertType, alertText) => async (dispatch) => {
  dispatch({ type: DISPLAY_ALERT, payload: { alertType, alertText } });
  setTimeout(() => {
    dispatch({ type: CLEAR_ALERT });
  }, 4000);
};

export const register = (newUser) => async (dispatch) => {
  dispatch({ type: OPERATION_USER_BEGIN });
  try {
    const { data } = await api.register(newUser);
    const { user } = data;
    await dispatch({ type: REGISTER_USER_OK, payload: { user } });
    await dispatch(
      displayAlert(
        "success",
        "You successfully registered. Now please log in with your account to see animals"
      )
    );
  } catch (error) {
    await dispatch({ type: REGISTER_USER_ERROR });
    await dispatch(
      displayAlert(
        "error",
        "Failed to register user. Please provide all the required fields. Your email must be valid. Your password must have at least 5 characters and at least one letter and one number"
      )
    );
  }
};

export const login = (existingUser) => async (dispatch) => {
  dispatch({ type: OPERATION_USER_BEGIN });
  try {
    const { data } = await api.login(existingUser);
    const { user, token } = data;
    await dispatch({ type: LOGIN_USER_OK, payload: { user, token } });
    addUserToLocalStorage({ user, token });
    await dispatch(
      displayAlert(
        "success",
        "You logged in successfully. Rerouting to the home page to see animals"
      )
    );
  } catch (error) {
    await dispatch({ type: LOGIN_USER_ERROR });
    await dispatch(
      displayAlert(
        "error",
        "Failed to login user. Your email or password is incorrect."
      )
    );
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

export const getAnimalsByPage = (page) => async (dispatch) => {
  dispatch({ type: WAITING_TO_FETCH });
  try {
    const { data } = await api.getAnimalsByPage(page);
    dispatch({
      type: GET_ALL_ANIMALS,
      payload: {
        items: data.items,
        totalNumber: data.totalNumber,
      },
    });
  } catch (error) {
    dispatch(
      displayAlert("error", "Unable to get animals.Please try again later.")
    );
  }
};
