import { Fragment } from "react";

import "./index.css";

const Footer = (props) => {
  return (
    <Fragment>
      <header className="footer">
        <div>@2022 All Rights Reserved.</div>
        <button>Contact us</button>
        <button>Privacy Policies</button>
        <button>Help</button>
      </header>
    </Fragment>
  );
};
export default Footer;
