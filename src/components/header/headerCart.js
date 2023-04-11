import CartIcon from "../Cart/cartIcon";
import "./headerCart.css";

const HeaderCartButton = (props) => {
  return (
    <button className="cart">
      <span className="icon">
        <CartIcon />
      </span>
      <span className="badge"> $0.00 </span>
    </button>
  );
};

export default HeaderCartButton;
