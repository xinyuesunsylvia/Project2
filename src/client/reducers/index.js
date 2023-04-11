import {
  CLOSE_MODAL,
  OPEN_MODAL,
  LOGIN,
  SIGNUP,
  RESET_PASSWORD,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
} from "../components/content/form/index";

export const reducer = (
  state = {
    modal_state: OPEN_MODAL,
    login_window_state: LOGIN,
    login_state: LOGOUT_SUCCESS,
  },
  action
) => {
  switch (action.type) {
    case OPEN_MODAL:
      return { ...state, modal_state: OPEN_MODAL };

    case CLOSE_MODAL:
      return { ...state, modal_state: CLOSE_MODAL };
    // return {
    //   ...state,
    //   modal_state: CLOSE_MODAL,
    //   login_state: action.payload.login_state,
    // };

    case LOGIN:
      return { ...state, login_window_state: LOGIN };

    case SIGNUP:
      return { ...state, login_window_state: SIGNUP };

    case RESET_PASSWORD:
      return { ...state, login_window_state: RESET_PASSWORD };

    case LOGIN_SUCCESS:
      return { ...state, login_state: LOGIN_SUCCESS };

    case LOGOUT_SUCCESS:
      return { ...state, login_state: LOGOUT_SUCCESS };

    default:
      return state;
  }
};
