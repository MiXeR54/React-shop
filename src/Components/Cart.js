import React from "react";
import { connect } from "react-redux";
import { removeFromCart, addToCart } from "../redux/actions/cartActions";

const Cart = (props) => {
  const { cartItems } = props;
  return (
    <div className="col-3">
      <div className="card bg-light">
        <div className="card-header">Корзина</div>
        <div className="card-body">
          <h5 className="card-title">Товары:</h5>
          {cartItems.length === 0 ? "В корзине пусто :(" : null}
          {props.cartItems.length > 0 && (
            <div>
              <ul>
                {props.cartItems.map((item) => {
                  return (
                    <li key={item.id}>
                      <b>{item.title}</b>
                      <button
                        style={{ float: "right" }}
                        className="btn btn-danger btn-xs"
                        onClick={(e) =>
                          props.removeFromCart(props.cartItems, item)
                        }
                      >
                        X
                      </button>
                      <br />
                      {item.count} X {item.price}
                    </li>
                  );
                })}
              </ul>
              <b>
                К оплате:{" "}
                {props.cartItems.reduce((a, c) => a + c.price * c.count, 0)}
              </b>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: state.cart.items,
});
export default connect(mapStateToProps, { addToCart, removeFromCart })(Cart);
