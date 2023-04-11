import React, { Fragment } from "react";
import "./App.css";
// import { Login } from "./components/login";
// import { Signup } from "./components/signup";
import Header from "./components/header/header";
import Modal from "./components/common/modal";
import Home from "./components/home";
import Login from "./components/login";
import Signup from "./components/signup";
import ResetPassword from "./components/resetPassword";
import Footer from "./components/footer";

function App() {
  return (
    <Fragment>
      <Header />
      <Home />
      <Footer />
    </Fragment>
  );
}

export default App;
