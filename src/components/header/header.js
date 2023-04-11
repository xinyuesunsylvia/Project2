import { Fragment } from "react";

import HeaderCartButton from "./headerCart";
import "./header.css";
import { openModal } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import { LOGOUT_SUCCESS } from "../content/form";

const Header = (props) => {
  const login_state = useSelector((state) => state.login_state);
  const dispatch = useDispatch();
  return (
    <Fragment>
      <header className="header">
        <h3>Management</h3>
        <input placeholder="Search" />
        <button onClick={() => dispatch(openModal())}>
          {login_state === LOGOUT_SUCCESS ? "Sign In" : "Sign Out"}
        </button>
        <HeaderCartButton />
      </header>
    </Fragment>
  );
};
export default Header;
