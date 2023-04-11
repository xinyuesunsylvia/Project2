import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  LOGIN,
  RESET_PASSWORD,
  SIGNUP,
  OPEN_MODAL,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
} from "../content/form";

import { closeModal } from "../../actions/index";
import Login from "../login";
import Modal from "../common/modal";
import Signup from "../signup";
import ResetPassword from "../resetPassword";

function Home() {
  const login_window_state = useSelector((state) => state.login_window_state);
  const login_state = useSelector((state) => state.login_state);
  const modal_state = useSelector((state) => state.modal_state);
  const dispatch = useDispatch();
  return (
    <>
      {modal_state === OPEN_MODAL && login_state === LOGOUT_SUCCESS && (
        <Modal onClose={() => dispatch(closeModal())}>
          {login_window_state === LOGIN && <Login />}
          {login_window_state === SIGNUP && <Signup />}
          {login_window_state === RESET_PASSWORD && <ResetPassword />}
        </Modal>
      )}

      {modal_state === OPEN_MODAL && login_state === LOGIN_SUCCESS && (
        <Modal onClose={() => dispatch(closeModal())}>
          {login_window_state === RESET_PASSWORD && <ResetPassword />}
          <ResetPassword />
        </Modal>
      )}
    </>
  );
}

export default Home;
