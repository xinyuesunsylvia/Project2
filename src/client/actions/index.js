import {
  LOGIN,
  SIGNUP,
  RESET_PASSWORD,
  CLOSE_MODAL,
  OPEN_MODAL,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
} from "../components/content/form";

export const closeModal = (content) => {
  return {
    type: CLOSE_MODAL,
    // payload: {
    //   login_state: LOGIN,
    //   modal_state: CLOSE_MODAL,
    // },
  };
};

export const openModal = (content) => {
  return {
    type: OPEN_MODAL,
  };
};

export const loginState = (content) => {
  return {
    type: LOGIN,
    payload: {
      login_window_state: content,
    },
  };
};

export const signupState = (content) => {
  return {
    type: SIGNUP,
    payload: {
      login_window_state: content,
    },
  };
};

export const resetState = (content) => {
  return {
    type: RESET_PASSWORD,
    payload: {
      login_window_state: content,
    },
  };
};

export const loginSuccess = (content) => {
  return {
    type: LOGIN_SUCCESS,
    payload: {
      login_state: content,
    },
  };
};

export const logoutSuccess = (content) => {
  return {
    type: LOGOUT_SUCCESS,
    payload: {
      login_state: content,
    },
  };
};
